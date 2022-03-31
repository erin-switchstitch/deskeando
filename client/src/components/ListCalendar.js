import React, { useState } from "react";
// import BookingPage from "./BookingPage";
//import DisplayCalendar from "../components/DisplayCalender";
import Moment from "react-moment";
import moment from "moment";
import axios from "axios";
import { Checkbox } from "@mui/material";

const ListCalender = (props) => {

	//  ↓↓↓↓↓↓↓ Global useState and setState for Current Booking Information ↓↓↓↓↓↓
	let globalBookingInfo = props.globalBookingInfo;
    let setGlobalBookingInfo = props.setGlobalBookingInfo;
    console.log(globalBookingInfo);
    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑


	//const [calendar, setCalendar] = useState("");
	const [nextButtonClickCount, setNextButtonClickCount] = useState(0);

	//const today = moment().isoWeekday();

	let todaysNumber = Number(moment().weekday());

	// useEffect(() => {
	// 	// GET request using fetch inside useEffect React hook
	// 	fetch("http://localhost:3100/api/all-bookings", { mode: "cors" })
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			setCalendar(data);
	// 		});
	// }, []);

	let calculateCurrentWeek = (n) => {
		if (n != 6 + 7*(nextButtonClickCount) && n != 7 + 7*(nextButtonClickCount) && n != 0 && n > 7){
			console.log("I am executing block 1");
			let date = [];
			for (let i = 0; i < n; i++) {
				let dayArray = [];
				const day = moment().add(i, "days");
				dayArray.push(day);
				dayArray.push(0);
				date.push(dayArray);
			}

			return date;

		} else if(n <7 && n > 0){
			n=6-n;
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
			console.log("I am executing block 2");
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

	// function calculatePreviousWeek(){
	// 	console.log(nextButtonClickCount);
	// }
	// calculatePreviousWeek();

 	const [allDates, setAllDates] = useState(calculateCurrentWeek(todaysNumber));
	let [requestResponses, setRequestResponses] = useState("");

   	let taken = allDates.map((date) => {
      	return "http://localhost:3000/api/bookings?date=" + String(date[0].format("YYYY-MM-DD"));
   	});

	let takenRequest = taken.map((dateRequest) =>{
      	return axios.get(dateRequest);
   	});

   	axios.all(takenRequest).then(axios.spread((...responses) => {
		setRequestResponses("infinte loop");
	})).catch((errors) => {
		console.log(errors);
	});


	const [checkedOne, setCheckedOne] = useState(true);
    const [checkedTwo, setCheckedTwo] = useState(true);

    const handleChangeOne = (e) => {
        if (checkedTwo == true){
            setCheckedTwo(false);
        }
        setGlobalBookingInfo({ ...globalBookingInfo, am:e.target.checked });
    };

    const handleChangeTwo = (e) => {
        if (checkedOne == true){
            setCheckedOne(false);
        }
        setGlobalBookingInfo({ ...globalBookingInfo, pm:e.target.checked });
    };
// console.log("This is the allDates array", allDates);
	return (
		<div className="ListCalenderBannerWrapper">
			<div>
				<h2>2. Desk Booking</h2>
				<p>Plan your visit in 2 simple steps. Get started</p>

				<h3>1. When would you like to go to this office</h3>
				<div className="This-week">
					<strong>This Week</strong>
					{allDates.map((date,index) => {
						// console.log("index", index);
						// console.log("click count", nextButtonClickCount);
						// console.log("arrayIndexLogic", index + 7*(nextButtonClickCount));

						if (!String(date[0]._d).includes("Sat") && !String(date[0]._d).includes("Sun")){
							console.log("dates for this week: ", date);
							return(
								<div key={ index }>
									<label>
										<input type="radio" name="singleDate" onClick={(e)=>setGlobalBookingInfo({ ...globalBookingInfo, date_booked : moment(date[0]._d).format("YYYY-MM-D") })} />
										<Moment format="dddd, MMMM Do, YYYY">{date[0]}</Moment>
										- am : (num) | pm :(num)
										<span> - {50}</span>
									</label>
								</div>
							);
							}
        	  			// } else if(!String(date[0]._d).includes("Sat") && !String(date[0]._d).includes("Sun") && index > allDates.length -7 && index > 7-todaysNumber ){
						// 		return(
						// 		<div key={ index }>
						// 			<label>
						// 				<input type="radio" name="singleDate" onClick={(e)=>setGlobalBookingInfo({ ...globalBookingInfo, date_booked : moment(date[0]._d).format("YYYY-MM-D") })} />
						// 				<Moment format="dddd, MMMM Do, YYYY">{date[0]}</Moment>
						// 				- am : (num) | pm :(num)
						// 				<span> - {50}</span>
						// 			</label>
						// 		</div>
						// 	);
						//   }
						// console.log(globalBookingInfo)
					})	}
				</div>

				<button onClick={()=>{
						setNextButtonClickCount(nextButtonClickCount-1);
						todaysNumber -= 7;
						console.log("Today's number is:", todaysNumber);
						let allDays = calculateCurrentWeek(todaysNumber);
						let daysInCurrentWeek = allDays.splice(allDays.length-7,allDays.length);
						setAllDates(daysInCurrentWeek);
					}} className="btn btn-default" type="submit">Previous</button>
				<button
					onClick={()=>{
						setNextButtonClickCount(nextButtonClickCount+1);
						todaysNumber += 7 * nextButtonClickCount + 7;
						console.log("Today's number is:", todaysNumber);
						let allDays = calculateCurrentWeek(todaysNumber);
						let daysInCurrentWeek = allDays.splice(allDays.length-7,allDays.length);
						setAllDates(daysInCurrentWeek);
					}}
				className="btn btn-default" type="submit">Next</button>
			</div>
			<div>
				<label htmlFor="am">
                    AM :
                    <Checkbox
                        label="am"
                        value={globalBookingInfo.am}
                        onChange={handleChangeOne}
                        required={checkedOne}
                    />
                </label>

                <label htmlFor="pm">
                    PM :
                    <Checkbox
                        label="pm"
                        value={globalBookingInfo.pm}
                        onChange={handleChangeTwo}
                        required={checkedTwo}
                    />
                </label>
			</div>
		</div>
	);
};

export default ListCalender;
