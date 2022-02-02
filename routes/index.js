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

/* GET signin page. */
router.get('/services', function(req, res, next) {
  res.render('services', { 
    title: r.APP_NAME, 
    page: 'Services',
  });
});

// This route is requested when the user registers on the register page.
router.post("/useradded", function (req,res)
{
    // Create the SQL query.
    let sqlquery = 
    "INSERT INTO users VALUES (?,?,?,?,?,?,?,?,?,?, \
                               ?,?,?,?,?,?,?,?,?,?, \
                               ?,?,?,?,?,?,?,?,?,?)";

    // Create an array of the values that will be posted in the database using the above SQL query.
    // Since this is a POST, use req.body to access the different values of the form.
    let newrecord = 
    [
      null,
      req.body.email,
      req.body.password,
      req.body.username,
      req.body.description,
      req.body.userPic,
      req.body.street,
      req.body.city,
      req.body.state,
      req.body.country,
      req.body.code,
      req.body.phone,
      req.body.owner,
      req.body.type,
      req.body.petname,
      req.body.petPic,
      req.body.playdate,
      req.body.adoption,
      req.body.date,
      req.body.services,
      req.body.groomer,
      req.body.walker,
      req.body.trainer,
      req.body.sitter,
      req.body.daycare,
      req.body.foods,
      req.body.products,
      req.body.mobileClinic,
      req.body.veterinarian,
      req.body.radioShow
    ];

    // Attempt to add the values to the database.
    db.query(sqlquery, newrecord, (err, result) =>
    {
        if (err) // If the registration fails, display an error message in the console.
        {
            return console.error(err.message);
        }
        else // If the registration succeeds, display the success message.
        {
            // Render the sin-in page to get the user to log in.
            res.render('signin', { 
              title: r.APP_NAME, 
              page: 'Signin',
            });
        }
    });
});

module.exports = router;
