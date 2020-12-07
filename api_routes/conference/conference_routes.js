const router = require("express").Router();
const conferenceController = require("../../controllers/conferenceController.js");
const { Conference } = require("../../models");


// matches with "/api/conference"
router.route("/")
    .get(conferenceController.findAll);

router.route("/post")
    .post(conferenceController.create);

router.route("/:email")
    .get(conferenceController.findByEmail)

router.route("/id/:id")
    .put(conferenceController.updateRegistered)





module.exports = router;