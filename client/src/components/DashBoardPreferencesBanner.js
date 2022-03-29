import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import UserPreferencesPage from "../pages/UserPreferencesPage";

export default function DashBoardPreferencesBanner(props) {

    //  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
    let globalUserDetails = props.globalUserDetails;
    let setGlobalUserDetails = props.setGlobalUserDetails;
    console.log(globalUserDetails);

    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    return (
        <div className="DashboardComponentWrappers">
            <h2>Desk booking preferences</h2>
            <h3>Let us know if you have any accessibility needs and we'll make sure you get the right desk.</h3>
            <h2>Current Accessibility Settings : {globalUserDetails.accessibility.toString()}</h2>
            
            <Link to={'/preferences'}>
                <button>Set your preferences</button>
            </Link>
        </div>
    );
}
''
