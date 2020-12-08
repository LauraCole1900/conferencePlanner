const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Confrence  collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/conference"
);

const ConferenceSeed = [
    {
        EndDate: "2020-12-11",
        StartDate: "2020-12-14",
        confType: "live",
        description: "Get together to code together",
        email: "beni.mahat@gmail.com",
        location: "Denver Public Library",
        organization: "CoderCloser",
        title: "Coders in Quarantine",
        attendingCount: 2,
        registeredUsers: [],
        

    },
    {
        EndDate: "2020-12-12",
        StartDate: "2020-12-16",
        confType: "live",
        description: "Draft for our leauge",
        email: "beni.mahat@gmail.com",
        location: "https://us04web.zoom.us/j/72168422332?pwd=KzljKzhjWU9WK05OdndaL01DN2NtUT09",
        organization: "FantasyFbs",
        title: "Fantasy Football Draft",
        attendingCount: 1,
        registeredUsers: [],
    },
    
];


db.Conference
  .remove({})
  .then(() => db.Conference.collection.insertMany(ConferenceSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
