import React from "react";
import { useState, useEffect } from "react";
import { Checkbox } from '@mui/material';

export default function DeskListBooker(props) {

    const [bookingDetails, setBookingDetails] = useState({ name_of_staff:"", desk_id: props.deskNumber, date_booked:props.bookingDate, am:false, pm:false});

    async function fetchData(inputData) {
        console.log("UseEffect Run:")
        console.log(bookingDetails);
        
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputData)
        };

        fetch(`http://localhost:3100/api/all-bookings`, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                props.parentPassBackSetStateFunction(data);
            });
    }
    

    function submitHandler(e){
        console.log("Submit handler run")
        e.preventDefault();
        alert(`Desk ${props.deskNumber} has been booking by ${bookingDetails.name_of_staff}. AM : ${bookingDetails.am}. PM : ${bookingDetails.pm}`);
        fetchData(bookingDetails);
    }


    const [checkedOne, setCheckedOne] = useState(true);
    const [checkedTwo, setCheckedTwo] = useState(true);

    const handleChangeOne = (e) => {        
        if (checkedTwo == true){
            setCheckedTwo(false);
        }
        setBookingDetails({ ...bookingDetails, am:e.target.checked })
    };

    const handleChangeTwo = (e) => {
        if (checkedOne == true){
            setCheckedOne(false);
        }
        setBookingDetails({ ...bookingDetails, pm:e.target.checked })
    };


    return (
        <div className="bookingDropdown">
            <form onSubmit={submitHandler}>
                <label htmlFor="name">
                    Your name:
                    <input 
                        type="text" name="name" id="name" 
                        onChange={(e) => setBookingDetails({ ...bookingDetails, name_of_staff:e.target.value })} 
                        value={bookingDetails.name_of_staff}
                        required>
                    </input>
                </label>

                <label htmlFor="am">
                    AM :
                    <Checkbox
                        label="am"
                        value={bookingDetails.am}
                        onChange={handleChangeOne}
                        required={checkedOne} 
                    />
                </label>

                <label htmlFor="pm">
                    PM :
                    <Checkbox
                        label="pm"
                        value={bookingDetails.pm}
                        onChange={handleChangeTwo}
                        required={checkedTwo}  
                    />
                </label>
                
                <input
                    type="submit"
                    value="Submit Booking"
                ></input>
            </form>
        </div>
    );
}



    // let nowDate = new Date();
    // let currentDate = nowDate.getFullYear()+"-"+(nowDate.getMonth()+1)+"-"+nowDate.getDate();
    // let futureDate = nowDate.getFullYear()+"-"+(nowDate.getMonth()+2)+"-"+nowDate.getDate();
