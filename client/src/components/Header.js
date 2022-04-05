import React, { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import "../stylings/Header.css";
import Hamburger from "../images/hamburger.svg";
import useWindowDimensions from "./useWindowDimensions";

const Header = (props) => {
	const [display, setDisplay] = useState(false);
	//  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
	let globalUserDetails = props.globalUserDetails;
	let setGlobalUserDetails = props.setGlobalUserDetails;
	console.log(globalUserDetails);
	//  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

	// AMANDA !!!!
	// You can use the variables below to pull the broswers current height/width ....
	// May be useful for triggering the hamburger menu button showing if the screen
	// is too small to accomidate the links
	const { height, width } = useWindowDimensions();



	useEffect(() => {
			if (width > 1100){
				setDisplay("");
			}
   	}, [width]);

	return (
		<div className="headerOuterWrapper">
			<div className="headerLogoWrapper">
				<h1 className="headerTitle">Deskeando</h1>
				<span className="slogan">The Ultimate Desk Booking App</span>
			</div>

			<nav className={display ? "display" : ""}>
				<ul className="navUL">
					{globalUserDetails.user_id == "" ? (
						<div className="navLinkWrapper">
							<li className="navList">
								<Link to={"/about"} onClick={() => setDisplay("")}>
									<a className="navLink">About</a>
								</Link>
							</li>

							<li className="navList" onClick={() => setDisplay("")}>
								<Link to={"/contactUs"}>
									<a className="navLink">Contact</a>
								</Link>
							</li>
							<li className="navList" onClick={() => setDisplay("")}>
								<Link to={"/"}>
									<a className="navLink">Login</a>
								</Link>
							</li>
						</div>
					) : (
						<div className="navLinkWrapperWide">
							<li className="navList">
								<Link to={"/dashboard"}  onClick={() => setDisplay("")}>
									<a className="navLink">Dashboard</a>
								</Link>
							</li>
							<li className="navList"  onClick={() => setDisplay("")}>
								<Link to={"/booking"}>
									<a className="navLink">Make A Booking</a>
								</Link>
							</li>
							<li className="navList"  onClick={() => setDisplay("")}>
								<Link to={"/about"}>
									<a className="navLink">About</a>
								</Link>
							</li>

							<li className="navList"  onClick={() => setDisplay("")}>
								<Link to={"/contactUs"}>
									<a className="navLink">Contact</a>
								</Link>
							</li>
							<li className="navList"  onClick={() => setDisplay("")}>
								<Link to={"/"}>
									<button
										onClick={() => {
											window.location.href = "/";
										}}
										className="navLinkLogoutButton"
									>
										Logout
									</button>
								</Link>
							</li>
						</div>
					)}
				</ul>
			</nav>
			<img
				src={Hamburger}
				onClick={() => setDisplay(!display)}
				className="menu-icon"
				alt="Menu"
			/>
		</div>
		// </>
	);
};

export default Header;
