import React from "react";
import "../stylings/SignUp.css";
import SignUp from "../components/SignUp";

export function SignInUp(){

    return(
        <div>
            {/* Add the form for login here */}
            <div  className="SignIn">
                <h1>Sign In</h1>
            </div>
            {/* Add the form for registration here */}
            <div className="signUP">
                <h1>Sign Up</h1>
                <SignUp />
            </div>
        </div>
    );
}

export default SignInUp;