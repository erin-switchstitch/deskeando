import React, { useState } from "react";
import Moment from 'react-moment';
import moment from 'moment';
import Calendar from 'react-calendar';
import DeskList from "./DeskList";
import "./../stylings/Booking.css";

export default function DisplayCalendar(props){

    //  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
    let globalUserDetails = props.globalUserDetails;
    let setGlobalUserDetails = props.setGlobalUserDetails;
    console.log(globalUserDetails);
    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    //  ↓↓↓ Parent component useState and setState for currently selected date ↓↓↓ 
    let selectedDateParent = props.selectedDateParent;
    let setSelectedDateParent = props.setSelectedDateParent;
    console.log(selectedDateParent);
    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑


    //  This value date is required for the Calender plugin component, it will not accept a date
    //  in a different format. We pass and update this dateValue only in the calender component,
    //  We use the selectedDate to pass to other components as it is in our 'universal format
    const [dateValue, setDateValue] = useState(new Date());

    //  We are using the "moment" plugin to format the date into our preferred format
    let [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-D'));

    function changeFunction(e){
        // e.preventDefault();
        console.log("change function run ...")
        setDateValue(e);
        
        // setSelectedDate(moment(e).format('YYYY-MM-D'));
        // console.log(selectedDate)

        setSelectedDateParent(moment(e).format('YYYY-MM-D'))
    }

    return (
        <div className="BookingCalenderBannerWrapper">
            <h2>2. When would you like to go into the office?</h2>
            <Calendar onChange={changeFunction} value={dateValue} />
        </div>
    );
}