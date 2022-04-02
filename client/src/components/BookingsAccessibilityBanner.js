import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import moment from 'moment';
import "./../stylings/Booking.css";
import Header from "./Header";
import DeskList from "./DeskList";
import DisplayCalendar from "./DisplayCalender";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function BookingsAccessibilityBanner(props) {

	//  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
    let globalUserDetails = props.globalUserDetails;
    let setGlobalUserDetails = props.setGlobalUserDetails;
    console.log(globalUserDetails);
    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    const [displayToggle, setDisplayToggle] = useState(false);
    const [displayValue, setDisplayValue] = useState("none");

	function displayComponent(){

        console.log(displayToggle);

        if (displayToggle == false){
            setDisplayToggle(true);
            setDisplayValue("inline");
        } else {
            setDisplayToggle(false);
            setDisplayValue("none");
        }
    }
    
    const [sliderToggle, setSliderToggle] = useState(globalUserDetails.accessibility);

    function sliderChange(e){
        setSliderToggle(!sliderToggle)
        console.log("Look below....")
        console.log(e.target)
        setGlobalUserDetails({...globalUserDetails, accessibility : !sliderToggle})
    }
    
    return (
		<div className="BookingAccessibilityBannerWrapper">

            <div className="BookingAccessibilityPreClick" onClick={()=>displayComponent()}>
                <h3>1. Change your accessibility preferences</h3>                                
                {/* <button onClick={()=>displayComponent()}>Show More...</button> */}
            </div>
            
            <div className="BookingAccessibilityPostClick">
                <FormGroup style={{display : displayValue}}>
                    <FormControlLabel onChange={(e)=>sliderChange(e)} control={<Switch checked={sliderToggle} />} label="Accessibility Requirements" labelPlacement="start"/>
                    <h4>Current global accessibility : {globalUserDetails.accessibility.toString()}</h4>
                </FormGroup>
                
            </div>

		</div>
	);
}






