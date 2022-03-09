import { useEffect, useState } from "react";
import DeskList from "../components/DeskList";
import "./../stylings/Home.css";

export function Home() {
	return (

		<DeskList />
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