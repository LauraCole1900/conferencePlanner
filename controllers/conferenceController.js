const { Conference } = require("../models");
const db = require("../models");


// Defining methods for the ConferencesController
module.exports = {
    findAll: function (req, res) {
        db.Conference
            .find({})
            //   .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    create: function (req, res) {
        db.Conference
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //used to display for ones the user has created
    findByEmail: function (req, res) {
        db.Conference
            .find({ email: req.params.email })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //used to display for ones the user is attending
    findAttending: function (req, res) {
        db.Conference
            .find({registeredUsers: req.params.email})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    create: function (req, res) {
        db.Conference
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updateRegistered: function (req, res) {
        db.Conference
            .updateOne({ _id: req.params.id }, { $push: { registeredUsers: req.body.email } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    remove: function (req, res) {
        db.Conference
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};


