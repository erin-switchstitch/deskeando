import React from "react";
import { useState, useEffect } from "react";
import { Checkbox } from '@mui/material';
import { Link } from 'react-router-dom';

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

    // const [bookingDetails, setBookingDetails] = useState({ staff_id: globalUserDetails.user_id , desk_id: globalBookingInfo.desk_id, date_booked:globalBookingInfo.date_booked, am:globalBookingInfo.am, pm:globalBookingInfo.pm});

    // <DeskListBooker deskNumber={element.id} bookingDate={selectedDateParent} parentPassBackSetStateFunction={(data)=>setBookingsDataState(data)} globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}/>

    const [bookingIdState, setBookingIdState] = useState(false);

    async function fetchData() {
        console.log("UseEffect Run:")
        console.log({ user_id: globalUserDetails.user_id , desk_id: globalBookingInfo.desk_id, date_booked:globalBookingInfo.date_booked, am:globalBookingInfo.am, pm:globalBookingInfo.pm})
        
        let passedData = { user_id: globalUserDetails.user_id , desk_id: globalBookingInfo.desk_id, date_booked:globalBookingInfo.date_booked, am:globalBookingInfo.am, pm:globalBookingInfo.pm};

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(passedData)
        };

        fetch(`http://localhost:3100/api/all-bookings`, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data, "<------ booking id");
                console.log(data.booking_id);
                // setBookingIdState(data.booking_id);

                if (data[0].booking_id > 0){
                    setBookingIdState(true);
                }
                // if (data.booking_id)
                // booking_id {booking_id: 16, staff_id: 4, desk_id: 26, date_booked: '2022-04-03T23:00:00.000Z', am: false}
            });
    }


    function submitHandler(e){
        console.log("Submit handler run")
        e.preventDefault();
        fetchData();

    }




    const [checkedOne, setCheckedOne] = useState(true);
    const [checkedTwo, setCheckedTwo] = useState(true);

    const handleChangeOne = (e) => {        
        if (checkedTwo == true){
            setCheckedTwo(false);
        }
        setGlobalBookingInfo({ ...globalBookingInfo, am:e.target.checked })
    };

    const handleChangeTwo = (e) => {
        if (checkedOne == true){
            setCheckedOne(false);
        }
        setGlobalBookingInfo({ ...globalBookingInfo, pm:e.target.checked })
    };


    return (
        <div className="bookingDropdown">
            <h2>4.Submit Your Booking</h2>
            <form onSubmit={submitHandler}>
                
                <h3>You have chosen seat {globalBookingInfo.desk_id}</h3>

                {(bookingIdState) ? (
                    
                    <Link to={"/confirm"}>
                        <a className="navLink">Go to confirmation page.</a>
                    </Link>

                ) : (
                    <input
                        type="submit"
                        value="Submit Booking" 
                    ></input>
                )
                }

            </form>
        </div>
    );
}



    // let nowDate = new Date();
    // let currentDate = nowDate.getFullYear()+"-"+(nowDate.getMonth()+1)+"-"+nowDate.getDate();
    // let futureDate = nowDate.getFullYear()+"-"+(nowDate.getMonth()+2)+"-"+nowDate.getDate();
