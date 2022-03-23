import { useEffect, useState } from "react";
import DeskList from "../components/DeskList";
import Header from "../components/Header";
import "./../stylings/Home.css";
import DisplayCalendar from "../components/DisplayCalender";

export default function BookingPage() {
	return (
		<div>
			<Header />
			<DisplayCalendar />
		</div>
	);
}






