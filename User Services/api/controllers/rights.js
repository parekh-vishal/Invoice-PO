const Rights = require('../models/rights');
const User = require('../models/users');
//Creation of Rights
exports.addRight = (req,res,next)=>{
    var rId;
    var rights;
    Rights.find().select('rights_id').exec()
    .then(result=>{
        if(result.length !=0){
            rId = result[(result.length-1)].rights_id;
        }
        if(rId == null){
            rId = 'rgt0'
        }
        else{
            dum = parseInt(rId.replace('rgt',''));
            dum+=1;
            rId = 'rgt'+dum;
        }
        rights = new Rights({
            rights_id : rId,
            rights_description : req.body.rgt_des
        });
        rights.save()
        .then(result=>{
            res.status(200).json({
                message : 'Rights Entered'
            });
        }).catch(err=>{
            console.log('Error : ',err);
            res.status(404).json({
                error : err
            });
        });
    })
    .catch(err=>{
        console.log("q error ",err);
        res.status(404).json({
            error : err
        });
    });
};

//Right Assignment to User

exports.rgtAssign = (req,res,next)=>{
    var uId = req.body.email;
    var rId = req.body.rgt_id;
    if(User.findOne({email : uId},'email').email==uId){
        console.log(User.findOne({email : uId},'email').email);
        User.update({email : uId},{$set : {rights : rId }})
        .exec()
        .then(result=>{
            res.status(200).json({
                message : 'Rights Assigned'
            });
        })
        .catch(err=>{
            res.status(404).json({
                error : err
            });
        });
    }
    else{
        res.status(404).json({
            message : 'User Not Found'
        });
    }
}