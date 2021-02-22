const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
    author : {
        type : String,
        required : true,
    },
    comment : {
        type : String,
        required : true
    }
},
{
    timestamps : true
})

const dishesSchema = new mongoose.Schema({
    dishname : {
        type : String,
        required : true,
        unique : true
    },
    description : {
        type : String,
        required : true
    },
    comments : [ commentSchema ]
},
{
    timestamps : true
});

module.exports = mongoose.model("dish" , dishesSchema);