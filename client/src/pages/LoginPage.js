import React from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import "../stylings/SignUp.css";

export default function LoginPage(props){

    //  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
    let globalUserDetails = props.globalUserDetails;
    let setGlobalUserDetails = props.setGlobalUserDetails;
    console.log(globalUserDetails);
    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    return(
        <div>
            <SignIn globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}/>
            <SignUp globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}/>
        </div>
    );
}

