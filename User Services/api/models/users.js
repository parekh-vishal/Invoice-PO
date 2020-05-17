const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
	user_id : String,
    firstName : {type:String, required : 'Please enter your first name'},
    lastName : {type: String},
	email : {type:String, required: 'Please enter your email',
	match : /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/},
	password : {type:String, required: 'Please enter your password.'},
	organization : {type:String, required: 'Please enter your organization.'},
	orgId : {type: String},
	role : {type: Array},
	join_date : {type: Date, default: Date.now},
	subscriptionId : {type : String},
	rights : {type : Array}
}); 

//var user = mongoose.model('User' , userSchema);
module.exports = mongoose.model('User' , userSchema);