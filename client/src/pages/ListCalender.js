import React , { useState,useEffect } from "react";
import BookingPage from "./BookingPage";
import DisplayCalendar from "../components/DisplayCalender";
import Moment from 'react-moment';
// import moment from "moment";
// import { Calendar } from "react-calendar";

const  ListCalender = (props)=> {
const [calendar,setCalendar]= useState("");
// const date = new Date ();
// const thisWeek = date.date_booked;


console.log(props);
useEffect(() => {
  // GET request using fetch inside useEffect React hook
      fetch("http://localhost:3100/api/all-bookings", { mode: "cors" })
      .then(response => response.json())
      .then(data => {
        // console.log("Bookings Data from API :");
        // console.log(data);
        setCalendar(data);
          });
  }, []);
// console.log(calendar);
// console.log(calendar.length);
// const range = moment.range(moment("2018-10-14"), moment("2018-10-20"));

// console.log(Array.from(range.by('day')).map(x => x.format('YYYY-MM-DD')))
// const today = moment();
// const day = today.weekday();
// const startDate = today.add(0, "days");
// const endDate = today.add(3, "days");

// console.log('startDate', startDate);
// console.log('endDate', endDate);

    return (
      <div className="deskBookingSlot">
  <h1>Desk Booking</h1>
  <p>Plan your visit in 2 simple steps. Get started</p>

  <h2>1. When would you like to go to this office</h2>
        <div className="This-week">
          <strong>This week</strong>
          { calendar.length > 0 && calendar.map((text,index) => (
        <div key={ index }>
          <input type="radio" />
           <Moment format="dddd, MMMM Do, YYYY">{text.date_booked }</Moment>
              </div>
            ))
          }
          </div>
          <div className="Next-week">
        <strong> Next week</strong>
          { calendar.length > 5 && calendar.map((text,index) => (
        <div key={ index }>
          <input type="radio" />
          <Moment format="dddd, MMMM Do, YYYY">{text.date_booked }</Moment>
              </div>
            ))
          }
          </div>
          <button className="btn btn-default" type="submit">
Show more dated
</button>
<h2>2. Choose Your desk</h2>

        </div>
      );
    };
export default ListCalender;