import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import ".././stylings/UserPreferencesPage.css";

export default function UserPreferencesPage(props){

    //  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
    let globalUserDetails = props.globalUserDetails;
    let setGlobalUserDetails = props.setGlobalUserDetails;
    console.log(globalUserDetails);
    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    const [sliderToggle, setSliderToggle] = useState(globalUserDetails.accessibility);

    function sliderChange(e){
        setSliderToggle(!sliderToggle);
        console.log("Look below....");
        console.log(e.target);
        setGlobalUserDetails({ ...globalUserDetails, accessibility : !sliderToggle });
    }


    return(
        <div className="UppOuterWrapper">

            <h1>Accessibility Settings</h1>

            <div className="UppFirstInnerWrapper">
                <h3>Please adjust the sliders below to update your accessibility settings</h3>
                <h4>Currently set to : "<strong>{globalUserDetails.accessibility.toString()}</strong>"</h4>

                <FormGroup className="sliderWrapper">
                    <FormControlLabel className="firstSlider" onChange={(e)=>sliderChange(e)} control={<Switch checked={sliderToggle} />} label="Accessibility Requirements" labelPlacement="start" />
                    <FormControlLabel onChange={(e)=>sliderChange(e)} control={<Switch checked={sliderToggle} />} label="Wheelchair Access" labelPlacement="start" />
                    <FormControlLabel onChange={(e)=>sliderChange(e)} control={<Switch checked={sliderToggle} />} label="Low Noise Area" labelPlacement="start" />
                    <FormControlLabel onChange={(e)=>sliderChange(e)} control={<Switch checked={sliderToggle} />} label="Close to Bathroom" labelPlacement="start" />
                    <FormControlLabel onChange={(e)=>sliderChange(e)} control={<Switch checked={sliderToggle} />} label="Larger Desktop Screen" labelPlacement="start" />
                    <FormControlLabel onChange={(e)=>sliderChange(e)} control={<Switch checked={sliderToggle} />} label="Screen Reader" labelPlacement="start" />
                </FormGroup>

            </div>
            

            <div className="UppSecondInnerWrapper">
                <h3>Back to your dashboard</h3>
                <Link to={"/dashboard"}>
                    <button className="UppDashboardButton">Back to dashboard</button>
                </Link>
            </div>





        </div>
    );
}

