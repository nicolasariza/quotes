const router = require('express').Router();
const { HomeController, QuotesController } = require("../controllers")

router.get("/", HomeController.index);
router.get("/about", HomeController.about);
router.get("/quotes", QuotesController.quotes);
router.get("/quotes/all", QuotesController.get);
router.post("/quotes",QuotesController.add);

module.exports = router;