import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import templateData from "./../data/bookings.json";
import Header from "../components/Header";
import Moment from "react-moment";
import "./../stylings/Home.css";


export default function ConfirmationPage(props) {
	//  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓

	let globalUserDetails = props.globalUserDetails;
	let setGlobalUserDetails = props.setGlobalUserDetails;
	console.log(globalUserDetails, "<----- user in globalUserDetails ");
	//  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
	//  ↓↓↓↓↓↓↓ Global useState and setState for Current Booking Information ↓↓↓↓↓↓
	let globalBookingInfo = props.globalBookingInfo;
	let setGlobalBookingInfo = props.setGlobalBookingInfo;
	console.log(globalBookingInfo);
	//  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

	// const [globalUserDetails, setGlobalUserDetails] = useState({ user_id : "4", first_name : "Sharmaine", last_name : "Taylor", email : "Staylor@gmail.com", accessibility : true});
	// const [globalBookingInfo, setGlobalBookingInfo] = useState({desk_id: "", date_booked: "", am:false, pm:false})

	let timings;

    if ((globalBookingInfo.am) && (globalBookingInfo.pm)){
        timings = "9.00am - 17.00pm";
    } else if (globalBookingInfo.am){
        timings = "9.00am - 13.00pm";
    } else {
        timings = "13.00pm - 17.00pm";
    }

	return (
		<div>
			<Header
				globalUserDetails={globalUserDetails}
				setGlobalUserDetails={(data) => setGlobalUserDetails(data)}
			/>
			<h1>Thank you for your booking {globalUserDetails.first_name}</h1>
			<br />
			<h2>
				You have booked desk number {globalBookingInfo.desk_id} on the{" "}
				{globalBookingInfo.date_booked}{" "} from {timings}
			</h2>
			<Link to={"/dashboard"}>
				<a className="navLink">Go back to dashboard.</a>
			</Link>

		</div>
	);
}
