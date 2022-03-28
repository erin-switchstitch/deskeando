import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import moment from 'moment';
import "./../stylings/Booking.css";
import Header from "../components/Header";
import DeskList from "../components/DeskList";
import DisplayCalendar from "../components/DisplayCalender";
import BookingsAccessibilityBanner from "../components/BookingsAccessibilityBanner";
import BookingSVG from "../components/BookingSVG";
import ListCalendar from "../components/ListCalendar";
import DeskListBooker from "../components/DeskListBooker";
import Footer from "../components/Footer";
export default function BookingPage(props) {

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

	const [selectedDateParent, setSelectedDateParent] = useState(moment().format('YYYY-MM-D'));
	console.log(selectedDateParent);


	return (
		<div>
			<Header />

			<BookingsAccessibilityBanner globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}/>
			
			{/* <DisplayCalendar selectedDateParent={selectedDateParent} setSelectedDateParent={(data)=>setSelectedDateParent(data)}
			globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}/> */}

			<ListCalendar globalBookingInfo={globalBookingInfo} setGlobalBookingInfo={(data)=>setGlobalBookingInfo(data)}
			selectedDateParent={selectedDateParent} setSelectedDateParent={(data)=>setSelectedDateParent(data)}
			globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}/>

			<BookingSVG globalBookingInfo={globalBookingInfo} setGlobalBookingInfo={(data)=>setGlobalBookingInfo(data)}
			selectedDateParent={selectedDateParent} setSelectedDateParent={(data)=>setSelectedDateParent(data)}
			globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}/>

			{/* <DeskList globalBookingInfo={globalBookingInfo} setGlobalBookingInfo={(data)=>setGlobalBookingInfo(data)}
			selectedDateParent={selectedDateParent} setSelectedDateParent={(data)=>setSelectedDateParent(data)}
			globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}
			/> */}

			<DeskListBooker globalBookingInfo={globalBookingInfo} setGlobalBookingInfo={(data)=>setGlobalBookingInfo(data)}
			selectedDateParent={selectedDateParent} setSelectedDateParent={(data)=>setSelectedDateParent(data)}
			globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}/>
			
            <Footer />
		</div>
	);
}






