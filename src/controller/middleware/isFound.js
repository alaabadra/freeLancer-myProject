const getUser = require('../model/getUser.js');
exports.isFound = (req,res,next)=>{
    getUser(req.body.email).then(result=>{
        if(result.rows[0]){
            return res.render('signup',{
                msg: 'this name is exist'
            })
        }else{
            next();
        }
    }).catch(err=>next(err));
}