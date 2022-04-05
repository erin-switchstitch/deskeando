import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import templateData from "./../data/bookings.json";
import Header from "../components/Header";
import Moment from "react-moment";
import "./../stylings/Home.css";
import "./../stylings/ConfirmationPage.css";


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

	//const [globalUserDetails, setGlobalUserDetails] = useState({ user_id : "4", first_name : "Sharmaine", last_name : "Taylor", email : "Staylor@gmail.com", accessibility : true});
	//const [globalBookingInfo, setGlobalBookingInfo] = useState({desk_id: "", date_booked: "", am:false, pm:false})

	let timings;

    if ((globalBookingInfo.am) && (globalBookingInfo.pm)){
        timings = "9.00am - 17.00pm";
    } else if (globalBookingInfo.am){
        timings = "9.00am - 13.00pm";
    } else {
        timings = "13.00pm - 17.00pm";
    }

	return (
		<div className="ConfirmationPageOuterWrapper">
			<h1>That's booked for you</h1>
			<div className="ConfirmationPageInnerWrapper">
				<h2>Your desk booking details</h2>
				{(globalBookingInfo.other_id > 0) ? (
					<ul>
						<li>Name : {globalBookingInfo.other_first_name}{" "}{globalBookingInfo.other_last_name}</li>
						<li>Date : {globalBookingInfo.date_booked}{" "} from {timings}</li>
						<li>Desk : {globalBookingInfo.desk_id}</li>
					</ul>
				):(
					<ul>
						<li>Name : {globalUserDetails.first_name}{" "}{globalUserDetails.last_name}</li>
						<li>Date : {globalBookingInfo.date_booked}{" "} from {timings}</li>
						<li>Desk : {globalBookingInfo.desk_id}</li>
					</ul>
				)}
				

			</div>
			<div className="ConfirmationPageBottomWrapper">
				<h3>Back to your dashboard</h3>
				<Link to={"/dashboard"}>
					<button className="ConfirmationPageBottomButton">View dashboard</button>
				</Link>
			</div>


		</div>
	);
}
