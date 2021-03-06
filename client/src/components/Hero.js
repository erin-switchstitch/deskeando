import React from "react";
import ".././stylings/Hero.css";
import heroImage from ".././images/hero_image.jpg";

export default function Hero(props) {
	return (
		<div className="HeroContainer">
			<div className="HeroContainerAboutPage"></div>
			<img
				src={heroImage}
				alt="Office chairs next to desks"
				className="HeroImage HeroImageAboutPage"
			/>
			<div
				style={{ display: `${props.display}` }}
				className="LoginPageTextHeading"
			>
				<h2>Welcome to Deskeando</h2>
				<h3>The easy way to manage your working day</h3>
			</div>
		</div>
	);
}
