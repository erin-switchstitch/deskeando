import React from "react";
import Moment from 'react-moment';

function DeleteBookings ({element}){

    const deleteUserBooking =() =>{
        fetch(`http://localhost:3100/api/all-bookings/${element.booking_id}`, { mode: 'cors', method: "DELETE" })
        .then(response => response.json())
        .then(data => {
            console.log("Delete successfully: ")
            console.log(data)
        })
    }    
    
    return (
        <button type="button" onClick={deleteUserBooking} >Delete</button>
    )
}

export default DeleteBookings;
