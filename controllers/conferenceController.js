const ObjectId = require('mongodb').ObjectId;
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

  findById: function (req, res) {
    console.log("confId from Conf cont")
    console.log(req.params.confId)
    db.Conference
      .find(ObjectId(req.params.confId))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // .find({"_id": new ObjectId(req.params.confId) })
  //used to display for ones the user is attending
  findAttending: function (req, res) {
    db.Conference
      .find({ registeredUsers: req.params.email })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function (req, res) {
    db.Conference
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function (req, res) {
    console.log("from controller")
    console.log(req.params)
    console.log(req.body)
    db.Conference
      .updateMany({ _id: req.params.id },
        {
          $set:
          {
            EndDate: req.body.EndDate,
            StartDate: req.body.StartDate,
            confType: req.body.confType,
            description: req.body.description,
            location: req.body.location,
            organization: req.body.organization,
            title: req.body.title
          }
        })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  updateForm: function (req, res) {
    db.Conference
      .findOneAndUpdate({ _id: req.params.id }, req.body)
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
    console.log("ConfId from Remove")
    console.log(req.params.id)
    db.Conference
      .findById({ "_id": ObjectId(req.params.id) })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};


