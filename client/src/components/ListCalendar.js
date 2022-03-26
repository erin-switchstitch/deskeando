import React , { useState,useEffect } from "react";
// import BookingPage from "./BookingPage";
import DisplayCalendar from "../components/DisplayCalender";
import Moment from 'react-moment';
import moment from "moment";

const  ListCalender = (props)=> {
const [calendar,setCalendar]= useState("");
const today = moment().isoWeekday();


const[todaysNumber, settodaysNumber]=useState(Number(moment().weekday()));
const [currentWeek, setcurrentWeek]=useState("");
console.log(todaysNumber);

useEffect(() => {
  // GET request using fetch inside useEffect React hook
      fetch("http://localhost:3100/api/all-bookings", { mode: "cors" })
      .then(response => response.json())
      .then(data => {
        setCalendar(data);
          });
  }, []);
console.log(moment().add(0, 'days'));
function  calculateCurrentWeek(n){ 
    let date = [];
for (let i = 0; i < n; i++ ){
    const day = moment().add(i, 'days'); 

    date.push(day);
}

return date;
}
setcurrentWeek(calculateCurrentWeek(8 - todaysNumber));
console.log(currentWeek);
function displayNextWeek(){
    settodaysNumber (todaysNumber + 7);
     console.log('displayNextWeek', todaysNumber);
     return calculateCurrentWeek(todaysNumber);
    }


    return (
      <div className="deskBookingSlot">
  <h1>Desk Booking</h1>
  <p>Plan your visit in 2 simple steps. Get started</p>

  <h2>1. When would you like to go to this office</h2>
        <div className="This-week">
          <strong>Next Week</strong>
          { currentWeek.map((date,index) => (
        <div key={ index }>
          <input type="radio" />
           
           <Moment format="dddd, MMMM Do, YYYY">{date}</Moment>
           <span> - 50 Spaces</span>

              </div>
            ))
          }
}
          </div>
         <button className="btn btn-default" type="submit">
Previous
</button>
          <button onClick={ displayNextWeek } className="btn btn-default" type="submit">
Next
</button>

<h2>2. Choose Your desk</h2>

        </div>
      );
    };
export default ListCalender;