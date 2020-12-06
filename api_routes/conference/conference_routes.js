const router = require("express").Router();
const conferenceController = require("../../controllers/conferenceController.js");
const { Conference } = require("../../models");


// matches with "/api/conference"
router.route("/")
    .get(conferenceController.findAll)
    .post(conferenceController.create);

router.route("/profile")
    .get(conferenceController.findById)




module.exports = router;