import { useEffect, useState } from "react";
import Header from "../components/Header";
import "./../stylings/Dashboard.css";
import DashboardUpcomingBookings from "../components/DashboardUpcomingBookings";
import DashBoardPreferencesBanner from "../components/DashBoardPreferencesBanner";
import DashboardBookingBanner from "../components/DashboardBookingBanner";

export default function DashboardPage() {
	return (
		<div>
			<Header />
			<DashboardUpcomingBookings />
			<DashboardBookingBanner />
			<DashBoardPreferencesBanner />
		</div>
	);
}



