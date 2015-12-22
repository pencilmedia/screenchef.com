var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'screenchef',
    classname: 'hmpg',
    companytitle: 'Ralph Adrian Garcia',
    companydescription: 'Interaction Designer and Prototyper',
    slogan: 'Reveal character, personality, abilities and much more!'
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

/* GET contact. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {
    title: 'screenchef : Contact',
    h1: 'Contact',
    classname: 'contact'
  });
});

module.exports = router;
