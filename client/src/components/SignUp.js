import React, { useState } from "react";
export default function SignUp(){
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
            setErrorMsg("Everthing is correct");

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


// import React, { useState } from "react";
// import "../stylings/SignInUp.css";


// // function SignInUp(){
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//  const [password, setPassword] = useState("");
//  const [confirmPassword, setconfirmPassword] = useState("");
// const [emailErr, setEmailErr] = useState(false);
// const [pwdError, setPwdError] = useState(false);

//     const validate =() => {
//         const regex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

//         // const emailRegex = /\S+@\S+\.\S+/;

//         if (!values.name ){
//         errors.username = Name is required!;//full name must be 5 character long
//         }
//         if (!values.email){
//         errors.username =“Email is required!”;//emaill is not valid
//         }
//         if (!values.password){
//         errors.username =Password is required!”;//password must be 8 characters long
//         }

//     return(
//         // <div>
//         //     {/* Add the form for login here */}
//         //     <div  className="SignIn">
//         //         <h1>Sign In</h1>
//         //     </div>
//         //     {/* Add the form for registration here */}
//       <div>
//             <form>
//                 <h2>Register-Create Account </h2>
//         <form onSubmit={} noValidate >
//                 <input
//             type="FullName"
//             placeholder="FullName"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//          />
// <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//          />
//          <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//          />
//          <div className="info">
//               <small>Password must be eight characters in length.</small>
//             </div>
//          <button onClick={validate} className="btn" type="submit">
//               Submit
//               </button>
//               </form>
// </div>
// </div>
//     );

// export default SignInUp;
