const router = require("express").Router();
const conferenceRoutes = require("./conference_routes");

// conference routes
router.use("/conference", conferenceRoutes);

module.exports = router;
