import { Router } from "express";
import { Pool } from "pg";
import { password } from "pg/lib/defaults";
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { json } = require("body-parser");
const axios = require("axios");
const app = express();

app.use(json());
app.use(cors());

const { parsed : config } = dotenv.config(); //This ( {parsed : config} ) renames parsed to config

// import desks from "./tem-templateData.json";

const router = Router();

// const { Pool } = require("pg");

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
	const name = req.body.name_of_staff;
	const deskNumber = req.body.desk_id;
	const dateBooked = req.body.date_booked;
	const morning = req.body.am;
	const afternoon = req.body.pm;
	const query = `INSERT INTO bookings(name_of_staff, desk_id, date_booked, am, pm) VALUES ('${name}', ${deskNumber}, '${dateBooked}', ${morning}, ${afternoon});`;

	pool
		.query(query)
		.then(() => res.send("Booking created"))
		.catch((error) => {
			console.error(error);
			res.status(500).json(error);
		});
});


// router.get("/wheelchair", (_, res) => {
// 	const desksWheelchairUsers = desks.filter((desk) => desk.desk_features.includes("wheelchair"));
// 	res.send(desksWheelchairUsers);
// });

// router.get("/toilet", (_, res) => {
// 	const desksNearToilet = desks.filter((desk) => desk.desk_features.includes("toilet"));
// 	res.send(desksNearToilet);
// });

// router.get("/true", (_, res) => {
// 	const deskBookedTrue = desks.filter((desk) => desk.desk_booked === true);
// 	res.send(deskBookedTrue);
// });

// router.get("/false", (_, res) => {
// 	const deskBookedTrue = desks.filter((desk) => desk.desk_booked === false);
// 	res.send(deskBookedTrue);
// });

// router.get("/moreFeatures", (_, res) => {
// 	const moreFeatures = desks.filter((desk) => desk.desk_features.includes("wheelchair") && desk.desk_features.includes("screen reader"));
// 	res.send(moreFeatures);
// });

// router.get("/desks/:desk_id", (req, res) => {
// 	const deskId = +req.params.desk_id;
// 	const requireDeskId = desks.filter((desk) => desk.desk_id === deskId);
// 	res.send(requireDeskId);
// });

export default router;
