import React, { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import "../stylings/SignUp.css";

export default function LoginPage(props){
    const [login, setLogin] = useState(true);

    //  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
    let globalUserDetails = props.globalUserDetails;
    let setGlobalUserDetails = props.setGlobalUserDetails;
    console.log(globalUserDetails);
    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    function loginInSingUpSwitch(){
        setLogin(!login);
        console.log(login);
    }

    return(
        <div>
            <SignIn display={login} globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)} />
            <SignUp display={login} globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)} />
            <div>
                <div> <span>{login ? "Do not have an account?" : "Already registered?"}</span>&nbsp;
                    <button type="button" onClick={loginInSingUpSwitch}>{ login ? "Sign Up" : "Sign In"}</button>
                </div>
            </div>
        </div>

    );
}

