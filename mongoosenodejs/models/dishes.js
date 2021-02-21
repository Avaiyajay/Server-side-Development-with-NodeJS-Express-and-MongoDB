const mongoose = require('mongoose');

const dishesSchema = new mongoose.Schema({
    dishname : {
        type : String,
        required : true,
        unique : true
    },
    description : {
        type : String,
        required : true
    }
},
{
    timestamps : true
});

module.exports = mongoose.model("dish" , dishesSchema);