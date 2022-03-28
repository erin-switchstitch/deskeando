import React from "react";
import { useState, useEffect } from "react";
import templateData from "./../data/bookings.json";
import Moment from 'react-moment';
import moment from 'moment';
import axios from 'axios'


export default function DashboardUpcomingBookings(props) {

    //  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
    let globalUserDetails = props.globalUserDetails;
    let setGlobalUserDetails = props.setGlobalUserDetails;
    console.log(globalUserDetails.user_id);

    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    const [bookingArray, setBookingArray] = useState([]);
    const  [deleteBooking, setDeleteBooking] = useState([]);

    // FETCH FOR BOOKINGS:
    useEffect(() => {
    // GET request using fetch inside useEffect React hook
        fetch(`http://localhost:3100/api/user-bookings/${globalUserDetails.user_id}`, {mode: 'cors'})
            .then(response => response.json())
            .then(data => {
                console.log("User bookings from API :")
                console.log(data);

                if (data.name != "error"){
                    setBookingArray(data);
                } else {
                    setBookingArray(templateData)
                }
            })
    }, []); // empty dependency array means this effect will only run once (like componentDidMount in classes)
    const [loadTo, setLoadTo] = useState(2);

    //delete booking request using fetch inside useEffect React hook
//     fetch(`http://localhost:3000/api/all-bookings/${booking_id"}`, {mode: 'cors'})
//     .then(response => response.json())
//     .then(data => {
//         console.log("Delete successfully:")
//         console.log(data);

//         if (data.name != "error"){
//             setBookingArray(setDeleteBooking);
//         } else {
//             setBookingArray(templateData)
//         }
//     })
// }, []);


    
    // Bimbola :
    // Convert date readout from API to user friendly format (Tuesday 15th March - ....)
    // Create delete button next to each upcoming booking that sends a request to :
    // router.delete("/all-bookings/:id" ---- this already exists in api.js
    
    // with the booking_id (not the user_id) to delete the booking. Then you will need to run the fetch request 
    // on line 21 again to get the newly updated upcoming booking list - or you can write the code to make the API 
    // send back an updated list and then rerender the bookings on screen by passing the returned data to setBookingArray()

    return (
        <div className="DashboardComponentWrappers">
            <h1>Your Upcoming Bookings</h1>
            <div>
                {bookingArray.map((element, index) =>{
                    console.log(bookingArray);
// console.log(timings);
                    if (bookingArray.length > 1){

                        if (index < loadTo){
                            let timings;

                            if ((element.am) && (element.pm)){
                                timings = "9.00am - 17.00pm";
                            } else if (element.am){
                                timings = "9.00am - 13.00pm";
                            } else {
                                timings = "13.00pm - 17.00pm";
                            }

                            return (
                                <div>
                                    {/* <h2>{element.date_booked} :</h2> */}
                                    <Moment format="dddd, MMMM Do, YYYY">{element.date_booked.timings}</Moment>
                                     <button type="submit">Delete</button> 

                                </div>
                                 /* <button onClick={()=>{

                                    deleteBooking</button> */

                            )
                        } else if (index == loadTo){
                            return (
                                <button onClick={()=>setLoadTo(loadTo + 2)}>Load More Booking</button>
                            )
                        } 
                    } else {
                        return (
                                <div>
                                    <h2>No Bookings Found</h2>
                                </div>
                            )
                    }

                })
                }
            </div>
        </div>
    );
}

