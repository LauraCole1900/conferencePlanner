const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
    title: { type: String, required: true },
    discription: {type: String, required: true},
    organization: {type: String, required: true},
    location: {type: String, required: true},
    date: {type: Date, required: true},
    attendingCount: {type: Number},
})

const Session = mongoose.model("Session", SessionSchema)

module.exports = Session;