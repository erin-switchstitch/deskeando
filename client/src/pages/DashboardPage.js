import { useEffect, useState } from "react";
import Header from "../components/Header";
import "./../stylings/Dashboard.css";
import "./../stylings/root.css";
import DashboardUpcomingBookings from "../components/DashboardUpcomingBookings";
import DashBoardPreferencesBanner from "../components/DashBoardPreferencesBanner";
import DashboardBookingBanner from "../components/DashboardBookingBanner";

export default function DashboardPage(props) {
	//  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
	let globalUserDetails = props.globalUserDetails;
	let setGlobalUserDetails = props.setGlobalUserDetails;
	console.log(globalUserDetails);
	//  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

	return (
		<div className="DashboardOuterWrapper">
			<h2>Welcome Back, {globalUserDetails.first_name}</h2>
			<DashboardUpcomingBookings
				globalUserDetails={globalUserDetails}
				setGlobalUserDetails={(data) => setGlobalUserDetails(data)}
			/>
			<DashboardBookingBanner
				globalUserDetails={globalUserDetails}
				setGlobalUserDetails={(data) => setGlobalUserDetails(data)}
			/>
			<DashBoardPreferencesBanner
				globalUserDetails={globalUserDetails}
				setGlobalUserDetails={(data) => setGlobalUserDetails(data)}
			/>
		</div>
	);
}
