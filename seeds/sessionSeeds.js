const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Confrence  collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/conference"
);

const SessionSeed = [
    {
        confId: "342342",
        endTime: "17:54",
        sessDesc: "We will explore why it is so great",
        sessName: "Why is rick and morty awesome?",
        sessPresenter: "Beni, Alec",
        sessionDate: "2020-12-09",
        startTime: "18:54",

    },
    {
        confId: "96342",
        endTime: "13:54",
        sessDesc: "We will learn the basics of html",
        sessName: "html?",
        sessPresenter: "GarBear",
        sessionDate: "2020-04-09",
        startTime: "18:54",
    },
    
];


db.Session
  .remove({})
  .then(() => db.Session.collection.insertMany(SessionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
