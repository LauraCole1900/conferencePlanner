const router = require("express").Router();
const conferenceController = require("../../controllers/conferenceController.js");



// matches with "/api/conference"
router.route("/")
    .get(conferenceController.findAll);

router.route("/post")
    .post(conferenceController.create);

router.route("/:email")
    .get(conferenceController.findByEmail)

router.route("/id/:confId")
    .get(conferenceController.findById)

router.route("/id/:id")
    .put(conferenceController.updateRegistered)
    
router.route("/update/id/:id")
    .put(conferenceController.update)

router.route("/delete/:id")
    .delete(conferenceController.remove)





module.exports = router;