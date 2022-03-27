import React, { useState, useEffect } from "react";
// import BookingPage from "./BookingPage";
import DisplayCalendar from "../components/DisplayCalender";
import Moment from "react-moment";
import moment from "moment";
import axios from "axios";

const ListCalender = (props) => {
	const [calendar, setCalendar] = useState("");
	const [nextButtonClickCount, setNextButtonClickCount] = useState(0);

	const today = moment().isoWeekday();

	let todaysNumber = Number(moment().weekday());

	useEffect(() => {
		// GET request using fetch inside useEffect React hook
		fetch("http://localhost:3100/api/all-bookings", { mode: "cors" })
			.then((response) => response.json())
			.then((data) => {
				setCalendar(data);
			});
	}, []);

	let calculateCurrentWeek = (n) => {
	if(n != 6 + 7*(nextButtonClickCount) && n != 7 + 7*(nextButtonClickCount)  ){
			let date = [];
		for (let i = 0; i < n; i++) {
			let dayArray = [];
			const day = moment().add(i, "days");
			dayArray.push(day);
			dayArray.push(0);
			date.push(dayArray);
		}

		return date;
	} else {
		n=7;
			let date = [];

		for (let i = 0; i < n; i++) {
			let dayArray = [];
			const day = moment().add(i, "days");
			dayArray.push(day);
			dayArray.push(0);
			date.push(dayArray);
		}

		return date;
	}

	};

 	const [allDates, setAllDates] = useState(calculateCurrentWeek(7));
	 let [requestResponses, setRequestResponses] = useState("");

   let taken = allDates.map((date) => {
      return "http://localhost:3000/api/bookings?date=" + String(date[0].format("YYYY-MM-DD"));
   });
   let takenRequest = taken.map((dateRequest) =>{
      return axios.get(dateRequest);
   });

   axios.all(takenRequest).then(axios.spread((...responses) => {
	console.log(responses);
	setRequestResponses("infinte loop");
})).catch((errors) => {
  console.log(errors);
});

console.log("second",requestResponses);

	return (
		<div className="deskBookingSlot">
			<h1>Desk Booking</h1>
			<p>Plan your visit in 2 simple steps. Get started</p>

			<h2>1. When would you like to go to this office</h2>
			<div className="This-week">
				<strong>Next Week</strong>
				{ allDates.map((date,index) => {
					console.log("index", index);
					console.log("click count", nextButtonClickCount);
					console.log("arrayIndexLogic", index + 7*(nextButtonClickCount));
          if(index > allDates.length-7 && index != allDates.length-1){
           return ( <div key={ index }>

			<label><input type="radio" /><Moment format="dddd, MMMM Do, YYYY">{date[0]}</Moment><span> - {50}</span></label>


              </div>);
          }
        })
          }
			</div>

			<button className="btn btn-default" type="submit">
				Previous
			</button>
			<button
				onClick={()=>{
					setNextButtonClickCount(nextButtonClickCount+1);
					console.log(nextButtonClickCount);
todaysNumber+=7;
console.log("Todays Number: ",todaysNumber);
setAllDates(calculateCurrentWeek(14));
console.log(allDates);


}}
				className="btn btn-default"
				type="submit"
			>
				Next
			</button>

			<h2>2. Choose Your desk</h2>
		</div>
	);
};

export default ListCalender;
