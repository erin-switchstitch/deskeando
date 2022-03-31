import React from "react";
import { useState, useEffect } from "react";
import templateData from "./../data/bookings.json";
import Moment from 'react-moment';
import moment from 'moment';
import axios from 'axios'
import DeleteBookings from "./DeleteBookings";
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
    

        console.log(bookingArray);
    //delete booking request using fetch inside useEffect React hook
    // const deleteUserBooking =() =>{
    // fetch(`http://localhost:3100/api/all-bookings/${bookingArray.booking_id}`, { mode: 'cors', method: "DELETE" })
    // .then(response => response.json())
    // .then(data => {
    //     console.log("Delete successfully: ")
    //     console.log(data)
    // })
    // }


    
    function deleteBookingLocally(index){
        console.log(index)
        console.log(bookingArray);
        // setBookingArray(bookingArray.splice(index, 1));
    }


    return (
        <div className="DashboardComponentWrappers DubOuterWrapper">
            <h4 className="DubHeaderText">Your Upcoming Bookings</h4>
            <div className="DubInnerWrapper">
                {bookingArray.map((element, index) =>{
                    // console.log(bookingArray);
                    console.log(element.date_booked);
                    
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
                            return(
                                <div className="DubBookingTile">
                                    <div className="DubBookingTileInner">
                                        <h5 className="DubTileText">
                                            <Moment format="dddd Do MMMM">{element.date_booked}</Moment> 
                                            : {timings}
                                        </h5>
                                        <DeleteBookings element={element} onClick={(index)=>deleteBookingLocally(index)} className="DubTileDelete"/>
                                    </div>
                                    
                                </div>                             
                                );
                        } else if (index == loadTo){
                            return (
                                <button onClick={()=>setLoadTo(loadTo + 2)} className="DubButton">Load More Bookings</button>
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


