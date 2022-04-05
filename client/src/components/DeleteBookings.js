import React from "react";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import Delete from ".././images/delete-left-solid.svg";

function DeleteBookings(param) {
	let currentBookingId = param.element.booking_id;
	let passLocal = param.passLocal;
	let currentDisplayIndex = param.currentDisplayIndex;

	const deleteUserBooking = () => {
		// console.log("Delete bookings run !!!")
		fetch(`http://localhost:3100/api/all-bookings/${currentBookingId}`, {
			mode: "cors",
			method: "DELETE",
		})
			.then((response) => response.json())
			.then((data) => {
				// console.log("Delete successfully: ")
				// console.log(data)
				passLocal(currentDisplayIndex);
			});
	};

	return (
		<FontAwesomeIcon
			icon={faBackspace}
			onClick={() => deleteUserBooking()}
			style={{ cursor: "pointer" }}
		/>
	);
}

export default DeleteBookings;
