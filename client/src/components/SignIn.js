import { ClassNames } from "@emotion/react";
import React from "react";
import { useState } from "react";
// import { useForm } from "react-hook-form";
import "../stylings/SignIn.css";


export default function SignIn() {
  
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
		<>
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
				<button type="submit">Sign In</button>
			</form>
		</>
	);
}