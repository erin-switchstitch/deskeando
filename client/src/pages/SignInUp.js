import React, { useState } from "react";
// import "../stylings/SignInUp.css";


function SignInUp(){


    return(
        <div>
            {/* Add the form for login here */}
            <div  className="SignIn">
                <h1>Sign In</h1>
            </div>
            {/* Add the form for registration here */}
            <div className="signUP">
                <h1>Sign Up</h1>
            </div>
        </div>
    );
}

export default SignInUp;