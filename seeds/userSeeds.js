const mongoose = require("mongoose");
const db = require("../models/");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/conference"
);

const userSeed = [
    {
        email: "beni.mahat@gmail.com",
        email_verified: true,
        family_name: "mahat",
        given_name: "beni",
        locale: "en",
        name: "beni mahat",
        nickname: "beni.mahat",
        picture: "https://lh3.googleusercontent.com/a-/AOh14GiF0bPBxV392ZH0d4wqZu8__2Bv4XROTr57tiegnHI=s96-c",
        sub: "google-oauth2|109117049832829656401",
        updated_at: "2020-12-05T00:09:07.602Z",
    }

    
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
