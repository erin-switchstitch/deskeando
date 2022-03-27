import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../stylings/SignInUp.css";


export default function SignUp(props){

    //  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
    let globalUserDetails = props.globalUserDetails;
    let setGlobalUserDetails = props.setGlobalUserDetails;
    console.log(globalUserDetails);
    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    const [errorMsg, setErrorMsg] = useState("");
    console.log(errorMsg);

    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        accessibility: false,
    });


    const handleFirstNameChange = (e) => {
        setState({
            ...state,
            firstName: e.target.value,
        });
    };
    const handleLastNameChange = (e) => {
        setState({
            ...state,
            lastName: e.target.value,
        });
    };
    const handleEmailChange = (e) => {
        setState({
            ...state,
            email: e.target.value,
        });
    };
    const handlePasswordChange = (e) => {
        setState({
            ...state,
            password: e.target.value,
        });
    };
    const handleConfirmPasswordChange = (e) => {
        setState({
            ...state,
            confirmPassword: e.target.value,
        });
    };
    const handleAccessibilyChange = (e) => {
        setState({
            ...state,
            accessibility: e.target.checked,
        });
    };

    const [dashboardLink, setDashboardLink] = useState("none");
    const [hideSubmitLink, setHideSubmitLink] = useState("inline");

    const handleOnSubmit =  async (event) => {
        event.preventDefault();

        // const testSymbols = /[!#$%.*&]/.test(password);
        // const testNumbers= /[0-9]/.test(password);
        // // const testUpperCase = /[A-Z]/.test(password);
        //  const testUpperCase = true;
        const actualAccessibilityValue = Boolean(state.accessibility);

        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "email":state.email, "last_name":state.lastName, "first_name":state.firstName, "password":state.password, "accessibility": actualAccessibilityValue }),
        };

        fetch("http://localhost:3000/api/register", requestOptions)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (200){
                setGlobalUserDetails({ user_id : data[0].id, first_name : state.firstName, last_name : state.lastName, email : state.email, accessibility : state.accessibility})
                setDashboardLink("inline")
                setHideSubmitLink("none");
                // This works to open dashboard but reloads the session as well so we loose user details
                // One possibility is to Make a call to the api for the user id ...

                // props.history.push('/dashboard')
            }
        });

        console.log(state);
        const { firstName, lastName, email, password , confirmPassword } = state;
        
        // window.location.href = "/dashboard";

        if (firstName === "" || lastName === ""  || email === ""|| password === "" || confirmPassword === "" ) {
            setErrorMsg("please fill all fields");

        } else if(!email.includes("@")){
            setErrorMsg("Please enter a valid email");

        // } else if(!testSymbols || !testNumbers ||!testUpperCase){
        //    setErrorMsg("Your password should contain at lease a symbol, number and UpperCase letter");

        } else if (password !== confirmPassword ) {
            setErrorMsg("Your passwords do not match!");
        }else{
            setErrorMsg("Everything is correct");



            // setGlobalUserDetails({ user_id : 5, first_name : state.firstName, last_name : state.lastName, email : state.email, accessibility : state.accessibility})
            
            // Here we would send our fetch request to the API to check these details against existing user accounts, and if
            // everything is okay, then create a new user profile in the database. After that the API would send back a successful
            // code as well as the unique_ID (and potentially all of the user details)
             
            // Note for Amanda :
            // Within the fetch request (PUT) we will send all of these user details
            // Then if there is a successful response from the API, then we will run setGlobalUserDetails(...) with the user details 
            // from this component formatted into the correct formatting for globalUserDetails
        // window.location.href = "http://localhost:3000/dashboard";
        }
    };


    return(
        <form style={{display:props.display}} onSubmit={handleOnSubmit}>
            <h3>Sign Up</h3>
            <span>{errorMsg}</span>
                <label>First Name
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={state.firstName || ""}
                    placeholder="Name"
                    onChange={handleFirstNameChange} />
                    </label>
                    <label>Last Name
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={state.lastName || ""}
                    placeholder="Name"
                    onChange={handleLastNameChange} />
                    </label>
                <label>Email address
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    required value={state.email || ""}
                    placeholder="Enter email"
                    onChange={handleEmailChange} />
                 </label>
                <label>Password
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    required
                    value={state.password || ""}
                    placeholder="Enter password"
                    onChange={handlePasswordChange} />
            </label>
                <label>Confirm-Password
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    required
                    value={state.confirmPassword || ""}
                    placeholder="Enter password"
                    onChange={handleConfirmPasswordChange} />
          </label>
          <label>
           Do you have any <strong>accessibility </strong> needs?
            <input
            type="checkbox"
            onChange={handleAccessibilyChange} />

            </label>
            <button onClick={handleOnSubmit} type="submit" className="" style={{display:hideSubmitLink}}>Sign Up</button>
            
            <Link to={'/dashboard'} style={{display:dashboardLink}}>
                <button>Go to dashboard</button>
            </Link>
        </form>
    );
}
