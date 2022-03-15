import { Router } from "express";
import { Pool } from "pg";
import Moment from 'react-moment';
import moment from 'moment';
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

const pool = new Pool({
	user:  process.env.USERNAME,
	host: "localhost",
	database: process.env.DATABASE_URL,
	password: "",
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

//Get all bookings and query by dates;
router.get("/bookings", (req, res) => {
	const date = req.query.date;
	console.log(date);
	pool
		// .query(`SELECT * FROM bookings date_booked=${req.query.date}`)
		.query(`SELECT * FROM bookings`)

		.then((result) => {
			res.json(result.rows);
		})
		.catch((error) => {
			console.log(error);
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
