const mongoose = require('mongoose');

const equipScheme = new mongoose.Schema({
    designation : {
        type : String,
        required : true
    },
    model : {
        type : String,
        required : true
    },
    serie : {
        type : String,
        required : true
    },
    voltage : {
        type : Number,
        required : true
    },
    intensity : {
        type : Number,
        required : true
    },
    power : {
        type : Number,
        required : true
    },
    dateFact : {
        type : Date,
        required : true
    },
    factory : {
        type : String,
        //required : true,
        default : null
    },
    country : {
        type : String,
        //required : true,
        default : null
    },
    provider : {
        type : String,
        //required : true,
        default : null
    },
    functionAt : {
        type : Date,
        default : null
    },
    department : {
        type : String,
        required : true
    },
    code : {
        type : Number
    },
    /*createdAt : {
        type : Date,
        default : Date.now
    }*/

}, {
    timestamps : true
})

module.exports = mongoose.model('Equipment', equipScheme)