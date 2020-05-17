const mongoose = require('mongoose');

const grpSchema = mongoose.Schema({
    grpId : {type : String, require : 'Enter Group Id'},
    grpName : {type : String, require : 'Enter Group Name'},
    orgId : {type : String , require : 'Enter orgID'},
    status : {type : String, require : 'Enter Group Status'},
    regd_date : {type : Date, default : Date.now},
    uId : {type : String}
});

module.exports = mongoose.model('Group',grpSchema);