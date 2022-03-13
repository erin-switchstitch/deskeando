import { useEffect, useState } from "react";
import DeskList from "../components/DeskList";
import Header from "../components/Header";
import "./../stylings/Home.css";
import DisplayCalendar from "../components/DisplayCalender";

export function Home() {
	return (
		<div>
			<Header />
			<DisplayCalendar />
		</div>

	);
}

export default Home;







// const [message, setMessage] = useState("Loading...");
// useEffect(() => {
// 	fetch("/api")
// 		.then((res) => {
// 			if (!res.ok) {
// 				throw new Error(res.statusText);
// 			}
// 			return res.json();
// 		})
// 		.then((body) => {
// 			setMessage(body.message);
// 		})
// 		.catch((err) => {
// 			console.error(err);
// 		});
// }, []);