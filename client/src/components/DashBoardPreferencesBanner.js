import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import AccessibilityLogo from "../images/accessibility2.png";

export default function DashBoardPreferencesBanner(props) {

    //  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
    let globalUserDetails = props.globalUserDetails;
    let setGlobalUserDetails = props.setGlobalUserDetails;
    console.log(globalUserDetails);

    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    return (
        <div className="DashboardComponentWrappers DpbOuterWrapper">
            <div className="DbpInnerWrapperLeft">
                <h4>Desk booking preferences</h4>
                <h5>Let us know if you have any accessibility needs and we'll make sure you get the right desk.</h5>
                <Link to={'/preferences'}>
                    <button>Set your preferences</button>
                </Link>
            </div>

            <div className="DbpInnerWrapperRight">
                <img src={AccessibilityLogo}/>
            </div>

        </div>
    );
}

