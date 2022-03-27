import { ClassNames } from "@emotion/react";
import React from "react";
import { useState } from "react";
// import { useForm } from "react-hook-form";
import "../stylings/SignIn.css";


export default function SignIn(props) {
	//  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
    let globalUserDetails = props.globalUserDetails;
    let setGlobalUserDetails = props.setGlobalUserDetails;
    console.log(globalUserDetails);

    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
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
			.then((data) => console.log(data));
	};


	console.log(email, password);
	return (
		<div className="formContainer">
			<form className="formSignIn" onSubmit={submitHandle}>
				<h1 className="formHeader">Sign In</h1>
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
				<button className="appButton" type="submit">Sign In</button>
			</form>
		</div>
	);
}