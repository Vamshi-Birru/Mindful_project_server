const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
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
    },
    gender: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    about:{
        type:String,
        require:true
    },
    state: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});
module.exports = new mongoose.model("user", UserSchema);