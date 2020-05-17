const mongoose = require('mongoose');

const rights = mongoose.Schema({
    rights_id : {type : String},
    rights_description : {type : String, require : 'Enter Description of this Rights'}
}); 
module.exports = mongoose.model('Rights',rights);