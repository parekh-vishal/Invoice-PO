var Inv = require('../models/invoice');

//This Function Add New Invoice to System
exports.addInv = (req,res,next)=>{
    var inId;
    var inv;
    Inv.find().select('invId').exec()
    .then(doc=>{
        if(doc.length!=0){
            inId = doc[(doc.length-1)].invId;
        }
        if(inId ==null){
            inId = 'inv0';
        }
        else{
            var dum = parseInt(inId.replace('inv',''));
            dum+=1;
            inId = 'inv'+dum;
        }
        var gId = req.body.grpId;
        var poId = req.body.poId;
        var invNo;
        Inv.find({PO_id : poId},'inv_no').exec()
        .then(doc=>{
            if(doc.length!=0){
                invNo = doc[(doc.length-1)].inv_no;
            }
            if(invNo ==null){
                invNo = 'inv'+gId+'0'
            }
            else{
                var dum = parseInt(invNo.replace('inv'+gId,''));
                dum+=1;
                invNo = 'inv'+gId+dum;
            }
            inv = new Inv({
                invId : inId,
                orgId : req.body.orgId,
	            user_id : req.body.uid,
	            orgName : req.body.orgName,
                userName : req.body.uname,
                grpId : gId,
                grpName : req.body.grpName,
	            inv_no : invNo,
	            supplier_name : req.body.supp_name,
	            supplierId : req.body.supp_id,
	            PO_number : req.body.po_num,
	            PO_id : req.body.poId,
	            bill_number : req.body.billNum,
	            isExpense : req.body.isex,
	            Product_Nature : req.body.prodNature,
	            HSN_Code : req.body.hsn,
	            Quantity : req.body.quant,
	            Rate : req.body.rate,
	            additionalRate : req.body.addRate,
	            VAT : req.body.vat,
                CST: req.body.cst,
                GST: req.body.gst,
                service_tax : req.body.tax,
                excise: req.body.excise,
                amount: req.body.amt,
	            Payment_due_date : req.body.dueDate,
	            vendor_selection: {
		            selected_by: req.body.vendor_selection.selectBy,
		            division : req.body.vendor_selection.div 
	            },
	            doc_attachment: {
	                invoice: req.body.doc_attachment.inv,
	                PO: req.body.doc_attachment.po,
	                other_doc: req.body.doc_attachment.docs
	            },
	            iv_status : [{
		            status: req.body.iv_status[0].state,
		            status_description : req.body.iv_status[0].stateDes,
		            status_changedBy: req.body.iv_status[0].stateChange,
		            distributeTo: req.body.iv_status[0].distTo 
	            }]
            });
            inv.save().then(doc=>{
                res.status(200).json({
                    messsage : 'Invoice Created'
                });
            })
            .catch(err=>{
                console.log(err);
                res.status(500).json(err);
            });
        })
        .catch(err=>{
            console.log(err);
            res.status(404).json(err)
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json(err);
    });
};

//This function Retrieve all Invoice of Irganization

exports.searchInv = (req,res,next)=>{
    Inv.find().select('inv_no').exec()
    .then(doc=>{
        res.status(200).json(doc);
    })
    .catch(err=>{
        console.log(err);
        res.status(404).json(err);
    });
}

//Find All the Invoice of Particular Purchase Order 

exports.findInv = (req,res,next)=>{
    var po_Num = req.body.poNum;
    Inv.find({PO_num : po_num},'inv_no').exec()
    .then(doc=>{
        res.status(200).json(doc)
    })
    .catch(err=>{
        console.log(err);
        res.status.json(err);
    });
}

//This function  Update Status of Invoice
exports.updateState = (req,res,next)=>{
    var inv_id = req.body.invId;
    var status = req.body.state;
	var	st_des =req.body.status_des;
	var	status_chndBy = req.body.status_chang;
    var	distTo = req.body.distTo;
    Inv.find({invId : inv_Id},'inv_status').exec()
    .then(doc=>{
        var statusInfo = doc[0].inv_status;
        var addInfo = {status,st_des,status_chndBy,distTo}
        statusInfo.push(addInfo);
        Inv.update({invId : inv_Id},{$set : {inv_status : statusInfo}}).exec()
        .then(doc=>{
            res.status(200).json({
                messsage : "Invoice Status Updated"
            });
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json(err);
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json(err)
    });
}