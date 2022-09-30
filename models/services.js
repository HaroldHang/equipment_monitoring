const mongoose = require('mongoose');

const servicesScheme = new mongoose.Schema({
    
    name : {
        type : String,
        required : true
    },
    genericName : {
        type : String,
        required : true
    },
    description : {
        type : String,
        default : 'Simple Description'
    },
    divisions : {
        type : Number,
        default : 0
    }
    
}, {
    timestamps : true
})

module.exports = mongoose.model('Services', servicesScheme)