const Group = require('../models/group');
const User = require('../models/users');
//Group Creation
exports.addGrp = (req,res,next)=>{
    var grp;
    var gId;
    Group.find().select('grpId').exec()
    .then(result=>{
        if(result.length != 0){
            gId = result[(result.length-1)].grpId;
        }
        if(gId == null){
            gId = 'grp0';
        }
        else{
            var dum = parseInt(gId.replace('grp',''));
            dum+=1;
            gId = 'grp'+dum;
        }
        grp = new Group({
            grpId : gId,
            grpName : req.body.grpName,
            orgId : req.body.orgId,
            status : req.body.status
        });
        grp.save().then(result=>{
            console.log(result)
            res.status(200).json({
                message : 'Group Created'
            });
        })
        .catch(err=>{
            console.log("error : ",err);
            res.status(404).json({
                error : err
            }
                );
        });
    }).catch(err=>{
        console.log('q error : ',err)
    })
}

//Add User into Group
exports.addUser = (req,res,next)=>{
    var gId = req.body.grpId;
    var mail = req.body.email;
    if(Group.findone({grpId:gId},'orgId').orgId==User.findOne({email:mail},'orgId').orgId){
        if(Group.findOne({grpId:gId},'grpId').grpId==gId){
            Group.update({grpId:gId},{$set: {uId : mail}})
            .exec()
            .then(doc=>{
                res.status(200).json({
                    message : 'User Added to Group'
                });
            })
            .catch(err=>{
                res.status(500).json({
                    error : err
                });
            });
        }
        else{
            res.status(404).json({
                error : "Group Not Found"
            });
        }       
    }
    else{
        res.status(500).json({
            error : "User is not eligable to join Group",
            message : "User and Group both need to belong same Organization"
        })
    }
}