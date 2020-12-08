const ObjectId = require('mongodb').ObjectId;
const db = require("../models");


// Defining methods for the SessionsController
module.exports = {
	findAll: function (req, res) {
		db.Session
			.find({})
			//   .sort({ date: -1 })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	create: function (req, res) {
		db.Session
			.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	//need to fix this to query Sessions by email
	findByConfId: function (req, res) {
		console.log("confID from Controller", req.params.id)
		db.Session
			.find({ confId: req.params.id })
			.then(dbModel => {
				console.log("Model", dbModel)
				res.json(dbModel)
			})
			.catch(err => {
				console.log(err)
				res.status(422).json(err)
			});
	},
	findBySessId: function (req, res) {
    console.log("sessId from Sess cont", req.params.id)
    db.Session
      .find(ObjectId(req.params.id))
      .then(dbModel => {
				console.log("session model", dbModel)
				res.json(dbModel)
			})
      .catch(err => {
				console.log(err)
				res.status(422).json(err)
			});
  },
	create: function (req, res) {
		db.Session
			.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	update: function (req, res) {
		db.Session
			.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	remove: function (req, res) {
		db.Session
			.findById({ _id: req.params.id })
			.then(dbModel => dbModel.remove())
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
};
