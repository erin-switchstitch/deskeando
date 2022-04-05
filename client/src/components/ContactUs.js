import React, { Fragment, useState, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com"; // Use this !!!!!!
// import emailjs from '@emailjs/browser'; // Don't use this !!!
import ".././stylings/contactUs.css";

const ContactUs = () => {
	const form = useRef();

	const handleOnSubmit = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_hdwmx9f",
				"template_w9rsf57",
				e.target,
				"jstrAHQnnT70CLM-z"
			)
			.then(
				(result) => {
					console.log("message sent");
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};

	return (
		<div className="ContactOuterWrapper">
			<h1>Get in touch</h1>

			<div className="ContactFirstInnerWrapper">
				<h4>Please fill out the form and we will be in touch.</h4>
				<form ref={form} onSubmit={handleOnSubmit}>
					<label> Name</label>
					<input type="text" name="user_name" />
					<label>Email</label>
					<input type="email" name="user_email" />
					<label>Message</label>
					<textarea name="message" />
					<input type="submit" value="Send" />
				</form>
			</div>

			<div className="ContactSecondInnerWrapper">
				<h3>Back to your dashboard</h3>
				<Link to={"/dashboard"}>
					<button className="ContactDashboardButton">Back to dashboard</button>
				</Link>
			</div>
		</div>
	);
};

export default ContactUs;
