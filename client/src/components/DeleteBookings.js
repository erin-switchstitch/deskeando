import React from "react";
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackspace } from '@fortawesome/free-solid-svg-icons'
import Delete from ".././images/delete-left-solid.svg";

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
        <FontAwesomeIcon icon={faBackspace} />
        // <button type="button" onClick={deleteUserBooking} ><img url={Delete}/></button>
    )
}

export default DeleteBookings;
