import React from "react";
import SignIn from "../components/SignIn";


function SignInUp(){


    return(
        <div>
            {/* Add the form for login here */}
            <div  className="SignIn">
            </div>
            {/* Add the form for registration here */}
            <div className="signUP">
                <SignIn />
            </div>
        </div>
    );
}

export default SignInUp;