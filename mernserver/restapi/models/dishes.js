const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


const commentSchema = new mongoose.Schema({
    author : {
        type : String,
        required : true
    },
    comment : {
        type : String,
        required : true
    }
},{
    timestamps : true
})

const dishSchema = new mongoose.Schema({
     dishname : {
         type : String,
         required : true,
         unique : true
     },
     description : {
         type : String,
         required : true
     },
     price : {
         type : Currency,
         require : true
     },
     comments : [ commentSchema ]
},{
    timestamps : true
})

module.exports = mongoose.model("dish", dishSchema);