var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'screenchef',
    classname: 'hmpg',
    companytitle: 'Ralph Adrian Garcia',
    companydescription: 'Interaction Designer and Prototyper'
  });
});

/* GET work. */
router.get('/work', function(req, res, next) {
  res.render('work', {
    title: 'screenchef : Work',
    h1: 'Services',
    classname: 'work'
  });
});

/* GET about. */
router.get('/about', function(req, res, next) {
  res.render('about', {
    title: 'screenchef : About',
    h1: 'About',
    classname: 'about'
  });
});

module.exports = router;
