import { ClassNames } from "@emotion/react";
import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
// import { useForm } from "react-hook-form";
import "../stylings/SignIn.css";


export default function SignIn(props) {
	//  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
    let globalUserDetails = props.globalUserDetails;
    let setGlobalUserDetails = props.setGlobalUserDetails;
    console.log(globalUserDetails);

    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

  	const [errorMsg, setErrorMsg] = useState("");

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [dashboardLink, setDashboardLink] = useState("none");
    const [hideSubmitLink, setHideSubmitLink] = useState("inline");

	const handleNameChange = (e) => {
		setEmail(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};
	const submitHandle = (e) => {
		e.preventDefault();
		const credentials = {
			email: email,
			password: password,
		};
		console.log(credentials, "Form credentials - ");
		fetch("/api/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ credentials: credentials }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data[0]);
				if (data.length > 0){
					setGlobalUserDetails({ user_id : data[0].id, first_name : data[0].first_name, last_name : data[0].last_name, email : email, accessibility : data[0].accessibility})
					setErrorMsg("Sign in successful");
					setDashboardLink("inline")
                	setHideSubmitLink("none");
				} else {
					setErrorMsg("Your username and/or password is incorrect!");
				}
			});
	};


	console.log(email, password);
	return (
		<div className="container">
			<div style={{ display: props.display }} className="formContainer">
				<form onSubmit={submitHandle} className="formSignIn">
					<h3 className="formHeader">Sign In</h3>
					<div className="inputContainer">
						<label className="formLabelEmail">
							<p className="formSubHeader">Email:</p>

							<input
								className="formInputField"
								type="text"
								required
								value={email}
								onChange={handleNameChange}
								placeholder="Enter email address"
								maxLength="20"
								minLength="6"
							/>
						</label>
						<label className="formLabelPassword">
							<p className="formSubHeader">Password:</p>
							<input
								className="formInputField"
								type="text"
								required
								value={password}
								onChange={handlePasswordChange}
								placeholder="Enter password"
								maxLength="10"
								minLength="6"
							/>
						</label>
					</div>
					<div className="buttonContainer">

					<button
						type="submit"
						className="signInButton"
						style={{ display: hideSubmitLink }}
					>
						Sign In
					</button>
					<span style={{ display: hideSubmitLink }}>{errorMsg}</span>

					<Link to={"/dashboard"} style={{ display: dashboardLink }}>
						<button>Go to dashboard</button>
						</Link>
						</div>
				</form>
			</div>
		</div>
	);
}