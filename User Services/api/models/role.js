const mongoose = require('mongoose')
 
const role = mongoose.Schema({
    roleId : {type : String},
    roleName : {type : String, require : "Enter Role Name "}
});

module.exports = mongoose.model('Role',role);