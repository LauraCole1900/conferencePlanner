const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
    confId: { type: String, required: true },
    endTime: { type: String, required: true },
    sessDesc: { type: String, required: true },
    sessName: { type: String, required: true },
    sessPresenter: { type: String, required: true },
    sessionDate: { type: String, required: true },
    startTime: { type: String, required: true },

})

const Session = mongoose.model("Session", SessionSchema)

module.exports = Session;

