const express = require("express");
const upload = require("../upload");
const db = require("../database");
const r = require("../resources");
const router = express.Router();

/* For password encryption */
const bcrypt = require("bcrypt");
const saltRounds = 10;

const dummy_data = require("../pets_data");

/* GET home page. */
router.get("/", function (req, res, next) {
  user_id = req.session.user_id;
  res.render("index", {
    title: r.APP_NAME,
    page: "Home",
    user_id: user_id,
  });
});

/* GET about us page. */
router.get("/about", function (req, res, next) {
  user_id = req.session.user_id;
  res.render("about_us", {
    title: r.APP_NAME,
    page: "About",
    user_id: user_id,
  });
});

/* GET register page. */
router.get("/register", function (req, res, next) {
  res.render("register", {
    title: r.APP_NAME,
    page: "Register",
  });
});

/* POST register page. */
router.post(
  "/register",
  upload.fields([
    { name: "user_image", maxCount: 1 },
    { name: "pet_image", maxCount: 1 },
  ]),
  function (req, res, next) {
    // console.log("Debug: body: %j", req.body);
    console.log("body: %j", req.body);
    console.log("req.file: %j", req.files);

    // Table: Users
    let user_name = req.body.user_name;
    let email = db.escape(req.body.email);
    let password = req.body.password;
    let user_image = req.files["user_image"][0];
    let pet_image = req.files["pet_image"][0];
    let description = db.escape(req.body.description);
    let lf_date = req.body.lf_date ? 1 : 0;

    // Table: Location
    let street = req.body.street;
    let city = req.body.city;
    let state = req.body.state;
    let country = req.body.country;
    let code = req.body.code;
    let phone = req.body.phone;

    // Table: Ownership
    // if pet_owner != ''
    let pet_type = req.body.pet_type;
    let pet_name = req.body.pet_name;
    //let pet_image_url = req.body.pet_image;
    let lf_playdate = req.body.lf_playdate ? 1 : 0;
    let lf_adoption = req.body.lf_adoption ? 1 : 0;

    // Table: Services
    // if services != ''
    let service_collection = req.body.service_options;
    let userImgPath = user_image.destination + user_image.filename;
    let petImgPath = pet_image.destination + pet_image.filename;

    bcrypt.hash(password, saltRounds, function (err, hash) {
      // Insert into Users table
      let users_sql = `INSERT INTO Users (email, password, user_name, description, user_image_url, lf_date)
      VALUES (${email}, '${hash}', '${user_name}', ${description}, '${userImgPath}', '${lf_date}')`;

      db.query(users_sql, (err, result) => {
        if (err) {
          console.log("Users Error: %j", err);
        } else {
          // Insert into Locations table
          let location_sql = `INSERT INTO Locations (user_id, street, city, state, country, code, phone)
          VALUES ((SELECT id FROM Users WHERE email = ${email}), '${street}', '${city}', '${state}', '${country}', '${code}', '${phone}')`;

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

          if (typeof req.body.pet_owner !== "undefined") {
            ownership_sql = `INSERT INTO Ownerships (user_id, pet_type, pet_name, pet_image_url, lf_playdate, lf_adoption)
            VALUES ((SELECT id FROM Users WHERE email = ${email}), '${pet_type}', '${pet_name}', '${petImgPath}', '${lf_playdate}', '${lf_adoption}')`;

            console.log("Debug: ownership sql: %j", ownership_sql);
            db.query(ownership_sql, (err, result) => {
              if (err) {
                console.log("Ownership Error: %j", err);
              } else {
                console.log("Ownership Debug: %j", result);
              }
            });
          }

          // Insert into Services table
          let services_sql;
          if (
            typeof req.body.services !== "undefined" &&
            service_collection.length > 0
          ) {
            for (let i = 0; i < service_collection.length; i++) {
              services_sql = `INSERT INTO Services (user_id, service)
              VALUES ((SELECT id FROM Users WHERE email = ${email}), '${service_collection[i]}')`;

              db.query(services_sql, (err, result) => {
                if (err) {
                  console.log("Services Error: %j", err);
                } else {
                  console.log("Services Debug: %j", result);
                }
              });
            }
          }
        }
      });

      user_id = req.session.user_id;
      res.render("index", {
        title: r.APP_NAME,
        page: "Home",
        user_id: user_id,
      });
    });
  }
);

/* GET signin page. */
router.get("/signin", function (req, res, next) {
  res.render("signin", {
    title: r.APP_NAME,
    page: "Signin",
  });
});

/* POST Signin page */
router.post("/signin", function (req, res, next) {
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

            req.session.user_id = result[0].id;
            console.log("Debug: req.session.user_id %j", req.session.user_id);
            console.log("Debug: user session: %j", req.session);

            res.redirect("/");
          } else {
            res.redirect("/signin");
          }
        });
      } else {
        res.redirect("/signin");
      }
    }
  });
});

router.get("/signout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.redirect("/");
    }
    // sessionStore.close()
    res.clearCookie(process.env.SESS_NAME);
    res.redirect("/signin");
  });
});

/* GET profile page. */
router.get("/profile", function (req, res, next) {
  let user_id = req.session.user_id;
  let sqlquery = `SELECT * FROM users WHERE id = ` + user_id;

  db.query(sqlquery, (err, result) => {
    if (err || result[0] == undefined) {
      res.redirect("error");
    } else {
      res.render("profile", {
        title: r.APP_NAME,
        page: "Profile",
        name: result[0].user_name,
        email: result[0].email,
        description: result[0].description,
        imgURL: result[0].user_image_url,
        lf_date: result[0].lf_date,
      });
    }
  });
});

/* GET playdate page. */
router.get("/playdate", function (req, res, next) {
  user_id = req.session.user_id;
  res.render("playdate", {
    title: r.APP_NAME,
    page: "Playdate",
    user_id: user_id,
  });
});

/* GET adoption page. */
router.get("/adoption", function (req, res, next) {
  user_id = req.session.user_id;

  // <h5><%= pet.pet_name %> (<%= pet.pet_type%>)</h5>
  // <p><% pet.description %></p>
  // <ul>
  //     <li>Owner: <%= pet.user_name %></li>
  //     <li>Email: <%= pet.email %></li>
  //     <li>Phone: <%= pet.phone %></li>
  //     <li>Address: | <%= pet.street %> | <%= pet.city %> |
  //         <%= pet.state %> | <%= pet.country %> | <%= pet.code %> |

  // Create the SQL query to select all pet adoption records in the database.
  let sqlquery = `SELECT email, user_name, description, street, city, state, country,
    code, phone, pet_name, pet_type, pet_image_url
  FROM
    Ownerships JOIN Users    
    ON Users.id = Ownerships.user_id
      JOIN Locations
      ON Users.id = Locations.user_id
  WHERE lf_adoption = 1
  ORDER BY pet_type ASC;`;

  // Execute the SQL query.
  db.query(sqlquery, (err, result) => {
    if (err) {
      //res.redirect("/"); // Redirect to the Home page in the event of an error.
      res.render("adoption", {
        title: r.APP_NAME,
        page: "Adoption",
        user_id: user_id,
        pets: dummy_data.data,
      });
    } else {
      // Render the services web page. The result of the query is assigned to the services placeholder in the template.
      res.render("adoption", {
        title: r.APP_NAME,
        page: "Adoption",
        pets: pets_data,
      });
    }
  });
});

/* Search adoption page */
router.get("/searchadoptions", function (req, res, next) {
  let pet_type = req.query.type;
  let city = req.query.city;
  let state = req.query.state;
  let country = req.query.country;

  let parameters = [pet_type, city, state, country];

  let sql = `SELECT email, user_name, description, street, city, state, country,
    code, phone, pet_name, pet_type, pet_image_url
    FROM
      Ownerships JOIN Users    
      ON Users.id = Ownerships.user_id
        JOIN Locations
        ON Users.id = Locations.user_id
    WHERE lf_adoption = 1
      AND (pet_type LIKE ?
        OR city LIKE ?
        OR state LIKE ?
        OR country LIKE ?);`;

  db.query(sql, parameters, (err, result) => {
    if (err) {
      console.log("Error: %j", err);
    } else {
      //console.log("Debug: %j", result);
      if (result.length > 0) {
        // Render the services web page. The result of the query is assigned to the services placeholder in the template.
        res.render("adoption", {
          title: r.APP_NAME,
          page: "Adoption",
          pets: result,
        });
      } else {
        //res.redirect("/");
      }
    }
  });
});

/* GET services page. */
router.get("/services", function (req, res, next) {
  user_id = req.session.user_id;

  let sqlquery = `SELECT email, user_name, description, user_image_url, street, city,
  state, country, code, phone, service
  FROM
    Services JOIN Users
    ON Users.id = Services.user_id
      JOIN Locations
      ON Users.id = Locations.user_id
  ORDER BY service ASC;`;

  db.query(sqlquery, (err, result) => {
    if (err) {
      res.render("services", {
        title: r.APP_NAME,
        page: "Services",
        user_id: user_id,
        services: dummy_data.service_data,
      });
    } else {
      res.render("services", {
        title: r.APP_NAME,
        page: "Services",
        user_id: user_id,
        services: result,
      });
    }
  });

  
});

/* Search services page */
router.get("/searchservices", function (req, res, next) {
  let service = req.query.service;
  let city = req.query.city;
  let state = req.query.state;
  let country = req.query.country;

  let parameters = [service, city, state, country];

  let sql = `SELECT email, user_name, description, user_image_url, street, city,
  state, country, code, phone, service
  FROM
    Services JOIN Users
    ON Users.id = Services.user_id
      JOIN Locations
      ON Users.id = Locations.user_id
  WHERE service LIKE ?
    OR city LIKE ?
    OR state LIKE ?
    OR country LIKE ?;`;

  db.query(sql, parameters, (err, result) => {
    if (err) {
      console.log("Error: %j", err);
    } else {
      //console.log("Debug: %j", result);
      if (result.length > 0) {
        // Render the services web page. The result of the query is assigned to the services placeholder in the template.
        res.render("services", {
          title: r.APP_NAME,
          page: "Services",
          services: result,
        });
      } else {
        res.render("services", {
          title: r.APP_NAME,
          page: "Services",
          user_id: user_id,
          services: []
        });
      }
    }
  });
});

module.exports = router;
