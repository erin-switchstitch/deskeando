import React, { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Header from "../components/Header";
// import AdminSignIn from "../components/AdminSignIn";
import NavbarGuest from "../components/NavbarGuest";
import Footer from "../components/Footer"
import "../stylings/SignUp.css";
import "../stylings/LoginPage.css";
import Hero from "../components/Hero";

export default function LoginPage(props){


    const [booleanSwitch, setBooleanSwitch] = useState(true)
    const [signInShow, setSignInShow] = useState("flex");
    const [signUpShow, setSignUpShow] = useState("none");

    //  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
    let globalUserDetails = props.globalUserDetails;
    let setGlobalUserDetails = props.setGlobalUserDetails;
    console.log(globalUserDetails);
    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    function loginInSingUpSwitch(){
        console.log(booleanSwitch);
        if (booleanSwitch) {
            setBooleanSwitch(false);

            setSignInShow("none")
            setSignUpShow("flex")
        } else {
            setBooleanSwitch(true);
            setSignInShow("flex")
            setSignUpShow("none")

        }
    }


    return (
			<div className="LoginPageOuterWrapper">
				{/* <NavbarGuest /> */}
				{/* <Header globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}/> */}


				<div className="LoginPageInnerWrapper">
					<Hero />
					<div className="LoginPageTextHeading">
						<h2>Welcome to Deskeando.</h2>
						<h3>The easy way to manage your working day.</h3>
					</div>
					
					<div className="LoginBannerWrapper">

						{(booleanSwitch == true) ? (
							<SignIn
								setBooleanSwitch={(data)=>setBooleanSwitch(data)}
								display={signInShow}
								globalUserDetails={globalUserDetails}
								setGlobalUserDetails={(data) => setGlobalUserDetails(data)}
							/>

						):(
							<div>
								<SignUp
								setBooleanSwitch={(data)=>setBooleanSwitch(data)}
								display={signUpShow}
								globalUserDetails={globalUserDetails}
								setGlobalUserDetails={(data) => setGlobalUserDetails(data)}
								/>
							</div>

						)}







						{/* <div className="SignUpContainer">
							<div className="accountRegisterText">
								{" "}
								<span>
									{booleanSwitch ? (
										"Do not have an account?" 
										
									):( 
										"Already registered?"
									)}
								</span>
								<button
									className="buttonSignup"
									type="button"
									onClick={loginInSingUpSwitch}
								>
									{booleanSwitch ? "Sign Up" : "Sign In"}
								</button>
							</div>
						</div> */}

					</div>
				</div>
			</div>
		);
}

