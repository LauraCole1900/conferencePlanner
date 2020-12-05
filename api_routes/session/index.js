const router = require("express").Router();
const sessionRoutes = require("./session_routes");

// conference routes
router.use("/session", sessionRoutes);

module.exports = router;
