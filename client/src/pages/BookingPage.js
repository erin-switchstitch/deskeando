import { useEffect, useState } from "react";
import moment from "moment";
import "./../stylings/Booking.css";
import DeskList from "../components/DeskList";
import BookingsAccessibilityBanner from "../components/BookingsAccessibilityBanner";
import BookingSVG from "../components/BookingSVG";
import ListCalendar from "../components/ListCalendar";
import DeskListBooker from "../components/DeskListBooker";
import useWindowDimensions from "../components/useWindowDimensions";
import axios from "axios";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function BookingPage(props) {

	const [person, setPerson] = useState("Myself");
	const [isThirdPartyAUser, setIsThirdPartyAUser] = useState(false);

	//  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
    let globalUserDetails = props.globalUserDetails;
    let setGlobalUserDetails = props.setGlobalUserDetails;
    console.log(globalUserDetails);
    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑


	//  ↓↓↓↓↓↓↓ Global useState and setState for Current Booking Information ↓↓↓↓↓↓
	let globalBookingInfo = props.globalBookingInfo;
    let setGlobalBookingInfo = props.setGlobalBookingInfo;
    

	let otherPersonsEmail = globalBookingInfo.other_email;
	// function setOtherPersonsEmail(newInfo){setGlobalBookingInfo(...globalBookingInfo, other_email : newInfo)};
	// const [otherPersonsEmail, setOtherPersonsEmail] = useState("");

	let otherPersonsId = globalBookingInfo.other_id;
	// const [otherPersonsId, setOtherPersonsId] = useState(0);

	let thirdPartyFirstName = globalBookingInfo.other_first_name;
	// const [thirdPartyFirstName, setThirdPartyFirstName] = useState("");

	let thirdPartyLastName = globalBookingInfo.other_last_name;
	// const [thirdPartyLastName, setThirdPartyLastName] = useState("");

	console.log("HERE!!!!!!!!!!!!!!!!!!!!!!")
	console.log(globalBookingInfo);
    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

	const [selectedDateParent, setSelectedDateParent] = useState(moment().format("YYYY-MM-D"));
	console.log(selectedDateParent);


	function ConditionalDisplay(bool){
		if (bool == true){
			return (
				<BookingSVG globalBookingInfo={globalBookingInfo} setGlobalBookingInfo={(data)=>setGlobalBookingInfo(data)}
				selectedDateParent={selectedDateParent} setSelectedDateParent={(data)=>setSelectedDateParent(data)}
				globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)} />
			);
		}
	}

	const { height, width } = useWindowDimensions();

	console.log("width" + width);
	function makeAPICall(e){
		e.preventDefault();
	axios.get(`/api/user/${otherPersonsEmail.replace("@","%40")}`)
	.then((response)=> {
		if(response.status == 200){
			setGlobalBookingInfo({...globalBookingInfo, "other_id" : response.data.id, "other_first_name" : response.data.first_name, "other_last_name" : response.data.last_name});
			setIsThirdPartyAUser(true);
		} else {
			setIsThirdPartyAUser(false);
		}
	})
	.catch((error) => console.log(error));
	}

	const [displayToggle, setDisplayToggle] = useState(false);
    const [displayValue, setDisplayValue] = useState("none");

	function displayComponent(){

        console.log(displayToggle);

        if (displayToggle == false){
            setDisplayToggle(true);
            setDisplayValue("flex");
        } else {
            setDisplayToggle(false);
            setDisplayValue("none");
        }
    }
    

	return (
		<div className="BookingPageOuterWrapper">

			<div className="BookingPageInnerHeaderWrapper">
				
				<div className="BookingForPreClick" onClick={()=>displayComponent()}>
                	<h3>1. Change who you are booking for</h3>                                
           		</div>
		
           		<div className="BookingForPostClick">
					<div style={{display : displayValue}} className="BookingForPostClickInnerWrapper">
					<h4>I am booking for</h4>

						<div>
							<input onChange={(e) =>	{
								setPerson(e.target.value);
							}} type="radio" value="Myself" name="person" defaultChecked/>
							{" "}Myself
						</div>

						<div>
							<input onChange={(e) =>	setPerson(e.target.value) } type="radio" value="Someone else" name="person" />
							{" "}Someone else 
						</div>
			

						<div style={{ display: `${person === "Myself" ? "none" :"flex"}` }} className="BookingForInputWrapper">
							<h4 style={{ color:"#000000" }}>{ isThirdPartyAUser?"User found":"Please enter a valid user:" }</h4>
							<input placeholder="Enter the person's registered email" type="text" value={otherPersonsEmail} onChange={(e)=>{
 								setGlobalBookingInfo({...globalBookingInfo, "other_email" : e.target.value});
							 	console.log(otherPersonsEmail);
							}} required />
							<button type="button" onClick={	makeAPICall}>Submit name</button>
						</div>
				</div>
					   	
           	</div>

		</div>


			<div className="BookingPageInnerMainWrapper">

				<BookingsAccessibilityBanner globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)} />

				<ListCalendar globalBookingInfo={globalBookingInfo} setGlobalBookingInfo={(data)=>setGlobalBookingInfo(data)}
				selectedDateParent={selectedDateParent} setSelectedDateParent={(data)=>setSelectedDateParent(data)}
				globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)} />


				{(globalBookingInfo.date_booked != "" && (globalBookingInfo.am != false || globalBookingInfo.pm != false)) ? (

            	    (width < 800) ? (
						<DeskList globalBookingInfo={globalBookingInfo} setGlobalBookingInfo={(data)=>setGlobalBookingInfo(data)}
						selectedDateParent={selectedDateParent} setSelectedDateParent={(data)=>setSelectedDateParent(data)}
						globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}
						/>
					):(
						<BookingSVG globalBookingInfo={globalBookingInfo} setGlobalBookingInfo={(data)=>setGlobalBookingInfo(data)}
						selectedDateParent={selectedDateParent} setSelectedDateParent={(data)=>setSelectedDateParent(data)}
						globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)} />
					)

            	) : (
            	    <div className="ListCalenderBannerWrapper">
            	        <h3>4. Choose Your desk</h3>
            	    </div>
            	)}


				{(globalBookingInfo.desk_id != "" && globalBookingInfo.date_booked != "" && (globalBookingInfo.am != false || globalBookingInfo.pm != false)) ? (

            	    <DeskListBooker otherPersonsName={{thirdPartyFirstName,thirdPartyLastName}} globalBookingInfo={globalBookingInfo} setGlobalBookingInfo={(data)=>setGlobalBookingInfo(data)}
					selectedDateParent={selectedDateParent} setSelectedDateParent={(data)=>setSelectedDateParent(data)}
					globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)} />

            	) : (
            	    <div className="bookingDropdown">
            	        <h3>5.Submit Your Booking</h3>
            	    </div>
            	)}

			</div>

		</div>
	);
}






