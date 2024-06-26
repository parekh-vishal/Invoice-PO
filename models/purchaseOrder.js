const mongoose = require('mongoose');
const poSchema = mongoose.Schema({
    orgId : Schema.Types.ObjectId,
	user_id : Schema.Types.ObjectId,
	orgName : String,
	supplier_name : String,
	PO_number : String,
	supplierId : Schema.Types.ObjectId,
	supplier_Number : String,
	po_status : [{
		status: String,
		status_description : String,
		status_changedBy: String,
		distributeTo: String,
		status_changeDate : String
	}],
	userName : String,
	create_date : {type: Date, default: Date.now},
	product_information: {
	    product_name: String,
	    poCategory : String,
	    product_discreption: String,
	    HSN_code: String,
	    quantity: Number,
	    rate: Number,
	    VAT : Number,
	    CST: Number,
	    GST: Number,
	    service_tax : Number,
	    excise: Number,
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
const poCountSchema = mongoose.Schema({
    orgId : Schema.Types.ObjectId,
	form_name : String,
	count : { type: Number, default: 1 }
});
var po = mongoose.model('purchase_order' , poSchema);
var poCount = mongoose.model('poCounter' , poCountSchema);


module.exports = {
	po: po,
	poCount : poCount
};