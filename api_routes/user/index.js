const router = require("express").Router();
const userRoutes = require("./user_routes");

// user routes
router.use("/user", userRoutes);

module.exports = router;
