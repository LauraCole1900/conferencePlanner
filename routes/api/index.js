const router = require("express").Router();
const confrenceRoutes = require("./confrence");

// Book routes
router.use("/confrence", confrenceRoutes);

module.exports = router;
