import { Router } from "express";
const query = require("./db").default.query;
const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const app = express();
const router = Router();

app.use(json());
router.use(cors());

// const { parsed : config } = dotenv.config(); //This ( {parsed : config} ) renames parsed to config
// let passwordToPass;
// console.log(process.env.REACT_APP_PASSWORD);
// if (process.env.REACT_APP_PASSWORD){
//     passwordToPass = process.env.REACT_APP_PASSWORD;
// } else {
//     passwordToPass = "";
// }

// const pool = new Pool({
//     user:  process.env.REACT_APP_USERNAME,
//     host: "localhost",
//     database: process.env.REACT_APP_DATABASE_NAME,
//     password: process.env.REACT_APP_PASSWORD,
//     port: 5432,
// });

// const pool = new Pool({
//     user:  "bjbpnrdubidpfr",
//     host: "ec2-63-32-248-14.eu-west-1.compute.amazonaws.com",
//     database: "dfl0icehrl89m9",
//     password: "3a6447fbaa3b7ef3c3ee402e57ab7052dd3cd95a0f30026627b134ee4f53e5d2",
//     port: 5432,
// });

// var pg = require('pg');
// var params = { host: pool.host ,user: pool.user ,password: pool.password ,database: pool.database,ssl: true };
// var client = new pg.Client(params);
// client.connect();



//Get all desks;
router.get("/desks", (req, res) => {
    query("SELECT * FROM desks")
    .then((result) => {
        res.json(result.rows);
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json(error);
    });
});

//Get all bookings by dates;
router.get("/bookings", (req, res) => {
    const date = req.query.date;
    // console.log(date);

    // We are having issues getting the date serach api working. I believe it is an issue with how we are storing
    // the date within SQL. I've tried changing how the date structure is setup in the SQL file (from DATE NOT NULL to VARCHAR(30) NOT NULL)
    // but this did not work. I believe we may need to change the way that we store the date so that it is
    // YYYY-MM-DD rather than DD/MM/YYYY as this seems to be the standard that is used in SQL

    query(`SELECT * FROM bookings WHERE date_booked='${date}';`)
    .then((result) => {
        res.json(result.rows);
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json(error);
    });
});

//Get all bookings;
router.get("/all-bookings", (req, res) => {
    query("SELECT * FROM bookings;")
    .then((result) => {
        res.json(result.rows);
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json(error);
    });
});

//Get all bookings that are between two dates
router.get("/bookings_by_date/:date", (req, res) => {
    let dates = req.params.date;
    query("SELECT * FROM bookings")
    .then((result) => {
        res.json(result.rows);
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json(error);
    });
});

//This endpoint deletes bookings by id
router.delete("/all-bookings/:id", (req, res) => {
    const bookingsId = req.params.id;
    query(`DELETE FROM bookings where booking_id=${bookingsId};`)
    .then((result) => {
        res.json(result.rows);
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json(error);
    });
});

// //This endpoint deletes bookings by id
// router.delete("/all-bookings/:id", (req, res) => {
//     const bookingsId = req.params.id;
//     pool
//         .query(`DELETE FROM bookings where booking_id=${bookingsId};`)
//         .then(() => {
// 			pool.query(`SELECT * FROM bookings where staff_id=${userId};`).then((data)=>{
// 				res.status(200).send(data.rows);
// 			});
// 		})
// 		.catch((error) => {
// 			console.error(error);
// 			res.status(500).json(error);
// 		});
// });





router.post("/login", (req, res) => {

    const user_email = req.body.credentials.email;
    const user_password = req.body.credentials.password;
    console.log(user_email + " " + user_password);

    query(`SELECT id, first_name, last_name, accessibility FROM users WHERE email='${user_email}' AND password=crypt('${user_password}', password)`)
    .then((result) => {
        console.log(result.rows);
        if (result.rows.length <= 0 ){
            res.status(401).send({ Msg: "Your email OR password is not valid" });
        } else {
            res.status(200).json(result.rows);
        }
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json(error);
    });
});


router.put("/all-bookings", (req, res) => {

    // {
    //         "id":1,
    //         "date":"15/03/2022",
    //         "am":true,
    //         "pm":false,
    //         "desk_id":1
    // }

    // I think we may be best to take a unique ID for each user that is created / initiliased at the point of registartion - or is
    // pulled when the user logs in ... then this ID is passed to the DeskListBooker component to be sent when the logged in user makes
    // a new table booking :
    // const unique_id = req.body.unique_id;
    const staff_id = req.body.user_id;
    const deskNumber = req.body.desk_id;
    const dateBooked = req.body.date_booked;
    const morning = req.body.am;
    const afternoon = req.body.pm;
    const insertQuery = `INSERT INTO bookings(staff_id, desk_id, date_booked, am, pm) VALUES ('${staff_id}', ${deskNumber}, '${dateBooked}', ${morning}, ${afternoon});`;
	const returnQuery = `SELECT * FROM bookings WHERE date_booked='${dateBooked}';`;

    query(insertQuery)
    .then(() => {
        query(returnQuery).then((data)=>{
            res.status(200).send(data.rows);
        });
    })
    .catch((error) => {
        console.error(error);
        res.status(500).json(error);
    });
});



// ------------ Route to allow front-end to check if user exists and if not then create a new user account ----------------------
router.get("/users", (req, res) => {
    query("SELECT * FROM users")
    .then((result) => {
        res.json(result.rows);
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json(error);
    });
});

//This endpoint gets all a user's bookings
router.get("/user-bookings/:id", (req, res) => {
    const userId = req.params.id;
    query(`SELECT * FROM bookings where staff_id=${userId};`)
    .then((result) => {
        res.json(result.rows);
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json(error);
    });
});

//This route creates a user
router.put("/register", (req, res) => {
    // Where would be best to put the validation for registering an account ?
    // Perhaps it would be best to have the registartion component do a seperate
    // API call to check if the email address is already registered
    const email = req.body.email;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const password = req.body.password;
    const accessibility = req.body.accessibility;
	const newRegQuery = `INSERT INTO users(first_name, last_name, email, password, accessibility) VALUES ('${first_name}','${last_name}','${email}', crypt('${password}', gen_salt('bf')),'${accessibility}');`;
    const emailQuery = `SELECT * FROM users WHERE email='${email}';`;

    query(emailQuery)
    .then((result) => {
        console.log(result.rows.length);
        if (result.rows.length > 0){
            res.status(500).json({ "error":"email already exists" });
        } else {
            query(newRegQuery).then((response)=>{
                console.log("I am in base 1");
                console.log(response);
                query(emailQuery).then((data)=>{
                    console.log("I am in base 2");
                    console.log(response);
                    res.status(200).json(data.rows);
                });
            });
        }
    })
    .catch((error) => {
        console.error(error);
        res.status(500).json(error);
    });
});

router.put("/all-bookings", (req, res) => {

    // {
    //         "id":1,
    //         "date":"15/03/2022",
    //         "am":true,
    //         "pm":false,
    //         "desk_id":1
    // }

    // I think we may be best to take a unique ID for each user that is created / initiliased at the point of registartion - or is
    // pulled when the user logs in ... then this ID is passed to the DeskListBooker component to be sent when the logged in user makes
    // a new table booking :
    const user_id = req.body.user_id;
    const deskNumber = req.body.desk_id;
    const dateBooked = req.body.date_booked;
    const morning = req.body.am;
    const afternoon = req.body.pm;
    const query = `INSERT INTO bookings(staff_id, desk_id, date_booked, am, pm) VALUES ('${user_id}', ${deskNumber}, '${dateBooked}', ${morning}, ${afternoon});`;
	const returnQuery = `SELECT * FROM bookings WHERE date_booked='${dateBooked}';`;

    query(query)
    .then(() => {
        query(returnQuery).then((data)=>{
            res.send(data.rows);
        });
    })
    .catch((error) => {
        console.error(error);
        res.status(500).json(error);
    });
});




//This route removes a user
router.delete("/users/:id", function (req, res) {
    const userId = req.params.id;
    query(`DELETE FROM users WHERE id=${userId}`)
    .then(() => res.send(`Customer ${userId} deleted!`))
    .catch((error) => {
      console.error(error);
      res.status(500).json(error);
    });
});

//This routes gets a user ID using the user's email
router.get("/user/:email", function (req, res) {
    const userEmail = req.params.email;
    console.log(userEmail);
    query(`SELECT * FROM users WHERE email='${userEmail}';`)
    .then((data) => res.json({ "id":data.rows[0].id, "first_name":data.rows[0].first_name, "last_name":data.rows[0].last_name }))
    .catch((error) => {
        console.error(error);
        res.status(500).json(error);
    });
});

// router.get("/wheelchair", (_, res) => {
//  const desksWheelchairUsers = desks.filter((desk) => desk.desk_features.includes("wheelchair"));
//  res.send(desksWheelchairUsers);
// });

// router.get("/toilet", (_, res) => {
//  const desksNearToilet = desks.filter((desk) => desk.desk_features.includes("toilet"));
//  res.send(desksNearToilet);
// });

// router.get("/true", (_, res) => {
//  const deskBookedTrue = desks.filter((desk) => desk.desk_booked === true);
//  res.send(deskBookedTrue);
// });

// router.get("/false", (_, res) => {
//  const deskBookedTrue = desks.filter((desk) => desk.desk_booked === false);
//  res.send(deskBookedTrue);
// });

// router.get("/moreFeatures", (_, res) => {
//  const moreFeatures = desks.filter((desk) => desk.desk_features.includes("wheelchair") && desk.desk_features.includes("screen reader"));
//  res.send(moreFeatures);
// });

// router.get("/desks/:desk_id", (req, res) => {
//  const deskId = +req.params.desk_id;
//  const requireDeskId = desks.filter((desk) => desk.desk_id === deskId);
//  res.send(requireDeskId);
// });

export default router;