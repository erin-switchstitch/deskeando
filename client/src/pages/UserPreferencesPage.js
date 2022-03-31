import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

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
        <div>
            {/* <Header globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}/> */}
            <h1>Accessibility Settings</h1>
            <h3>Please adjust the options below to update your accessibility settings for your user profile</h3>
            <h3>Currently your accessibility Requirements are set to "{globalUserDetails.accessibility.toString()}"</h3>
            {/* <button onClick={()=>setGlobalUserDetails({...globalUserDetails, accessibility : true})}> Accessibility = true</button>
            <button onClick={()=>setGlobalUserDetails({...globalUserDetails, accessibility : false})}>Accessibility = false</button> */}

            <FormGroup>
                    <FormControlLabel onChange={(e)=>sliderChange(e)} control={<Switch checked={sliderToggle} />} label="Accessibility Requirements" labelPlacement="start" />
                    <FormControlLabel onChange={(e)=>sliderChange(e)} control={<Switch checked={sliderToggle} />} label="Wheelchair Access" labelPlacement="start" />
                    <FormControlLabel onChange={(e)=>sliderChange(e)} control={<Switch checked={sliderToggle} />} label="Low Noise Area" labelPlacement="start" />
                    <FormControlLabel onChange={(e)=>sliderChange(e)} control={<Switch checked={sliderToggle} />} label="Close to Bathroom" labelPlacement="start" />
                    <FormControlLabel onChange={(e)=>sliderChange(e)} control={<Switch checked={sliderToggle} />} label="Larger Desktop Screen" labelPlacement="start" />
                    <FormControlLabel onChange={(e)=>sliderChange(e)} control={<Switch checked={sliderToggle} />} label="Screen Reader" labelPlacement="start" />
            </FormGroup>




            <Link to={"/dashboard"}>
                <button>Back to dashboard</button>
            </Link>
        </div>
    );
}

