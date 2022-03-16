import React, { useState } from "react";
import Moment from 'react-moment';
import moment from 'moment';
import Calendar from 'react-calendar';
import DeskList from "./DeskList";

export default function DisplayCalendar(){

    //  This value date is required for the Calender plugin component, it will not accept a date
    //  in a different format. We pass and update this dateValue only in the calender component,
    //  We use the selectedDate to pass to other components as it is in our 'universal format
    const [dateValue, setDateValue] = useState(new Date());

    //  We are using the "moment" plugin to format the date into our preferred format
    let [selectedDate, setSelectedDate] = useState(moment().format('D/MM/YYYY'));

    function changeFunction(e){
        // e.preventDefault();
        console.log("change function run ...")
        setDateValue(e);

        setSelectedDate(moment(e).format('D/MM/YYYY'));
        console.log(selectedDate)
    }

    return (
        <div>
        <Calendar onChange={changeFunction} value={dateValue} />
        <DeskList date={selectedDate} />
        </div>
    );
}