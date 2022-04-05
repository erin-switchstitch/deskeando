import React from "react";
import { useState, useEffect } from "react";
import { Checkbox } from "@mui/material";
import { Link } from "react-router-dom";

export default function DeskListBooker(props) {
	//  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
	let globalUserDetails = props.globalUserDetails;
	let setGlobalUserDetails = props.setGlobalUserDetails;
	console.log(globalUserDetails);
	//  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

	//  ↓↓↓↓↓↓↓ Global useState and setState for Current Booking Information ↓↓↓↓↓↓
	let globalBookingInfo = props.globalBookingInfo;
	let setGlobalBookingInfo = props.setGlobalBookingInfo;
	console.log(globalBookingInfo);
	//  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

	console.log(props.otherPersonsName.thirdPartyFirstName);

	const [bookingIdState, setBookingIdState] = useState(false);

	async function fetchData() {
		console.log("UseEffect Run:");
		console.log({
			user_id: globalUserDetails.user_id,
			desk_id: globalBookingInfo.desk_id,
			date_booked: globalBookingInfo.date_booked,
			am: globalBookingInfo.am,
			pm: globalBookingInfo.pm,
		});

		let passedData = {
			user_id: globalUserDetails.user_id,
			desk_id: globalBookingInfo.desk_id,
			date_booked: globalBookingInfo.date_booked,
			am: globalBookingInfo.am,
			pm: globalBookingInfo.pm,
		};

		if (Number(props.otherPersonsId) > 0) {
			passedData = { ...passedData, user_id: props.otherPersonsId };
		}
		console.log("Passed data is: ", passedData);

		const requestOptions = {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(passedData),
		};

		fetch("http://localhost:3100/api/all-bookings", requestOptions)
			.then((response) => response.json())
			.then((data) => {
				console.log(data, "<------ booking id");
				console.log(data.booking_id);
				// setBookingIdState(data.booking_id);

				if (data[0].booking_id > 0) {
					setBookingIdState(true);
				}
			});
	}

	function submitHandler(e) {
		console.log("Submit handler run");
		e.preventDefault();
		fetchData();
	}

	const [checkedOne, setCheckedOne] = useState(true);
	const [checkedTwo, setCheckedTwo] = useState(true);

	const handleChangeOne = (e) => {
		if (checkedTwo == true) {
			setCheckedTwo(false);
		}
		setGlobalBookingInfo({ ...globalBookingInfo, am: e.target.checked });
	};

	const handleChangeTwo = (e) => {
		if (checkedOne == true) {
			setCheckedOne(false);
		}
		setGlobalBookingInfo({ ...globalBookingInfo, pm: e.target.checked });
	};

	return (
		<div className="bookingDropdown">
			{/* <h3>4. Submit Your Booking</h3> */}
			<form onSubmit={submitHandler}>
				<h3>You have chosen seat {globalBookingInfo.desk_id}</h3>

				<div className="BookingDropdownButton">
					{bookingIdState ? (
						<Link to={"/confirm"}>
							<button>Go to confirmation page.</button>
						</Link>
					) : (
						<button type="submit" value="Confirm desk booking">
							Confirm desk booking
						</button>
					)}
				</div>
			</form>
		</div>
	);
}
