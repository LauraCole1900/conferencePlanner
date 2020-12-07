const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conferenceSchema = new Schema({
    EndDate: { type: String, required: true },
    StartDate: {type: String, required: true},
    organization: {type: String, required: true},
    location: {type: String, required: true},
    confType: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    email: {type: String, required: true},
    attendingCount: {type: Number},
    registeredUsers:[{type: String}]
    
})

const Conference = mongoose.model("Conference", conferenceSchema)

module.exports = Conference;