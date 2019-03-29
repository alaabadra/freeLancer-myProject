const bcrypt = require('bcryptjs');
exports.hashPassword = (req,res,next)=>{
    bcrypt.hash(req.body.password,6,(err,hashPass)=>{
        if(hashPass){
            next();
        }else{
            res.render('signup',{
                msg:'intenal server error'
            })
        }
    })
}