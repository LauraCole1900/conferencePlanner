
// Defining methods for the UserController
const db = require("../models");

// Defining methods for the UsersController
module.exports = {
    findAll: function (req, res) {
        db.User
            .find({})
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //checks if user is in DB, if not then saves
    create: function (req, res) {
        db.User
            .findOne({ email: req.body.email }, function (err, user) {
                if (err) {
                    //handle error here
                }

                //if a user was found, that means the user's email matches the entered email
                if (user) {
                    var err = new Error('A user with that email has already registered. Please use a different email..')
                    err.status = 400;
                    return err;
                } else {
                    db.User
                    .create(req.body)
                    .then(dbModel => res.json(dbModel))
                    .catch(err => res.status(422).json(err));
                    
                }
            })

    },
    update: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};

