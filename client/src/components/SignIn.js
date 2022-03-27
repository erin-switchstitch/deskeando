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
		<div style={{display:props.display}}>
			<h1>Sign In</h1>


			<form onSubmit={submitHandle}>
				<label>
					<p>Email</p>
					<input
						type="text"
						required
						value={email}
						onChange={handleNameChange}
						placeholder="Enter email address"
						maxLength="20"
						minLength="6"
					/>
				</label>
				<label>
					<p>Password</p>
					<input
						type="text"
						required
						value={password}
						onChange={handlePasswordChange}
						placeholder="Enter password"
						maxLength="10"
						minLength="6"
					/>
				</label>
				<button type="submit" style={{display:hideSubmitLink}}>Sign In</button>
				<span style={{display:hideSubmitLink}}>{errorMsg}</span>
				
				<Link to={'/dashboard'} style={{display:dashboardLink}}>
                	<button>Go to dashboard</button>
            	</Link>
			</form>
		</div>
	);
}