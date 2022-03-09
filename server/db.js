import { Pool } from "pg";
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { json } = require("body-parser");
const axios = require("axios");
const app = express();

app.use(json());
app.use(cors());

const { parsed : config } = dotenv.config(); //This ( {parsed : config} ) renames parsed to config

// const dbUrl = process.env.DATABASE_URLx || "postgres://beelasisi@localhost:5432/cyf";

// const dbUrl = process.env.DATABASE_URL || `postgres://${config.USERNAME}:${config.PASSWORD}@localhost:5432/${config.DATABASE_NAME}`;
const dbUrl = process.env.DATABASE_URL || "postgres://Erin:dust2dust@localhost:5432/cyf";

const pool = new Pool({
	connectionString: dbUrl,
	connectionTimeoutMillis: 5000,
	ssl: dbUrl.includes("localhost") ? false : { rejectUnauthorized: false },
});

export const connectDb = async () => {
	let client;
	try {
		client = await pool.connect();
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
	console.log("Postgres connected to", client.database);
	client.release();
};

export const disconnectDb = () => pool.close();

export default { query: pool.query.bind(pool) };
