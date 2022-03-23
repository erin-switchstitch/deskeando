import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import moment from 'moment';
import "./../stylings/Booking.css";
import Header from "../components/Header";
import DeskList from "../components/DeskList";
import DisplayCalendar from "../components/DisplayCalender";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function BookingsAccessabilityBanner(props) {

	//  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
    let globalUserDetails = props.globalUserDetails;
    let setGlobalUserDetails = props.setGlobalUserDetails;
    console.log(globalUserDetails);
    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    const [hideAndDisplay, setHideAndDisplay] = useState(false);
    const [displayValue, setDisplayValue] = useState("none");

	function hideComponent(){

        console.log(hideAndDisplay);

        if (hideAndDisplay){
            setHideAndDisplay(false);
            setDisplayValue("none");
        } else {
            setHideAndDisplay(true);
            setDisplayValue("inline");
        }
    }
    
    const [toggle, setToggle] = useState(false);

    function onChange(e){
        setToggle(!toggle)
        console.log("Look below....")
        console.log(e.target)
        setGlobalUserDetails({...globalUserDetails, accessability : toggle})
    }
    
    return (
		<div className="BookingAccessabilityBannerWrapper">
            <div className="BookingAccessabilityPreClick">
                <h2>1. Accessability preferences</h2>
                <button onClick={()=>hideComponent()}>Show More...</button>
            </div>
            <div className="BookingAccessabilityPostClick">
                <FormGroup style={{display : displayValue}}>
                    <FormControlLabel onChange={(e)=>onChange(e)} control={<Switch defaultChecked />} label="No requirements | Yes requirements" labelPlacement="top"/>
                    <h4>Current global accessability : {globalUserDetails.accessability.toString()}</h4>
                </FormGroup>
                
            </div>

		</div>
	);
}






