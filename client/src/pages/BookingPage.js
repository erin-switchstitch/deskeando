import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import moment from 'moment';
import "./../stylings/Home.css";
import Header from "../components/Header";
import DeskList from "../components/DeskList";
import DisplayCalendar from "../components/DisplayCalender";


export default function BookingPage(props) {

	//  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
    let globalUserDetails = props.globalUserDetails;
    let setGlobalUserDetails = props.setGlobalUserDetails;
    console.log(globalUserDetails);
    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

	//  ↓↓↓ Parent component useState and setState for currently selected date ↓↓↓ 
	const [selectedDateParent, setSelectedDateParent] = useState(moment().format('YYYY-MM-D'));
	console.log(selectedDateParent);
    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑


	return (
		<div>
			<Header />
			<DisplayCalendar selectedDateParent={selectedDateParent} setSelectedDateParent={(data)=>setSelectedDateParent(data)}
			globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}/>
			<DeskList selectedDateParent={selectedDateParent} setSelectedDateParent={(data)=>setSelectedDateParent(data)}
			globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}/>
		</div>
	);
}






