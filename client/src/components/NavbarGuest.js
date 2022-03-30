import React from "react";
import "../stylings/NavbarGuest.css";
import Hero from "./Hero";


export default function NavbarGuest() {
	return (
		<>
			<div className="landingMainContainer">
				<div className="landingLogoContainer">
					<h1 className="landingTitle">Deskeando</h1>
					<p className="landingText">The ultimate desk building app</p>
				</div>
				<nav>
					<ul className="navUL">
						<li className="navList">
							<a className="navLink" href="#about">
								About
							</a>
						</li>
						<li className="navList">
							<a className="navLink" href="#conact">
								Contact
							</a>

						</li>
					</ul>
				</nav>
			</div>
			<Hero />
		</>
	);
}
