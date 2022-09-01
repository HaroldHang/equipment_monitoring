const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const correctiveSchema = new mongoose.Schema({
    date : {
        type : Date,
        default : Date.now
    },
    issue : {
        type : String,
        required : true
    },
    diagnostic : {
        type : String,
        required : true
    },
    actionMade : {
        type : String,
        required : true
    },
    timing : {
        type : Number,
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

module.exports = mongoose.model('CorrectiveEquip', correctiveSchema)