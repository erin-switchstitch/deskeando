import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import moment from "moment";
import "./../stylings/Booking.css";
import Header from "../components/Header";
import DeskList from "../components/DeskList";
import DisplayCalendar from "../components/DisplayCalender";
import BookingsAccessibilityBanner from "../components/BookingsAccessibilityBanner";
import BookingSVG from "../components/BookingSVG";
import ListCalendar from "../components/ListCalendar";
import DeskListBooker from "../components/DeskListBooker";
import Footer from "../components/Footer";
import useWindowDimensions from "../components/useWindowDimensions";
import axios from "axios";

export default function BookingPage(props) {

	const [person, setPerson] = useState("Myself");
	const [otherPersonsEmail, setOtherPersonsEmail] = useState("");
	const [otherPersonsId, setOtherPersonsId] = useState(0);
	const [thirdPartyFirstName, setThirdPartyFirstName] = useState("");
	const [thirdPartyLastName, setThirdPartyLastName] = useState("");
	const [isThirdPartyAUser, setIsThirdPartyAUser] = useState(false);

	//  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
    let globalUserDetails = props.globalUserDetails;
    let setGlobalUserDetails = props.setGlobalUserDetails;
    console.log(globalUserDetails);
    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑


	//  ↓↓↓↓↓↓↓ Global useState and setState for Current Booking Information ↓↓↓↓↓↓
	let globalBookingInfo = props.globalBookingInfo;
    let setGlobalBookingInfo = props.setGlobalBookingInfo;
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
	axios.get(`http://localhost:3000/api/user/${otherPersonsEmail.replace("@","%40")}`)
	.then((response)=> {
		if(response.status == 200){
			setOtherPersonsId(response.data.id);
			setThirdPartyFirstName(response.data.first_name);
			setThirdPartyLastName(response.data.last_name);
			setIsThirdPartyAUser(true);
		} else {
			setIsThirdPartyAUser(false);
		}
	})
	.catch((error) => console.log(error));
	}

	return (
		<div className="BookingPageOuterWrapper">

			<div className="BookingPageInnerHeaderWrapper">
				<h2>I am booking for</h2>
				<input onChange={(e) =>	{
setPerson(e.target.value);
}} type="radio" value="Myself" name="person" />Myself
       			 <input onChange={(e) =>	setPerson(e.target.value) } type="radio" value="Someone else" name="person" />Someone else

					<div style={{ display: `${person === "Myself" ? "none" :"inline-block"}` }} >
						<span style={{ color:"#000000" }}>{ isThirdPartyAUser?"User found":"Please enter a valid user" }</span> <br />
				<label >Please provide the person's registerd email  <input type="text" value={otherPersonsEmail} onChange={(e)=>{
 setOtherPersonsEmail(e.target.value);console.log(otherPersonsEmail);
}} required /></label>
			<button type="button" onClick={	makeAPICall}>Submit name</button>
			</div>
			</div>


			<div className="BookingPageInnerMainWrapper">

				<BookingsAccessibilityBanner globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)} />

				{/* <DisplayCalendar selectedDateParent={selectedDateParent} setSelectedDateParent={(data)=>setSelectedDateParent(data)}
				globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}/> */}

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
            	        <h3>3. Choose Your desk</h3>
            	    </div>
            	)}


				{(globalBookingInfo.desk_id != "" && globalBookingInfo.date_booked != "" && (globalBookingInfo.am != false || globalBookingInfo.pm != false)) ? (

            	    <DeskListBooker otherPersonsId={otherPersonsId} globalBookingInfo={globalBookingInfo} setGlobalBookingInfo={(data)=>setGlobalBookingInfo(data)}
					selectedDateParent={selectedDateParent} setSelectedDateParent={(data)=>setSelectedDateParent(data)}
					globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)} />

            	) : (
            	    <div className="bookingDropdown">
            	        <h3>4.Submit Your Booking</h3>
            	    </div>
            	)}




				{/* <DeskList globalBookingInfo={globalBookingInfo} setGlobalBookingInfo={(data)=>setGlobalBookingInfo(data)}
				selectedDateParent={selectedDateParent} setSelectedDateParent={(data)=>setSelectedDateParent(data)}
				globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}
				/> */}

			</div>

		</div>
	);
}






