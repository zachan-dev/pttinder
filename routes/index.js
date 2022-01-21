var express = require('express');
const db = require('../database');
const r = require('../resources');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: r.APP_NAME, 
    page: 'Home',
  });
});

/* GET about us page. */
router.get('/about', function(req, res, next) {
  res.render('about_us', { 
    title: r.APP_NAME, 
    page: 'About', 
  });
});

/* GET register page. */
router.get('/register', function(req, res, next) {
  res.render('register', { 
    title: r.APP_NAME, 
    page: 'Register',
  });
});

/* GET profile page. */
router.get('/profile', function(req, res, next) {
  res.render('profile', { 
    title: r.APP_NAME, 
    page: 'Profile', 
  });
});

/* GET playdate page. */
router.get('/playdate', function(req, res, next) {
  res.render('playdate', { 
    title: r.APP_NAME, 
    page: 'Playdate',
  });
});

/* GET adoption page. */
router.get('/adoption', function(req, res, next) {
  res.render('adoption', { 
    title: r.APP_NAME, 
    page: 'Adoption',
  });
});

/* GET signin page. */
router.get('/signin', function(req, res, next) {
  res.render('signin', { 
    title: r.APP_NAME, 
    page: 'Signin',
  });
});

module.exports = router;
