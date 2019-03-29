const getUser = require('../model/getUser.js');
const bcrypt = require('bcryptjs');

exports.isFoundForSignup = (req, res, next) => {
    getUser(req.body.email).then(result => {
        if (result.rows[0]) {
            return res.render('signup', {
                msg: 'this name is exist'
            })
        } else {
            next();
        }
    }).catch(err => next(err));
}
exports.isFoundForLogin = (req, res, next) => {
    getUser(req.body.email).then(result => {
        if (!result.rows[0]) {
            return res.render('login', {
                msg: 'you not register in this website,you must go into sign up not here'
            })
        } else {
            bcrypt.compare(req.body.password, result.rows[0].password, (err, isOk) => {
                if (err) {
                    res.render('login', {
                        msg: 'internal server error'
                    })
                } else {
                    const userInfo = {
                        userId: result.rows[0].id,
                        email: result.rows[0].email
                    }
                    jwt.sign(userInfo, process.env.SECRET, (err, cookieEnc) => {
                        if (cookieEnc) {
                            jwt.cookie('jwt', cookieEnc, { maxAge: 10 * 50 * 1000 });
                            return res.redirect('/homeUser');
                        } else {
                            res.render('login', {
                                msg: 'internal server error'
                            })
                        }
                    })
                }
            })

        }
    }).catch(err => next(err));
}