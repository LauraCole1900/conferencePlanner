const router = require("express").Router();
const sessionController = require("../../controllers/sessionController.js");



// matches with "/api/session"
router.route("/conference/:Id")
    .get(sessionController.findByConfId)
router.route("/post")
    .post(sessionController.create);






module.exports = router;