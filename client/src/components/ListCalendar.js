import React, { useState , useEffect } from "react";
import Moment from "react-moment";
import moment from "moment";
import axios from "axios";
import { Checkbox } from "@mui/material";


// Calculates the week currently being viewed by the user and track the position using the next button click count as it's second argument

let calculateCurrentWeek = (n, calculateCurrentDayWeek, originalDate) => {

	originalDate =  Number(moment().weekday());
	// n = n-7;
	console.log(" ")
	console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
	console.log("todaysNumber : " + n)
	console.log("originalDate : " + originalDate)
	console.log("nextButtonClickCount : " + calculateCurrentDayWeek)

	if (n %7 !== 1 && calculateCurrentDayWeek > 0){
		console.log("  ")
		console.log("Not A Monday .....")
		// n = 1;
		console.log(n)

		while (n % 7 != 1){
			n++
		}
	}

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
		console.log(date)
		console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
		console.log(" ")
		return date;

	} else if(n <7 && n > 0){
		console.log("I am executing block 2");
		// This loops through the day number (if next week not pressed) and adds the remaining days of the week
		n=6-n;
		let date = [];

		for (let i = 0; i < n; i++) {
			let dayArray = [];
			const day = moment().add(i, "days");
			dayArray.push(day);
			dayArray.push(0);
			date.push(dayArray);
		}
		console.log(date)
		console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
		console.log(" ")
		return date;

	} else {
		console.log("I am executing block 3");
		n=7;
			let date = [];
		for (let i = 0; i < n; i++) {
			let dayArray = [];
			const day = moment().add(i, "days");
			dayArray.push(day);
			dayArray.push(0);
			date.push(dayArray);
		}
		console.log(date)
		console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
		console.log(" ")
		return date;
	}
	
};



const ListCalender = (props) => {
	let todaysNumber = Number(moment().weekday());
	const originalDate = Number(moment().weekday());
	const [nextButtonClickCount, setNextButtonClickCount] = useState(0);

	//Holds the days in the current week being viewed by the user
	const [allDates, setAllDates] = useState(calculateCurrentWeek(todaysNumber, nextButtonClickCount, originalDate));

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
      	return "/api/bookings?date=" + String(date[0].format("YYYY-MM-DD"));
   	});

	let takenRequest = taken.map((dateRequest) =>{
      	return axios.get(dateRequest);
   	});

	useEffect(() => {
   		axios.all(takenRequest).then(axios.spread((...responses) => {
			setRequestResponses(responses);
		})).catch((errors) => {
			console.log(errors);
		});
	}, []);




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
 	console.log("Responses : ");
	console.log(requestResponses)
	console.log("..........................................")
	console.log("alldates Array:")
	console.log(allDates)
	// console.log("requestResponses[0] Array:")
	// console.log(requestResponses[0])
	
 	return (
		<div className="ListCalenderOuterWrapper">
			<h3>3. When would you like to go into the office?</h3>

			<div className="ListCalenderInnerWrapper">

				<div className="This-week">
					<strong className="This-week-heading">This Week</strong>
					
					{allDates.map((date,index) => {
						console.log(".......... Look here ...........")
						console.log(date)

						//Calculating if the space in question has been booked in the morning, afternoon or both
						let morningSpacesTaken = 0;
						let afternoonSpacesTaken = 0;

						if(requestResponses[index] !== undefined){

							if(requestResponses[index].data.length > 0){

								console.log(requestResponses[index].data[0])

								if (requestResponses[index].data[0].am){
									morningSpacesTaken++;
								}

								if (requestResponses[index].data[0].pm){
									afternoonSpacesTaken++;
								}
							}
						}
						// console.log(allDates)
						// console.log(date); // add 7 to the first number of dates rather than last 

						//A div is created for the days of the current week except for Saturdays and Sundays
						if (!String(date[0]._d).includes("Sat") && !String(date[0]._d).includes("Sun")){
							return(
								<div key={ index }>
									<label>
										<input type="radio" name="singleDate" onClick={(e)=>setGlobalBookingInfo({ ...globalBookingInfo, date_booked : moment(date[0]._d).format("YYYY-MM-D") })} />
										<Moment format="dddd, MMMM Do, YYYY">{date[0]}</Moment>

										- (AM : <strong>{50-morningSpacesTaken}</strong> Spaces) | (PM :<strong>{50-afternoonSpacesTaken} </strong>Spaces)
										
									</label>
								</div>
							);
							}
					})	}
				</div>
				
				<div className="listCalenderButtonContainer">
					<button onClick={()=>{
						
						// useEffect(() => {
   						// 	getTopPlayersApi(category, season)
   						// 	  .then((playerIds) => {
   						// 	    // avoid nesting by returning the promise returned by
   						// 	    // `getPlayersByIdApi`
   						// 	    return getPlayersByIdApi(playerIds)
   						// 	  })
   						// 	  .then((rawPlayers) => {
   						// 	    setPlayers(normalizeApiPlayers(rawPlayers))
   						// 	  })
   						// 	  .catch((err) => {
   						// 	    // notify our error monitoring (using Bugsnag)
   						// 	    Bugsnag.notify(err)

   						// 	    // `null` players means an error happened
   						// 	    setPlayers(null)
   						// 	  })
   						// , [category, season]})
							
						const tempClickCounter = nextButtonClickCount-1;
						setNextButtonClickCount(nextButtonClickCount-1);
						todaysNumber -= 7;
						console.log("Today's number is:", todaysNumber);
						let allDays = calculateCurrentWeek(todaysNumber, tempClickCounter);
						console.log(allDays);
						let daysInCurrentWeek = allDays.splice(allDays.length-7,allDays.length);
						console.log(daysInCurrentWeek);
						setAllDates(daysInCurrentWeek);
					}} className="btn btn-default listCalenderButtons" type="submit">Previous</button>
					<button
						onClick={()=>{
							const tempClickCounter = nextButtonClickCount+1;
							setNextButtonClickCount(nextButtonClickCount+1);
							todaysNumber += 7 * nextButtonClickCount + 7;
							console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", todaysNumber);
							console.log("Today's number is:", todaysNumber);
							let allDays = calculateCurrentWeek(todaysNumber, tempClickCounter);
							console.log(allDays);
							console.log(allDays[allDays.length-7])
							console.log(allDays[allDays.length-1])

							// while (todaysNumber % 7 != 0){

							// }

							// This is the problem. An array is created that is original date + 7 which means
							// the last day of the added +7 array is not always the last day of the new week ....
							// 
							// - 9

							let daysInCurrentWeek = allDays.splice(allDays.length-7,allDays.length);
							console.log(daysInCurrentWeek);
							setAllDates(daysInCurrentWeek);
						}}
					className="btn btn-default listCalenderButtons" type="submit">Next</button>
				</div>
				
			</div>
			<div className="ListCalenderTimeSelector">
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
