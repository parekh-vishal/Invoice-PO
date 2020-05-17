const Organization = require('../models/organization'); 
//Organization Registration
exports.orgReg = (req, res, next)=>{
	var oId;
	var org;
	Organization.find().select('orgId').exec().then(result=>{
		if(result.length != 0){
			oId = result[(result.length-1)].orgId;
		}
	if(oId == null){
		oId = 'org0'
	}
	else{
		console.log('oid',oId);
		var dum = parseInt(oId.replace('org',''));
		console.log('be',dum);
		dum+=1;
		console.log('af',dum);
		oId = 'org'+dum;
	}
	org = new Organization({
		orgId : oId,
        orgName : req.body.orgName,
		ceoName : req.body.ceoName,
		orgPAN : req.body.orgPAN,
		orgGST : req.body.orgGST,
		orgTIN : req.body.orgTIN,
		service_tax_no : req.body.service_tax_no,
		export_import_regd_no : req.body.export_import_regd_no,
		form_regd_no : req.body.form_regd_no,		
		orgAddr1 : req.body.orgAddr1,
		orgAddr2 : req.body.orgAddr2,
		orgCity : req.body.orgCity,
		orgDistrict : req.body.orgDistrict,
		orgState : req.body.orgState,
		orgCountry : req.body.orgCountry,
		orgStatus : req.body.orgStatus,
		subscriptionId : 1
	});
	org.save().then(result =>{
        res.status(201).json({
            message : 'Org Created'
        });
        console.log(result);
    }).catch(err =>{
        console.log("error : ",err);
        res.status(201).json({
            error : err
        });
    });
	}).catch(err=>{
		console.log('q error',err)
	});
}
//Retrieve List all organization
exports.orgRetrive = (req,res,next)=>{
	Organization.find().exec().
	then(result=>{
		res.status(201).json({result});
	})
	.catch(err =>{
		Console.log('error : ',err);
		res.status(404).json({
			error : err
		});
	});
}