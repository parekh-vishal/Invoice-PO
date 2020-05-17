const mongoose = require('mongoose');

const inv = mongoose.Schema({
    invId : String,
    orgId : String,
	user_id : String,
	orgName : String,
    userName : String,
    grpId : String,
    grpName : String,
	inv_no : String,
	supplier_name : String,
	supplierId : String,
	PO_number : String,
	PO_id : String,
	bill_number : String,
	isExpense : Boolean,
	Product_Nature : String,
	HSN_Code : String,
	Quantity : Number,
	Rate : Number,
	additionalRate : Number,
	VAT : String,
    CST: String,
    GST: String,
    service_tax : String,
    excise: Number,
    amount: String,
	create_date : {type: Date, default: Date.now},
	Payment_due_date : String,
	vendor_selection: {
		selected_by: String,
		division: String
	},
	doc_attachment: {
	    invoice: String,
	    PO: String,
	    other_doc: String
	},
	iv_status : [{
		status: String,
		status_description : String,
		status_changedBy: String,
		distributeTo: String,
		status_changeDate : String
	}]
});

module.exports = mongoose.model('Invoice',inv);