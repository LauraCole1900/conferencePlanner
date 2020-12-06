const db = require("../models");


// Defining methods for the ConferencesController
module.exports = {
  findAll: function(req, res) {
    db.Conference
      .find({})
    //   .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
    create: function(req, res) {
    db.Conference
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }, 

   findById: function(req, res) {
       console.log("from conference controller")
       console.log(req.body.email)
    db.Conference
    .find({ email: "beni.mahat@gmail.com" })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    db.Conference
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Conference
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Conference
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
