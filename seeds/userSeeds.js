const mongoose = require("mongoose");
const db = require("../models/");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/conefrence"
);

const userSeed = [
    {
        name: "Beni MAhat",
        username: "bmahat1291",
        password: "password",
        email: "beni.mahat@gmail.com",
    },
    {
        name: "Alec Rewinkel",
        username: "alecR1234",
        password:"password",
        email: "alecrewinkel@gmail.com",
    },
    
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
