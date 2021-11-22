var express = require('express');
var router = express.Router();

/* GET project/index page. */
router.get('/', function(req, res, next) {
  res.render('Projects/index');
});


module.exports = router;
