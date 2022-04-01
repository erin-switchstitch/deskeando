import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import "../stylings/Header.css";
import AdminSignIn from "./AdminSignIn";
import Logo from "../images/logo6.png";
import Hamburger from "../images/hamburger.svg";


const Header = (props)=> {
    const [display,setDisplay] = useState(false);
    //  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
    let globalUserDetails = props.globalUserDetails;
    let setGlobalUserDetails = props.setGlobalUserDetails;
    console.log(globalUserDetails);
    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    // var Logo = require('../images/logo.png');
    // console.log(Logo)

    return (

		// <>
		// 	<div className="headerOuterWrapper">
		// 		<div className="headerLogoWrapper">
		// 			{/* <h1 className="headerTitle">Deskeando</h1> */}
        //             <img className="headerLogo" src={Logo} alt="Deskeando Logo"/>
		// 		</div>
		// 		<nav className="navLinkWrapper">
		// 			<ul className="navUL">

        //             {(globalUserDetails.user_id == "") ? (

        //                 <>
        //                      <li className="navList">
        //                         <Link to={'/about'}>
        //                             <a className="navLink">About</a>
        //                             {/* <AdminSignIn
		// 					            globalUserDetails={globalUserDetails}
		// 					            setGlobalUserDetails={(data) => setGlobalUserDetails(data)}
		// 				            /> */}
        //                         </Link>
        //                     </li>

        //                     <li className="navList">
        //                         <Link to={'/contact'}>
        //                             <a className="navLink">Contact</a>
        //                         </Link>
        //                     </li>
        //             </>

		// 	            <>
				<div className="landingMainContainer">
					<div className="landingLogoContainer">
						<h1 className="landingTitle">Deskeando</h1>
						<p className="landingText">The ultimate desk building app</p>
					</div>
					<nav className={display ? "display" : ""}>
						<ul className="navUL">
							{globalUserDetails.user_id == "" ? (
								<>
									<li className="navList">
										<Link to={"/about"}>
											<a className="navLink">About</a>
										</Link>
									</li>


									<li className="navList">
										<Link to={"/contactUs"}>
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
										<Link to={"/contactUs"}>
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
											<button onClick={() => {
window.location.href="http://localhost:3000";
}} className="navLink">LogOut</button>
										</Link>
									</li>
								</>
							)}
						</ul>
					</nav>
                    <img src={Hamburger} onClick={() => setDisplay(!display)} className="menu-icon" alt="Menu" />
				</div>
			// </>
		);
};

export default Header;