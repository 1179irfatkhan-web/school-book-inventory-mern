const router = require("express").Router();
const controller = require("../controllers/bookSet.controller");

router.post("/create", controller.createBookSet);
router.get("/", controller.getBookSets);
router.put("/:id", controller.updateBookSet);
router.delete("/:id", controller.deleteBookSet);

module.exports = router;
