const router = require("express").Router();
const articleRoutes =require("./articles");

router.use("/articles", articlesRoutes);

module.exports = router;