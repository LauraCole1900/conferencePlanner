const router = require("express").Router();
const sessionController = require("../../controllers/sessionController.js");


// matches with "/api/session"
router.route("/conference/:id")
    .get(sessionController.findByConfId)
router.route("/post")
    .post(sessionController.create);






module.exports = router;