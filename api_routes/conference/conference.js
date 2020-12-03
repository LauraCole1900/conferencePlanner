const router = require("express").Router();
const conferenceController = require("../../controllers/conferenceController");
const { Conference } = require("../../models");


// matches with "/api/confrence"
router.route("/")
    .get(conferenceController.findAll)


// router.get("/", (req, res) => {
//     Conference.find({}).then(conference => {
//         console.log(conference)
//         res.json(conference);
//     }).catch(err => {
//         res.json(err)
//     })
// })



module.exports = router;