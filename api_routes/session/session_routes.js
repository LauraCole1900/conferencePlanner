const router = require("express").Router();
const sessionController = require("../../controllers/sessionController.js");



// matches with "/api/session"
router.route("/")
    .get(sessionController.findAll)
router.route("/post")
    .post(sessionController.create);





module.exports = router;