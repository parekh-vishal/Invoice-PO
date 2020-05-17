const Role = require('../models/role'); 
const User = require('../models/users');
//Create Role
exports.addRole = (req,res,next)=>{
    var rId;
    var role;
    Role.find().select('roleId').exec().
    then(result=>{
        if(result.length !=0){
            rId = result[(result.length-1)].roleId;
        }
        if(rId == null){
            rId = 'role0'
        }
        else{
            var dum =parseInt(rId.replace('role',''));
            dum+=1;
            rId = 'role'+dum
        }
        role = new Role({
            roleId : rId,
            roleName : req.body.roleName
        });
        role.save()
        .then(result=>{
            res.status(200).json({
                message : 'role Creatred'
            });
        })
        .catch(err=>{
            console.log("Error : ",err);
            res.status(404).json({
                error : err
            });
        });
    }).
    catch(err=>{
        console.log("q error : ",err)
    });
};

//Role Assignment to User
exports.roleAssign = (req,res,next)=>{
    var uid = req.body.email;
    var role = req.body.role;
    if(User.findOne({email : uid},'email').email==uid){
        User.update({email:uid},{$set : {role : role}})
        .exec()
        .then(doc=>{
            res.status(200).json({
                message : 'Role Assigned'
            });
        })
        .catch(err=>{
            res.status(500).json({
                error : err
            });
        })
    }
    else{
        res.status(404).json({
            error : "User Not Found"
        });
    }
}