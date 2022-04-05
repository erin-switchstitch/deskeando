import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';


function DeleteBookings (param){
    

    let currentBookingId = param.element.booking_id;
    let passLocal = param.passLocal;
    let currentDisplayIndex = param.currentDisplayIndex;

    const deleteUserBooking =() =>{
        console.log("Delete bookings run !!!")
        fetch(`/api/all-bookings/${currentBookingId}`, { mode: 'cors', method: "DELETE" })
        .then(response => response.json())
        .then(data => {
            console.log("Delete successfully: ")
            console.log(data)
            passLocal(currentDisplayIndex);
        })
    }    
    
    return (
        <FontAwesomeIcon icon={faBackspace} onClick={()=>deleteUserBooking()} style={{"cursor":"pointer"}}/>
        // <button type="button" onClick={deleteUserBooking} ><img url={Delete}/></button>
    )
}

export default DeleteBookings;
