import React from "react";
import { useState, useEffect } from "react";
import templateData from "./bookings.json";

export default function UpcomingBookings(props) {


    let bookingArray = templateData;

    const [loadTo, setLoadTo] = useState(2);


    console.log(bookingArray);

    return (
        <div className="DashboardComponentWrappers">
            <h1>Your Upcoming Bookings</h1>
            <div>
                {bookingArray.map((element, index) =>{
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
                                <h2>{element.date} : {timings}</h2>
                            </div>
                        )
                    } else if (index == loadTo){
                        return (
                            <button onClick={()=>setLoadTo(loadTo + 2)}>Load More Booking</button>
                        )
                    }
                })
                }
            </div>
        </div>
    );
}

