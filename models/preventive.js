const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const preventiveSchema = new mongoose.Schema({
    date : {
        type : Date,
        default : Date.now
    },
    interventions : {
        type : String,
        required : true
    },
    
    timing : {
        type : Date,
        required : true
    },
    workingState : {
        type : String,
        required : true
    },
    technician : {
        type : Schema.Types.ObjectId,
        ref : 'Technician',
        required : true
    },
    observation : {
        type : String,
        required : true
    },
    equipId : {
        type : Schema.Types.ObjectId,
        ref : 'Equipment',
        required : true
    },
    /*createdAt : {
        type : Date,
        default : Date.now
    }*/

}, {
    timestamps : true
})

module.exports = mongoose.model('PreventiveEquip', preventiveSchema)