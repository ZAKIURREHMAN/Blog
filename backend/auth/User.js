const mongoose = require("mongoose")
const { Schema } = mongoose;

const UserSchema = new Schema({
    img:{
        type:String,
        require:true
    },
    titel:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    des:{
        type:String,
        require:true
    },
    date: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model("blog",UserSchema)