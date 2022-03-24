import { useEffect, useState } from "react";
import Header from "../components/Header";
import "./../stylings/Dashboard.css";
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
		<div>
			<Header />
			<h1>Welcome Back, {globalUserDetails.first_name}</h1>
			<DashboardUpcomingBookings globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}/>
			<DashboardBookingBanner globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}/>
			<DashBoardPreferencesBanner globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}/>
		</div>
	);
}



