const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const divisionScheme = new mongoose.Schema({
    
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
        default : 'A simple division'
    },
    service : {
        type : Schema.Types.ObjectId,
        ref : 'Services',
        required : true
    },
    equipNumb : {
        type : Number,
        default : 0
    }
    
}, {
    timestamps : true
})

module.exports = mongoose.model('Divisions', divisionScheme)