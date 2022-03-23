import React from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import "../stylings/SignUp.css";

export default function LoginPage(){

    return(
        <div>
            <SignIn />
            <SignUp />
        </div>

    );
}

