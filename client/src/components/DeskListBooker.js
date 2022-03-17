import React from "react";
import { useState, useEffect } from "react";

export default function DeskListBooker(props) {
	const [name, setName] = useState("");
	const [deskBooked, setDeskBooked] = useState("");
	const [date, setDate] = useState("");
	const [am, setAm] = useState(false);
	const [pm, setPm] = useState(false);

	//Making a PUT request to the API
	useEffect(() => {
		//Request options is a helpful object to specify requests that are not GET requests
		const requestOptions = {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				name_of_staff: name,
				desk_id: deskBooked,
				date_booked: date,
				am: am,
				pm: pm,
			}),
		};
		console.log(requestOptions.body);
		fetch("http://localhost:3000/api/all-bookings", requestOptions)
			.then((response) => response.json())
			.then((data) => console.log(data));
	}, [name, deskBooked, date, am, pm]);

	const currentDeskNumber = props.deskNumber;
	console.log(currentDeskNumber);

	// const [bookingDetails, setBookingDetails] = useState({ first_name:"", last_name: "", start_date:"", desk_id: { currentDeskNumber } });

	// function submitHandler(e){
	//     e.preventDefault();
	//     alert(`Desk ${currentDeskNumber} has been booking by ${bookingDetails.first_name} ${bookingDetails.last_name}`);
	//     console.log(bookingDetails);
	// }

	// let nowDate = new Date();
	// let currentDate = nowDate.getFullYear()+"-"+(nowDate.getMonth()+1)+"-"+nowDate.getDate();
	// let futureDate = nowDate.getFullYear()+"-"+(nowDate.getMonth()+2)+"-"+nowDate.getDate();

	return (
		<div className="bookingDropdown">
			<form onSubmit={submitHandler}>
				<label htmlFor="name">
					Your name:
					<input
						type="text"
						name="name"
						id="name"
						onChange={(e) => setName(e.target.value)}
						value={name}
					></input>
				</label>
				<label htmlFor="deskBooked">
					Desk booked:
					<input
						type="number"
						name="deskBooked"
						id="deskBooked"
						onChange={(e) => setDeskBooked(e.target.value)}
						value={deskBooked}
					></input>
				</label>
				<label htmlFor="date">
					Date:
					<input
						type="date"
						name="date"
						id="date"
						onChange={(e) => setDate(e.target.value)}
						value={date}
					></input>
				</label>
				<label htmlFor="am">
					Am:
					<input
						type="checkbox"
						name="am"
						id="am"
						onChange={(e) => setAm(e.target.checked)}
						value={am}
					></input>
				</label>
				<label htmlFor="pm">
					Pm:
					<input
						type="checkbox"
						name="pm"
						id="pm"
						onChange={(e) => setPm(e.target.checked)}
						value={pm}
					></input>
				</label>
				{/* <label htmlFor="email">Last name:</label>
                <input type="text" name="lname" id="lname" onChange={(e) => setBookingDetails({ ...bookingDetails, last_name:e.target.value })} value={bookingDetails.last_name}></input> */}
				{/* <label htmlFor="start">Start date:</label>
                <input type="date" name="start_date" id="start_date" onChange={(e) => setBookingDetails({ ...bookingDetails, start_date:e.target.value })} value={bookingDetails.start_date} min={currentDate} max={futureDate}></input> */}
				<input
					type="submit"
					onClick={(e) => {
						e.preventDefault();
					}}
					value="Submit Booking"
				></input>
			</form>
		</div>
	);
}
