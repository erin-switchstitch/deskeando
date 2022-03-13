import React from "react";
import { useState, useEffect } from "react";

export default function DeskListBooker(props){

    const currentDeskNumber = props.deskNumber;
    console.log(currentDeskNumber);

    const [bookingDetails, setBookingDetails] = useState({ first_name:"", last_name: "", start_date:"", desk_id: { currentDeskNumber } });

    function submitHandler(e){
        e.preventDefault();
        alert(`Desk ${currentDeskNumber} has been booking by ${bookingDetails.first_name} ${bookingDetails.last_name}`);
        console.log(bookingDetails);
    }

    // let nowDate = new Date();
    // let currentDate = nowDate.getFullYear()+"-"+(nowDate.getMonth()+1)+"-"+nowDate.getDate();
    // let futureDate = nowDate.getFullYear()+"-"+(nowDate.getMonth()+2)+"-"+nowDate.getDate();

    return (
        <div className="bookingDropdown">
            <form onSubmit={submitHandler}>
                <label htmlFor="email">First name:</label>
                <input type="text" name="fname" id="fname" onChange={(e) => setBookingDetails({ ...bookingDetails, first_name:e.target.value })} value={bookingDetails.first_name}></input>
                 <label htmlFor="email">Last name:</label>
                <input type="text" name="lname" id="lname" onChange={(e) => setBookingDetails({ ...bookingDetails, last_name:e.target.value })} value={bookingDetails.last_name}></input>
                {/* <label htmlFor="start">Start date:</label>
                <input type="date" name="start_date" id="start_date" onChange={(e) => setBookingDetails({ ...bookingDetails, start_date:e.target.value })} value={bookingDetails.start_date} min={currentDate} max={futureDate}></input> */}
                <input type="submit" value="Submit Booking"></input>
            </form>
        </div>

    );
}
