const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
    name: { type: String, required: true },
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
})


const userInfo = mongoose.model("User", userInfoSchema)

module.exports = userInfo;
