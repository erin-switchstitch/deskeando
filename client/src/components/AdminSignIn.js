import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import "../stylings/LoginPage.css";

export default function AdminSignIn(props) {
	//  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
	let globalUserDetails = props.globalUserDetails;
	let setGlobalUserDetails = props.setGlobalUserDetails;
	console.log(globalUserDetails);
	//  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

	return (
		<div className="AdminSignInContainer">
			<Link to={"/dashboard"}>
				<button
					onClick={() =>
						setGlobalUserDetails({
							user_id: 3,
							first_name: "Erin",
							last_name: "Dyson",
							email: "admin@admin.com",
							accessibility: true,
						})
					}
				>
					Admin Auto Sign In
				</button>
			</Link>
		</div>
	);
}
