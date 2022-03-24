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
    
    const [sliderToggle, setSliderToggle] = useState(globalUserDetails.accessability);

    function sliderChange(e){
        setSliderToggle(!sliderToggle)
        console.log("Look below....")
        console.log(e.target)
        setGlobalUserDetails({...globalUserDetails, accessability : !sliderToggle})
    }
    
    return (
		<div className="BookingAccessabilityBannerWrapper">

            <div className="BookingAccessabilityPreClick">
                <h2>1. Accessability preferences</h2>                                
                <button onClick={()=>displayComponent()}>Show More...</button>
            </div>
            
            <div className="BookingAccessabilityPostClick">
                <FormGroup style={{display : displayValue}}>
                    <FormControlLabel onChange={(e)=>sliderChange(e)} control={<Switch checked={sliderToggle} />} label="Accessability Requirements" labelPlacement="start"/>
                    <h4>Current global accessability : {globalUserDetails.accessability.toString()}</h4>
                </FormGroup>
                
            </div>

		</div>
	);
}






