
const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.route("/")
  .post(articlesController.create)
router.route("/:id")
  .delete(articlesController.delete)
router.route("/all")
  .get(articlesController.findAll)

module.exports = router;

//9b8936ce2b1a44cf83ef4f5aa61b3418rout