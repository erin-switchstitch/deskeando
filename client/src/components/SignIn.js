import React from "react";
import { useForm } from "react-hook-form";
import "../stylings/SignIn.css";

export default function SignIn(props) {

	//  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
    let globalUserDetails = props.globalUserDetails;
    let setGlobalUserDetails = props.setGlobalUserDetails;
    console.log(globalUserDetails);

    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
			alert(JSON.stringify(data));
		};
    return (
			<>
				<h1>Sign In</h1>
				<form onSubmit={(e) => e.preventDefault()}>
					<label>
						<div>Email:</div>
						<input
							{...register("email", {
								required: true,
								maxLength: 30,
								minLength: 10,
								pattern:
									/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							})}
						/>
						{errors?.email?.type === "required" && (
							<p>This field is required</p>
						)}
						{errors?.email?.type === "maxLength" && (
							<p>Please enter a vaild email address</p>
						)}
						{errors?.email?.type === "minLength" && (
							<p>Please enter a vaild email address</p>
						)}
						{errors?.email?.type === "pattern" && (
							<p>Please enter a vaild email address</p>
						)}
					</label>
					<label>
						<div>Password:</div>
						<input
							{...register("password", {
								required: true,
								minLength: 8,
							})}
						/>
						{errors?.password?.type === "required" && (
							<p>This field is required</p>
						)}
						{errors?.password?.type === "minLength" && (
							<p>Please enter a vaild password</p>
						)}
					</label>
					<button type="submit" onClick={handleSubmit(onSubmit)}>
						Submit
					</button>
				</form>
			</>
		);
}

