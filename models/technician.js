const mongoose = require('mongoose');

const technicianScheme = new mongoose.Schema({
    
    name : {
        type : String,
        required : true
    },
    
    role : {
        type : String,
        required : true
    },
    contact : {
        type : String,
        required : true
    },
    /*observation : {
        type : String,
        required : true
    },
    
    createdAt : {
        type : Date,
        default : Date.now
    }*/

}, {
    timestamps : true
})

module.exports = mongoose.model('Technician', technicianScheme)