const mongoose = require("mongoose");
const db = require("../models/");

// This file empties the Confrence  collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/confrence"
);

const CollectionSeed = [
    {
        title:"Quartiened Coders",
        discription:"Fun Coding Workshops",
        organization: "CodeforthePeople",
        location: "Denver Public Library",
        date: new Date("2020-12-18T16:00:00Z"),
        attendingCount: 0,
    },
    {
        title:"Fantasy Football Draft",
        discription:"Draft NFL fantasy with your friends",
        organization: "Bar Stool Sports",
        location: "The Pub",
        date: new Date("2020-18-18T16:00:00Z"),
        attendingCount: 0,
    },
    
];

db.ConfrenceInfo
  .remove({})
  .then(() => db.ConfrenceInfo.collection.insertMany(CollectionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
