import React from "react";
import "../../src/stylings/Hero.css";
import heroImage from "../images/heroImage.jpg";

export default function Hero() {
    return (
			<div className="HeroContainer">
				<img src={heroImage} alt="huh" />
			</div>
		);
}

