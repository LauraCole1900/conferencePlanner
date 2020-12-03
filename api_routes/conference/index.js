const router = require("express").Router();
const conferenceRoutes = require("./conference");

// Book routes
router.use("/conference", conferenceRoutes);

module.exports = router;
