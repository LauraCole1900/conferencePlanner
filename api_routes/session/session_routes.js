const router = require("express").Router();
const sessionController = require("../../controllers/sessionController.js");


// matches with "/api/session"
router.route("/conference/:id")
    .get(sessionController.findByConfId);

router.route("/id/:id")
    .get(sessionController.findBySessId)

router.route("/post")
    .post(sessionController.create);

router.route("/update/id/:id")
    .put(sessionController.update);

router.route("/delete/:id")
    .delete(sessionController.remove);





module.exports = router;