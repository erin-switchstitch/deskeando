import React, { useState } from "react";
import Calendar from 'react-calendar';
import DeskList from "./DeskList";

export default function DisplayCalendar(){

      const [value, onChange] = useState(new Date());

    function changeFunction(event){
        onChange(event);
        console.log(event);
    }

    return (
        <div>
        <Calendar onChange={changeFunction} value={value} />
        <DeskList date={String(value)} />
        </div>
    );
}