const router = require("express").Router();

router.use("/puppies", require("./puppies"));
router.use("/owners", require("./owners"));
router.use("/tricks", require("./tricks"));
router.use("/puppies_tricks", require("./puppies_tricks"));

module.exports = router;
