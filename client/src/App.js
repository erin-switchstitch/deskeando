import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import BookingPage from "./pages/BookingPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import UserPreferencesPage from "./pages/UserPreferencesPage";
import AboutPage from "./pages/AboutPage";
import Moment from "react-moment";
import moment from "moment";
import "./stylings/root.css";
import ContactUs from "./components/ContactUs";


export default function App(){

	//  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

	const [globalUserDetails, setGlobalUserDetails] = useState({ user_id : "", first_name : "", last_name : "", email : "", accessibility : false });
	// const [globalUserDetails, setGlobalUserDetails] = useState({ user_id: 3, first_name: 'Admin', last_name: 'Istrator', email: 'admin@admin.com', accessibility: true});
	// console.log(globalUserDetails);


	/*

	Notes for mutating globalUserDetails:

	If you want to change a value of the globalUserDetails, then you will need to access setGlobalUserDetails. This has been passed down as a prop to every component.
	The useState and the setState have been passed down as props with the same name in every component. They are set here in app.js, then are passed to components in
	the "pages" folder. And then down to the components in the "components" folder.

	Below is an example of how we have changed a single value within this global useState without deleting the other values :
	<button onClick={()=>setGlobalUserDetails({...globalUserDetails, accessability : false})}>Accessability = false</button>
	*/
	// const [globalBookingInfo, setGlobalBookingInfo] = useState({desk_id: "", date_booked: moment().format('YYYY-MM-D'), am:false, pm:false})
	const [globalBookingInfo, setGlobalBookingInfo] = useState({ desk_id: "", date_booked: "", am:false, pm:false, other_id: 0, other_first_name : "", other_last_name : "", other_email : "" });

    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑



	return (
		<div>

		<Header globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)} />

		
		<Routes>
			<Route path="/" element={<LoginPage globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)} />} />
			<Route path="/about" element={<AboutPage globalUserDetails={globalUserDetails} setGlobalUserDetails={(data) => setGlobalUserDetails(data)} />} />
			<Route path="/contactUs" element={<ContactUs globalUserDetails={globalUserDetails} setGlobalUserDetails={(data) => setGlobalUserDetails(data)} />} />

			<Route 
				path="/dashboard"
				element={(globalUserDetails.user_id != "") ? (
					<Dashboard globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}/>
				):(
					<LoginPage globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}/>
					// alert={("Login or Signup required before this page will open")}
				)} 
			/>
			
			<Route 
				path="/preferences"
				element={(globalUserDetails.user_id != "") ? (
					<UserPreferencesPage globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}/>
				):(
					<LoginPage globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}/>
				)} 
			/>
			
			<Route 
				path="/booking"
				element={(globalUserDetails.user_id != "") ? (
					<BookingPage globalBookingInfo={globalBookingInfo} setGlobalBookingInfo={(data)=>setGlobalBookingInfo(data)} 
					globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}/>
				):(
					<LoginPage globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}/>
				)} 
			/>

			<Route 
				path="/confirm"
				element={(globalUserDetails.user_id != "") ? (
					<ConfirmationPage  globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)} globalBookingInfo={globalBookingInfo} setGlobalBookingInfo={(data)=>setGlobalBookingInfo(data)}/>
				):(
					<LoginPage globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}/>
				)} 
			/>
		</Routes>
		<Footer />
		</div>

	);
}


