var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portfolio' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About me' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact me'});
});

/* GET project details page. */
router.get('/details', function(req, res, next) {
  res.render('details');
});

module.exports = router;
