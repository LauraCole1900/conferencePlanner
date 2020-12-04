const router = require("express").Router();
const userController = require("../../controllers/userController.js");


// matches with "/api/conference"
router.route("/")
    .get(userController.findAll)

module.exports = router;