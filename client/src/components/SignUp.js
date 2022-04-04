import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../stylings/SignInUp.css";
import "../stylings/AccessibilitySwitch.css";
import axios from "axios";

export default function SignUp(props) {
	console.log("------ SignUp run !!!!!")
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

	const handleOnSubmit = (event) => {
		event.preventDefault();
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
			})
			.catch(function (error) {
				console.log(error);
			});
			setHideSubmitLink("none");
			console.log(hideSubmitLink);
		};
		

	return (
		<div className="SignUpOuterWrapper">
			<form
				className="SignUpMainWrapper"
				// style={{ display: props.display }}
				onSubmit={(e)=>handleOnSubmit(e)}
			>
				<h1 style={{ display:`${hideSubmitLink}` }} className="formHeader">Sign Up</h1>

				<div className="signUpInputContainer">
					<span>{errorMsg}</span>
					<label style={{ display:`${hideSubmitLink}` }}>
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
					<label style={{ display:`${hideSubmitLink}` }} className="formSubHeaderLName">
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
					<label style={{ display:`${hideSubmitLink}` }}>
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
					<label style={{ display:`${hideSubmitLink}` }}>
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
					<label style={{ display:`${hideSubmitLink}` }}>
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

					<p style={{ display:`${hideSubmitLink}` }} className="formSubHeader">
						Do you have any <strong>accessibility </strong> needs?
					</p>

					<label style={{ display:`${hideSubmitLink}` }} className="switch switch-flat">
						<input className="switch-input" type="checkbox" />
						<span className="switch-label" data-on="Yes" data-off="No"></span>
						<span className="switch-handle"></span>
					</label>
					{/* <label className="switch switch-slide">
                            <input className="switch-input" type="checkbox" />
                            <span className="switch-label" data-on="Yes" data-off="No"></span>
                            <span className="switch-handle"></span> */}
					{/* <input type="checkbox" onChange={handleAccessibilyChange} /> */}
					{/* </label> */}
					<div style={{ display:`${hideSubmitLink}` }} className="SignInSwitch">
						<h3>Already registered?</h3>
						<h4
							className="SignInSwitchLink"
							onClick={() => props.setBooleanSwitch(true)}
						>
							Sign In Now.
						</h4>
					</div>

					<div className="buttonContainer">
						{(globalUserDetails.user_id <= 0) ? (
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
