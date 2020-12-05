const router = require("express").Router();
const sessionController = require("../../controllers/sessionController.js");



// matches with "/api/conference"
router.route("/")
    .get(sessionController.findAll)
    .post(sessionController.create);





module.exports = router;