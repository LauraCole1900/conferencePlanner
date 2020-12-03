const router = require("express").Router();
const confrenceController = require("../../controllers/confrenceController");
const { ConfrenceInfo } = require("../../models");


// matches with "/api/confrence"
// router.route("/")
//     .get(confrenceController.findAll)


router.get("/", (req, res) => {
    ConfrenceInfo.find().then(confrence => {
        res.json(confrence);
    }).catch(err => {
        res.json(err)
    })
    
})



module.exports = router;