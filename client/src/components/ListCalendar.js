import React, { useState } from "react";
import Moment from "react-moment";
import moment from "moment";
import axios from "axios";
import { Checkbox } from "@mui/material";


// Calculates the week currently being viewed by the user and track the position using the next button click count as it's second argument
let calculateCurrentWeek = (n, calculateCurrentDayWeek) => {
		if (n != 6 + 7*(calculateCurrentDayWeek) && n != 7 + 7*(calculateCurrentDayWeek) && n != 0 && n > 7){
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

const ListCalender = (props) => {
	let todaysNumber = Number(moment().weekday());
	const [nextButtonClickCount, setNextButtonClickCount] = useState(0);

	//Holds the days in the current week being viewed by the user
	const [allDates, setAllDates] = useState(calculateCurrentWeek(todaysNumber, nextButtonClickCount));

	//Keeps track of all the responses for each day
	let [requestResponses, setRequestResponses] = useState("");

	const [checkedOne, setCheckedOne] = useState(true);
    const [checkedTwo, setCheckedTwo] = useState(true);

	//  ↓↓↓↓↓↓↓ Global useState and setState for Current Booking Information ↓↓↓↓↓↓
	let globalBookingInfo = props.globalBookingInfo;
    let setGlobalBookingInfo = props.setGlobalBookingInfo;
    console.log(globalBookingInfo);
    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑


	//Making API calls for every day of the current week
   	let taken = allDates.map((date) => {
      	return "http://localhost:3000/api/bookings?date=" + String(date[0].format("YYYY-MM-DD"));
   	});

	let takenRequest = taken.map((dateRequest) =>{
      	return axios.get(dateRequest);
   	});

   	axios.all(takenRequest).then(axios.spread((...responses) => {
		setRequestResponses(responses);
	})).catch((errors) => {
		console.log(errors);
	});




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
 console.log("Responses", requestResponses);
	return (
		<div className="ListCalenderBannerWrapper">
			<div>
				<h2>2. Desk Booking</h2>
				<p>Plan your visit in 2 simple steps. Get started</p>

				<h3>1. When would you like to go to this office</h3>
				<div className="This-week">
					<strong>This Week</strong>
					{allDates.map((date,index) => {
						//Calculating if the space in question has been booked in the morning, afternoon or both
						let morningSpacesTaken = 0;
						let afternoonSpacesTaken = 0;
						if(requestResponses[index] !== undefined){
							if(requestResponses[index].data.length > 0){
								if (requestResponses[index].data[0].am){
									morningSpacesTaken++;
								}
								if (requestResponses[index].data[1].pm){
									afternoonSpacesTaken++;
								}
							}
						}
						//A div is created for the days of the current week except for Saturdays and Sundays
						if (!String(date[0]._d).includes("Sat") && !String(date[0]._d).includes("Sun")){
							return(
								<div key={ index }>
									<label>
										<input type="radio" name="singleDate" onClick={(e)=>setGlobalBookingInfo({ ...globalBookingInfo, date_booked : moment(date[0]._d).format("YYYY-MM-D") })} />
										<Moment format="dddd, MMMM Do, YYYY">{date[0]}</Moment>

										- am : <strong>{50-morningSpacesTaken} spaces available</strong> | pm :<strong>{50-afternoonSpacesTaken} spaces available</strong>
										<span> - {50}</span>
									</label>
								</div>
							);
							}
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
