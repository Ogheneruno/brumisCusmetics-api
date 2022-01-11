const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let userSchema = new Schema({
    username: String,

    email: String,

    password: String,

    avatar: String,

    avatarSmall: String,

    secretToken: String,

    confirmed: {
        type: Boolean,
        default: false,
    }

}, {timestamps: true});

module.exports = {
    User: model('user', userSchema)
}