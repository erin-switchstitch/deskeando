import React from "react";
import { useState, useEffect } from "react";


export default function DashBoardPreferencesBanner(props) {

    return (
        <div className="DashboardComponentWrappers">
            <h2>Desk booking preferences</h2>
            <h3>Let us know if you have any accessability needs and we'll make sure you get the right desk.</h3>
            <button>Set your preferences</button>
        </div>
    );
}

