import { Router } from "express";
import { Pool } from "pg";
import { password } from "pg/lib/defaults";
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { json } = require("body-parser");
const axios = require("axios");
const app = express();
const router = Router();

app.use(json());
router.use(cors());

const { parsed : config } = dotenv.config(); //This ( {parsed : config} ) renames parsed to config

let passwordToPass;

if (process.env.REACT_APP_PASSWORD){
    passwordToPass = process.env.REACT_APP_PASSWORD;
} else {
    passwordToPass = "";
}

const pool = new Pool({
    user:  process.env.REACT_APP_USERNAME,
    host: "localhost",
    database: process.env.REACT_APP_DATABASE_NAME,
    password: passwordToPass,
    port: 5432,
});


//Get all desks;
router.get("/desks", (req, res) => {
    pool
        .query("SELECT * FROM desks")
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

    pool
        .query(`SELECT * FROM bookings WHERE date_booked='${date}';`)
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


    pool
        .query("SELECT * FROM bookings;")
        .then((result) => {
            res.json(result.rows);
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
    const name = req.body.name_of_staff;
    const deskNumber = req.body.desk_id;
    const dateBooked = req.body.date_booked;
    const morning = req.body.am;
    const afternoon = req.body.pm;
	
    const query = `INSERT INTO bookings(name_of_staff, desk_id, date_booked, am, pm) VALUES ('${name}', ${deskNumber}, '${dateBooked}', ${morning}, ${afternoon});`;
	const returnQuery = `SELECT * FROM bookings WHERE date_booked='${dateBooked}';`


	pool
		.query(query)
		.then(() => {
			pool.query(returnQuery).then((data)=>{
				res.send(data.rows)
			})
		})
		.catch((error) => {
			console.error(error);
			res.status(500).json(error);
		});
});



// ------------ Route to allow front-end to check if user exists and if not then create a new user account ----------------------

router.put("/register", (req, res) => {
    // Where would be best to put the validation for registering an account ?
    // Perhaps it would be best to have the registartion component do a seperate 
    // API call to check if the email address is already registered
    
    const email = req.body.email;
    const first_name = req.body.first_name;
    const last_name = req.body.first_name;
    const password = req.body.password;
    const accessability = req.body.date_booked;
    
	const newRegQuery = `INSERT INTO users(email, first_name, last_name, password, accessability) VALUES ('${email}','${first_name}','${last_name}','${password}','${accessability}'`;
	
    const emailQuery = `SELECT * FROM users WHERE email='${email}';`

    const templateQuery = `SELECT * FROM bookings WHERE id='10';`

	pool
		.query(templateQuery)
        .then((result) => {
            if (result.rows.length > 0){
                res.status(500).send("error - email already exists");
            } else {
                pool.query(newRegQuery).then((data)=>{
				    res.status(200).json(data.rows);
			    })
                
            }
        })
		// .then(() => {
		// 	pool.query(returnQuery).then((data)=>{
		// 		res.send(data.rows)
		// 	})
		// })
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