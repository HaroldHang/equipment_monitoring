const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const equipScheme = new mongoose.Schema({
    designation : {
        type : String,
        required : true
    },
    model : {
        type : String,
        required : true,
        default : "null"
    },
    serie : {
        type : String,
        required : true,
        default : "null"

    },
    voltage : {
        type : Number,
        required : true,
        default : 0
    },
    intensity : {
        type : Number,
        required : true,
        default : 0
    },
    power : {
        type : Number,
        required : true,
        default : 0
    },
    dateFact : {
        type : Date,
        required : true,
        default : Date.now()
    },
    factory : {
        type : String,
        //required : true,
        default : "null"
    },
    country : {
        type : String,
        //required : true,
        default : "null"
    },
    provider : {
        type : String,
        //required : true,
        default : "null"
    },
    functionAt : {
        type : Date,
        default : Date.now()
    },
    department : {
        type : Schema.Types.ObjectId,
        ref : 'Services',
        required : true
    },
    departmentDivision : {
        type : Schema.Types.ObjectId,
        ref : 'Divisions',
        required : true
    },
    code : {
        type : String,
        default : null
    },
    /*createdAt : {
        type : Date,
        default : Date.now
    }*/

}, {
    timestamps : true
})

module.exports = mongoose.model('Equipment', equipScheme)
