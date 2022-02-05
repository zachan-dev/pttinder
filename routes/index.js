var express = require('express');
const db = require('../database');
const r = require('../resources');
var router = express.Router();


// For password encryption
const bcrypt = require('bcrypt');
const saltRounds = 10;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: r.APP_NAME,
    page: 'Home',
  });
});

/* GET about us page. */
router.get('/about', function (req, res, next) {
  res.render('about_us', {
    title: r.APP_NAME,
    page: 'About',
  });
});

/* GET register page. */

router.get('/register', function (req, res, next) {
  console.log(req.body);
  res.render('register', {
    title: r.APP_NAME,
    page: 'Register',
  });
});

/* POST register page. */
router.post('/register', function (req, res, next) {
  // console.log("Debug: body: %j", req.body);
  console.log(req.body);
  // Table: Users
  let email = req.body.email;
  let password = req.body.password;
  let description = req.body.description;
  let user_name = req.body.user_name;
  let user_image_url = req.body.user_image;
  let looking_for_date = req.body.looking_for_date ? 1 : 0;

  // Table: Location
  let postal_code = req.body.postal_code;
  let phone = req.body.phone;

  // Table: Ownership 
  // if pet_owner != ''
  let pet_type = req.body.pet_type;
  let pet_name = req.body.pet_name;
  let seek_date = req.body.seek_date != '' ? 1 : 0;
  let seek_parent = req.body.seek_parent != '' ? 1 : 0;

  // Table: Services
  // if services == != ''
  let service_collection = req.body.service_options;

  bcrypt.hash(password, saltRounds, function (err, hash) {
    // Insert into Users table
    let users_sql = `INSERT INTO Users (email, password, description, user_name, user_image_url, looking_for_date) 
    VALUES ('${email}', '${hash}', '${description}', '${user_name}', '${user_image_url}', '${looking_for_date}')`;

    db.query(users_sql, (err, result) => {
      if (err) {
        console.log("Users Error: %j", err);
      } else {
        // Insert into Location table
        let location_sql;
        if (typeof phone !== 'undefined') {
          location_sql = `INSERT INTO Location (user_id, postal_code, phone) VALUES ((SELECT id FROM Users WHERE email = '${email}'), '${postal_code}', '${phone}')`;
        } else {
          location_sql = `INSERT INTO Location (user_id, postal_code) VALUES ((SELECT id FROM Users WHERE email = '${email}'), '${postal_code}')`;
        }

        db.query(location_sql, (err, result) => {
          if (err) {
            console.log("Location Error: %j", err);
          } else {
            console.log("Location Debug: %j", result);
          }
        });

        // Insert into Ownership table
        let ownership_sql;
        console.log("Debug: ownership: %j", req.body.pet_owner);
        if (typeof req.body.pet_owner !== 'undefined') {
          ownership_sql = `INSERT INTO Ownership (user_id, pet_type, pet_name, seek_date, seek_parent) VALUES ((SELECT id FROM Users WHERE email = '${email}'), '${pet_type}', '${pet_name}', '${seek_date}', '${seek_parent}')`;
          console.log("Debug: ownership sql: %j", ownership_sql);
          db.query(ownership_sql, (err, result) => {
            if (err) {
              console.log("Ownership Error: %j", err);
            } else {
              console.log("Ownership Debug: %j", result);
            }
          });
        };

        // Insert into Services table
        let services_sql;
        if (typeof req.body.services !== 'undefined' && service_collection.length > 0) {
          for (let i = 0; i < service_collection.length; i++) {
            services_sql = `INSERT INTO Services (user_id, service) VALUES ((SELECT id FROM Users WHERE email = '${email}'), '${service_collection[i]}')`;
            db.query(services_sql, (err, result) => {
              if (err) {
                console.log("Services Error: %j", err);
              } else {
                console.log("Services Debug: %j", result);
              }
            });
          }
        };
      }
    });
  });


  res.render('index', {
    title: r.APP_NAME,
    page: 'Home',
  });
});

/* GET profile page. */
router.get('/profile', function (req, res, next) {
  res.render('profile', {
    title: r.APP_NAME,
    page: 'Profile',
  });
});

/* GET playdate page. */
router.get('/playdate', function (req, res, next) {
  res.render('playdate', {
    title: r.APP_NAME,
    page: 'Playdate',
  });
});

/* GET adoption page. */
router.get('/adoption', function (req, res, next) {
  res.render('adoption', {
    title: r.APP_NAME,
    page: 'Adoption',
  });
});


/* GET signin page. */
router.get('/signin', function (req, res, next) {
  res.render('signin', {
    title: r.APP_NAME,
    page: 'Signin',
  });
});

router.post('/signin', function (req, res, next) {

  let email = req.body.email;
  let password = req.body.password;

  let sql = `SELECT * FROM Users WHERE email = '${email}'`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log("Error: %j", err);
    } else {
      //console.log("Debug: %j", result);
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, function (err, data) {
          if (data) {
            console.log("Debug: result %j", result[0]);
            //req.session.user = result[0];
            res.redirect('/profile');
          } else {
            res.redirect('/signin');
          }
        });
      } else {
        res.redirect('/signin');
      }
    }
  });

  // res.render('index', { 
  //   title: r.APP_NAME, 
  //   page: 'Signin',
  // });
});

/* GET services page. */
router.get('/services', function (req, res, next) {
  res.render('services', {
    title: r.APP_NAME,
    page: 'Services',
  });
});

module.exports = router;