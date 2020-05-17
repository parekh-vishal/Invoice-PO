const PO = require('../models/po')

//This function used for creation of Purchse Order
 exports.addPo = (req,res,next)=>{
    var poid;
    var po;
    PO.find().select('poId').exec()
    .then(doc=>{
        //console.log(doc[0].poId);
        if(doc.length !=0){
            poid = doc[(doc.length-1)].poId;
        }
        if(poid == null){
            poid = 'po0'
        }
        else{
            var dum = parseInt(poid.replace('po',''));
            dum+=1
            poid = 'po'+dum
        }
        var gId = req.body.grpId;
        var po_num;
        PO.find({grpId : gId},'PO_number').exec()
        .then(doc=>{
            if(doc.length!=0){
                po_num= doc[(doc.length-1)].PO_number;
            }
            if(po_num==null){
                po_num = 'po'+gId+'0'
            }
            else{
                var dum =parseInt(po_num.replace('po'+gId,''));
                dum+=1
                po_num = 'po'+gId+dum;
            }
            po = new PO({
                poId : poid,
                orgId : req.body.orgId,
                user_id : req.body.uid,
                userName : req.body.uname,
                orgName : req.body.orgName,
                grpId : req.body.grpId,
                grpName : req.body.grpName,
                PO_number : po_num,
                supplier_name : req.body.sup_name,
                supplierId : req.body.sup_id,
                supplierNumber : req.body.suppNum,
                po_status : [{
                    status : req.body.po_status[0].status,
                    status_description : req.body.po_status[0].statusDes,
                    status_changedBy : req.body.po_status[0].uid,
                    distributeTo :req.body.po_status[0].disTo
                }],
                product_information : {
                    product_name: req.body.product_information.prod_name,
	                poCategory : req.body.product_information.poCat,
	                product_discreption: req.body.product_information.prod_dis,
	                HSN_code: req.body.product_information.hsn,
	                quantity: req.body.product_information.qunt,
	                rate: req.body.product_information.rate,
	                VAT : req.body.product_information.vat,
	                CST: req.body.product_information.cst,
	                GST: req.body.product_information.gst,
	                service_tax : req.body.product_information.tax,
	                excise: req.body.product_information.excise,
	                amount: req.body.product_information.amt,
	                payment_terms : req.body.product_information.pay_term
                },
                vendor_selection: {
                    selected_by: req.body.vendor_selection.ven_selec,
                    division: req.body.vendor_selection.div
                },
                budgets_and_approvals: {
                    location: req.body.budgets_and_approvals.location,
                    budget_head: req.body.budgets_and_approvals.budgt_hd,
                    period: req.body.budgets_and_approvals.period
                },
                doc_attachment: {
                    cancelled_cheque: req.body.doc_attachment.cancelled_cheque,
                    quotation: req.body.doc_attachment.quote,
                    other_doc: req.body.doc_attachment.otherDoc
                }
            });
            po.save().then(doc=>{
                res.status(200).json({
                    message : 'Purchse Order Created'
                })
            }).catch(err=>{
                console.log(err);
                res.status(500).json({
                    error : err
                });
            });
        })
        .catch();
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error : err
        });
    });    
 }

 //This Function Retrieve all the Purchase Order Associated with Specific Group
exports.searchPo = (req,res,next)=>{
    console.log('ser');
    var grpid = req.body.grpId;
    console.log('ins');
    console.log('in',grpid)
    PO.find({grpId : grpid},'PO_number').exec()
    .then(doc=>{
        res.status(200).json(doc);
    })
    .catch(err=>{
        console.log('error',err);
        res.status(404).json(err);
    });
} 

//This Function Retrive all the Purchase Order of the System
exports.findAll = (req,res,next)=>{
    PO.find().select('PO_number').exec()
    .then(doc=>{
        res.status(200).json(doc);
    })
    .catch(err=>{
        console.log(err);
        res.status(404).json({
            error : err
        });
    })
} 

//Update Status of Purchase Order
exports.updateStatus = (req,res,next)=>{
    var pid = req.body.poid;
    var status = req.body.status;
    var status_description = req.body.status_description;
    var distributeTo = req.body.distributeTo;
    var status_changedBy = req.body.status_changedBy;
    PO.find({poId : pid},'po_status').exec()
    .then(doc=>{
        var status_info = doc[0].po_status
        var addinfo = {status,status_description,status_changedBy,distributeTo}
        status_info.push(addinfo);
        PO.update({poId : pid},{$set : {po_status : status_info}}).exec()
        .then(result=>{
            res.status(200).json({
                message : "Status Updated"
            });
        })
        .catch(err=>{
            res.status(500).json(err);
        });
    })
    .catch(err=>{
        res.status(500).json({
            error : err
        });
    });
}