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
    // console.log(globalUserDetails.user_id);

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


    function deleteBookingLocally(index){
        console.log(index)
        console.log(bookingArray);
        let preSplicedArray = [bookingArray];
        preSplicedArray.splice(index, 1);

        console.log("LOOK HERE VVVVVVVVVVVVVVVV")
        console.log(preSplicedArray);

        setBookingArray(preSplicedArray);
    }


    return (
        <div className="DashboardComponentWrappers DubOuterWrapper">
            <h4 className="DubHeaderText">Your Upcoming Bookings</h4>
            <div className="DubInnerWrapper">
                {bookingArray.length == 0 ? (
                   
                    <div className="DubNoBookingFoundTile">
                        <h2 id="DubNoBookingFoundTileText">No Bookings Found</h2>
                    </div>
                            
                ):(
                    bookingArray.map((element, index) =>{
                    // console.log(bookingArray);
                    console.log(element.date_booked);
                    console.log("Booking Array mapped for display....")
                    
                    if (bookingArray.length !== 0){
                        console.log("Bookings found .....")
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
                                        
                                    </div>
                                    <div className="DubTileDeleteWrapper">
                                            <DeleteBookings element={element} currentDisplayIndex={index} passLocal={(index)=>deleteBookingLocally(index)} className="DubTileDelete"/>
                                    </div>
                                    
                                </div>                             
                                );
                        } else if (index == loadTo){
                            return (
                                <button onClick={()=>setLoadTo(loadTo + 2)} className="DubButton">Load More Bookings</button>
                            )
                        } 
                    } else {
                        console.log("No Bookings found .....")
                        return (
                                <div>
                                    <h2>No Bookings Found</h2>
                                </div>
                            )
                    }
                })
                
                )}
                

                
            </div>
        </div>
    );
}


