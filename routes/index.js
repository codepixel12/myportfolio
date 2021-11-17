var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express123' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { 
    title: 'About this page',
    pageText: 'here is some infor about this page',
    var: 'this is my about page'
   });
});

/* GET about page. */
router.get('/users', function(req, res, next) {
  res.render('users', { 
    title: 'User page',
    pageText: 'here is some infor about this page',
    var: 'this is my user page'
   });
});

module.exports = router;
