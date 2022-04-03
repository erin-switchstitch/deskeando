import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../stylings/SignInUp.css";
import "../stylings/AccessibilitySwitch.css";
import axios from "axios";

export default function SignUp(props) {
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

	const handleOnSubmit = async (event) => {
		event.preventDefault();

		// const testSymbols = /[!#$%.*&]/.test(password);
		// const testNumbers= /[0-9]/.test(password);
		// // const testUpperCase = /[A-Z]/.test(password);
		//  const testUpperCase = true;
		const actualAccessibilityValue = Boolean(state.accessibility);
		axios
			.put("http://localhost:3000/api/register", {
				email: state.email,
				last_name: state.lastName,
				first_name: state.firstName,
				password: state.password,
				accessibility: actualAccessibilityValue,
			})
			.then(function (response) {
				console.log(response);
				setGlobalUserDetails({
					user_id: response.data[0].id,
					first_name: response.data[0].first_name,
					last_name: response.data[0].last_name,
					email: response.data[0].email,
					accessibility: Boolean(response.data[0].accessibility),
				});
				console.log("globalusers deatils", globalUserDetails);
			})
			.catch(function (error) {
				console.log(error);
			});

		// const requestOptions = {
		//     method: "PUT",
		//     headers: { "Content-Type": "application/json" },
		//     body: JSON.stringify({ "email":state.email, "last_name":state.lastName, "first_name":state.firstName, "password":state.password, "accessibility": actualAccessibilityValue }),
		// };

		//  await fetch("http://localhost:3000/api/register",requestOptions)
		//              .then((response) => {
		//                  const responseJ = response.json();
		//                  console.log("response", response);
		//                  console.log("responseJ", responseJ);
		//              })
		//              .then((data) => {
		//                  console.log(data);
		//                  setGlobalUserDetails({
		//                      user_id: data.user_id,
		//                      first_name: state.firstName,
		//                      last_name: state.lastName,
		//                      email: state.email,
		//                      accessibility: state.accessibility,
		//                  });
		//                  setDashboardLink("inline");
		//                  setHideSubmitLink("none");

		//                  // This works to open dashboard but reloads the session as well so we loose user details
		//                  // One possibility is to Make a call to the api for the user id ...

		//                  // props.history.push('/dashboard')
		//              });

		console.log(state);
		const { firstName, lastName, email, password, confirmPassword } = state;

		// window.location.href = "/dashboard";

		if (
			firstName === "" ||
			lastName === "" ||
			email === "" ||
			password === "" ||
			confirmPassword === ""
		) {
			setErrorMsg("please fill all fields");
		} else if (!email.includes("@")) {
			setErrorMsg("Please enter a valid email");

			// } else if(!testSymbols || !testNumbers ||!testUpperCase){
			//    setErrorMsg("Your password should contain at lease a symbol, number and UpperCase letter");
		} else if (password !== confirmPassword) {
			setErrorMsg("Your passwords do not match!");
		} else {
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

	return (
		<div className="SignUpOuterWrapper">
			<form
				className="SignUpMainWrapper"
				// style={{ display: props.display }}
				onSubmit={handleOnSubmit}
			>
				<h1 className="formHeader">Sign Up</h1>
				<div className="signUpInputContainer">
					<span>{errorMsg}</span>
					<label>
						{/* <p className="formSubHeader">First Name:</p> */}
						<input
							type="text"
							className="form-control formInputField"
							name="name"
							value={state.firstName || ""}
							placeholder="First name"
							onChange={handleFirstNameChange}
						/>
					</label>
					<label className="formSubHeaderLName">
						{/* <p className="formSubHeader">Last Name:</p> */}
						<input
							type="text"
							className="form-control formInputField"
							name="name"
							value={state.lastName || ""}
							placeholder="Last name"
							onChange={handleLastNameChange}
						/>
					</label>
					<label>
						{/* <p className="formSubHeader">Email address:</p> */}
						<input
							type="email"
							name="email"
							className="form-control formInputField"
							required
							value={state.email || ""}
							placeholder="Email address"
							onChange={handleEmailChange}
						/>
					</label>
					<label>
						{/* <p className="formSubHeader">Password:</p> */}
						<input
							type="password"
							name="password"
							className="form-control formInputField"
							required
							value={state.password || ""}
							placeholder="Create a password"
							onChange={handlePasswordChange}
						/>
					</label>
					<label>
						<p className="formSubHeader">Confirm Password:</p>
						<input
							type="password"
							name="password"
							className="form-control formInputField"
							required
							value={state.confirmPassword || ""}
							placeholder="Enter password"
							onChange={handleConfirmPasswordChange}
						/>
					</label>

					<p className="formSubHeader">
						Do you have any <strong>accessibility </strong> needs?
					</p>

					<label class="switch switch-flat">
						<input class="switch-input" type="checkbox" />
						<span class="switch-label" data-on="Yes" data-off="No"></span>
						<span class="switch-handle"></span>
					</label>
					{/* <label className="switch switch-slide">
                            <input className="switch-input" type="checkbox" />
                            <span className="switch-label" data-on="Yes" data-off="No"></span> 
                            <span className="switch-handle"></span> */}
					{/* <input type="checkbox" onChange={handleAccessibilyChange} /> */}
					{/* </label> */}
					<div className="SignInSwitch">
						<h3>Already registered?</h3>
						<h4
							className="SignInSwitchLink"
							onClick={() => props.setBooleanSwitch(true)}
						>
							Sign In Now.
						</h4>
					</div>

					<div className="buttonContainer">
						{globalUserDetails.user_id < 1 ? (
							<>
								{console.log(true)}
								<button
									onClick={handleOnSubmit}
									className="signInButton"
									type="submit"
								>
									<h3>Sign Up</h3>
								</button>
							</>
						) : (
							<Link to={"/dashboard"}>
								<button className="signInButton">Go to dashboard</button>
							</Link>
						)}
					</div>
				</div>
			</form>
		</div>
	);
}
