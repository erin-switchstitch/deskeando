import React, { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import AdminSignIn from "../components/AdminSignIn";
import NavbarGuest from "../components/NavbarGuest";
import "../stylings/SignUp.css";
import "../stylings/LoginPage.css";

export default function LoginPage(props){

    const [booleanSwitch, setBooleanSwitch] = useState(true)
    const [signInShow, setSignInShow] = useState("inline");
    const [signUpShow, setSignUpShow] = useState("none");

    //  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
    let globalUserDetails = props.globalUserDetails;
    let setGlobalUserDetails = props.setGlobalUserDetails;
    console.log(globalUserDetails);
    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    function loginInSingUpSwitch(){
        console.log(booleanSwitch)
        if (booleanSwitch) {
            setBooleanSwitch(false);
            setSignInShow("none")
            setSignUpShow("inline")
        } else {
            setBooleanSwitch(true);
            setSignInShow("inline")
            setSignUpShow("none")
        }
    }


    return (
			<div>
				<NavbarGuest />
				<AdminSignIn
					globalUserDetails={globalUserDetails}
					setGlobalUserDetails={(data) => setGlobalUserDetails(data)}
				/>
				<SignIn
					display={signInShow}
					globalUserDetails={globalUserDetails}
					setGlobalUserDetails={(data) => setGlobalUserDetails(data)}
				/>
				<SignUp
					display={signUpShow}
					globalUserDetails={globalUserDetails}
					setGlobalUserDetails={(data) => setGlobalUserDetails(data)}
				/>
				<div className="SignUpContainer">
					<div className="accountRegisterText">
						{" "}
						<span>
							{signInShow ? "Do not have an account?" : "Already registered?"}
						</span>
						&nbsp;
						<button
							className="buttonSignup"
							type="button"
							onClick={loginInSingUpSwitch}
						>
							{booleanSwitch ? "Sign Up" : "Sign In"}
						</button>
					</div>
				</div>
			</div>
		);
}

