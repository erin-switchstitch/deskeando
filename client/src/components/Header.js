import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

const Header = (props)=> {
    
    //  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
    let globalUserDetails = props.globalUserDetails;
    let setGlobalUserDetails = props.setGlobalUserDetails;
    console.log(globalUserDetails);
    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
    
    return (

			<>
				<div className="landingMainContainer">
					<div className="landingLogoContainer">
						<h1 className="landingTitle">Deskeando</h1>
						<p className="landingText">The ultimate desk building app</p>
					</div>
					<nav>
						<ul className="navUL">
							{globalUserDetails.user_id == "" ? (
								<>
									<li className="navList">
										<Link to={"/about"}>
											<a className="navLink">About</a>
										</Link>
									</li>


									<li className="navList">
										<Link to={"/contact"}>
											<a className="navLink">Contact</a>
										</Link>
									</li>
									<li className="navList">
										<Link to={"/confirm"}>
											<a className="navLink">Confirmation</a>
										</Link>
									</li>
									<li className="navList">
										<Link to={"/"}>
											<a className="navLink">Login</a>
										</Link>
									</li>
								</>
							) : (
								<>
									<li className="navList">
										<Link to={"/dashboard"}>
											<a className="navLink">Dashboard</a>
										</Link>
									</li>
									<li className="navList">
										<Link to={"/booking"}>
											<a className="navLink">Make A Booking</a>
										</Link>
									</li>
									<li className="navList">
										<Link to={"/about"}>
											<a className="navLink">About</a>
										</Link>
									</li>

									<li className="navList">
										<Link to={"/contact"}>
											<a className="navLink">Contact</a>
										</Link>
									</li>
									<li className="navList">
										<Link to={"/confirm"}>
											<a className="navLink">Confirmation</a>
										</Link>
									</li>
									<li className="navList">
										<Link to={"/"}>
											<a className="navLink">LogOut</a>
										</Link>
									</li>
								</>
							)}
						</ul>
					</nav>
				</div>
			</>
		);
};

export default Header;