const addUser = require('../model/addUser.js');
exports.addUser =(req,res,next)=>{
    addUser(req.body.firstName,req.body.lastName,req.body.email,req.body.password,
        req.body.freelancerUrl,
        req.body.photoUrl,
        req.body.noMobile,
        req.body.country
        ).then(result=>{
        if(result){
            res.render('signup',{
                msg:'signup successfully'
            })
        }
    }).catch(err=>next(err));
}