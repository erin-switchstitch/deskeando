import React, { useState } from "react";

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
        accessibility: "",
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
    const handleOnSubmit =  (event) => {
        event.preventDefault();
        const testSymbols = /[!#$%.*&]/.test(password);
        const testNumbers= /[0-9]/.test(password);
        // const testUpperCase = /[A-Z]/.test(password);
        const testUpperCase = true;

        console.log(state);
        const { firstName,lastName, email, password ,confirmPassword, accessibility } = state;
        console.log("gggg",state);

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
            // Here we would send our fetch request to the API to check these details against existing user accounts, and if
            // everything is okay, then create a new user profile in the database. After that the API would send back a successful
            // code as well as the unique_ID (and potentially all of the user details) 

            // Note for Amanda :
            // Within the fetch request (PUT) we will send all of these user details
            // Then if there is a successful response from the API, then we will run setGlobalUserDetails(...) with the user details 
            // from this component formatted into the correct formatting for globalUserDetails
          }
    };


    return (

        <form onSubmit={handleOnSubmit}>
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
            <button onClick={handleOnSubmit} type="submit" className="">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="signIn">sign in?</a>
            </p>
        </form>
    );
}
