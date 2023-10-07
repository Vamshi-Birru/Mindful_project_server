const mongoose = require('mongoose');
const UserCardSchema = new mongoose.Schema({
    userId:{
         type:String,
         require:true
    },
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    phone: {
        type: Number,
        require: true
    }
});
module.exports = new mongoose.model("userCard", UserCardSchema);