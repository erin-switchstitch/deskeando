import React , { useState,useEffect } from "react";
// import BookingPage from "./BookingPage";
import DisplayCalendar from "../components/DisplayCalender";
import Moment from 'react-moment';
import moment from "moment";
// import { Calendar } from "react-calendar";

const  ListCalender = (props)=> {
const [calendar,setCalendar]= useState("");
// const date = new Date ();
// const thisWeek = date.date_booked;
const today = moment().isoWeekday();
// console.log('today', today);
// const startDate = moment().add(0, 'days').date.format('YYYY-MM-DD');

//    const tomorrow = moment().add(1, 'days').format('YYYY-MM-DD');
// console.log(startDate);
// console.log(tomorrow);
function calculateNextFourWeeks(startDay){
   let startDayUnit = startDay;
   let endDayUnit = 7 + startDay;
   const weeks =[];
   for(let i = 0; i < 4; i++){
      const range=[];
      const startDayOfWeek=moment().add(startDayUnit, 'days').format('YYYY-MM-DD');
      const endDayOfWeek=moment().add(endDayUnit, 'days').format('YYYY-MM-DD');
      range.push(startDayOfWeek);
      range.push(endDayOfWeek);
      weeks.push(range);
      startDayUnit += 7;
      endDayUnit += 7;
   }
   return weeks;
};
console.log(calculateNextFourWeeks(8 - today));

// console.log(props);
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
          <strong>Next Week</strong>
          { calculateNextFourWeeks(8 - today).map((date,index) => (
        <div key={ index }>
          <input type="radio" />
           <Moment format="dddd, MMMM Do, YYYY">{date[0] }</Moment>
           <span> - </span>
           <Moment format="dddd, MMMM Do, YYYY">{date[1] }</Moment>
           <span> - 50 Spaces</span>

              </div>
            ))
          }
          </div>
          {/* <div className="Next-week">
        <strong> Next week</strong>
          { calendar.length > 5 && calendar.map((text,index) => (
        <div key={ index }>
          <input type="radio" />
          <Moment format="dddd, MMMM Do, YYYY">{text.date_booked }</Moment>
              </div>
            ))
          }
          </div> */}
          <button className="btn btn-default" type="submit">
Next
</button>
<h2>2. Choose Your desk</h2>

        </div>
      );
    };
export default ListCalender;