const mongoose = require('mongoose')

const PO = mongoose.Schema({
	poId : String,
	orgId : String,
	user_id : String,
	userName : String,
	orgName : String,
	grpId : String,
	grpName : String,
	PO_number : String,
	supplier_name : String,
	supplierId : String,
	supplier_Number : String,
	po_status : [{
		status: String,
		status_description : String,
		status_changedBy: String,
		distributeTo: String,
		status_changeDate : {type : Date,default : Date.now}
	}],
	create_date : {type: Date, default: Date.now},
	product_information: {
	    product_name: String,
	    poCategory : String,
	    product_discreption: String,
	    HSN_code: String,
	    quantity: Number,
	    rate: Number,
	    VAT : String,
	    CST: String,
	    GST: String,
	    service_tax : String,
	    excise: String,
	    amount: String,
	    payment_terms : String
	},
	vendor_selection: {
	    selected_by: String,
	    division: String
	},
	budgets_and_approvals: {
	    location: String,
	    budget_head: String,
	    period: String
	},
	doc_attachment: {
	    cancelled_cheque: String,
	    quotation: String,
	    other_doc: []
	}
});

module.exports = mongoose.model("PO",PO);