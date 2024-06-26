const mongoose = require('mongoose');
const invoiceSchema = mongoose.Schema({
    orgId : Schema.Types.ObjectId,
	user_id : Schema.Types.ObjectId,
	orgName : String,
	userName : String,
	inv_no : String,
	supplier_name : String,
	supplierId : Schema.Types.ObjectId,
	PO_number : String,
	PO_id : Schema.Types.ObjectId,
	bill_number : String,
	isExpense : Boolean,
	Product_Nature : String,
	HSN_Code : String,
	Quantity : Number,
	Rate : Number,
	additionalRate : Number,
	VAT : Number,
    CST: Number,
    GST: Number,
    service_tax : Number,
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
var invoice = mongoose.model('invoice_docs' , invoiceSchema);

module.exports = {
	invoice: invoice
};