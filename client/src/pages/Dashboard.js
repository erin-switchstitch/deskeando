import { useEffect, useState } from "react";
import Header from "../components/Header";
import "./../stylings/Dashboard.css";
import UpcomingBookings from "../components/UpcomingBookings";
import SetPreferencesBannerLink from "../components/SetPreferencesBannerLink";
import BookDeskBannerLink from "../components/BookDeskBannerLink";

export default function Dashboard() {
	return (
		<div>
			<Header />
			<UpcomingBookings />
			<BookDeskBannerLink />
			<SetPreferencesBannerLink />
		</div>
	);
}



