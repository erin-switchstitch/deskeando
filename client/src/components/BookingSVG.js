// import { urlencoded } from "body-parser";
import leftDesk from "../images/left_desk.svg";
import rightDesk from "../images/right_desk.svg";
import leftDeskAccessible from "../images/left_desk_blue.svg";
import rightDeskAccessible from "../images/right_desk_blue.svg";
import leftDeskInaccessible from "../images/left_desk_inaccessible.svg";
import bookingsData from "./../data/bookings.json";
import deskData from "./../data/desks.json";
import { useState, useEffect } from "react";
import "../stylings/SVG.css";
import { Element } from "prop-types";
import couch from "../images/couch.svg";

function BookingSVG(props) {
	//  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
	let globalUserDetails = props.globalUserDetails;
	let setGlobalUserDetails = props.setGlobalUserDetails;
	console.log(globalUserDetails);
	//  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
	//  ↓↓↓↓↓↓↓ Global useState and setState for Current Booking Information ↓↓↓↓↓↓
	let globalBookingInfo = props.globalBookingInfo;
	let setGlobalBookingInfo = props.setGlobalBookingInfo;
	console.log(globalBookingInfo);
	//  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
	function handleSVGClick(event) {
		console.log("CLICK WORKING !!!!!!!!!!!!!!!!!");
		console.log(event.target.innerText);
		setGlobalBookingInfo({
			...globalBookingInfo,
			desk_id: parseInt(event.target.innerText),
		});
	}
	const [bookingsDataState, setBookingsDataState] = useState(bookingsData);
	const [desksDataState, setDesksDataState] = useState(deskData);
	// FETCH FOR BOOKINGS for the date selected:
	useEffect(() => {
		// GET request using fetch inside useEffect React hook
		fetch(
			`http://localhost:3100/api/bookings?date=${globalBookingInfo.date_booked}`,
			{ mode: "cors" }
		)
			.then((response) => response.json())
			.then((data) => {
				console.log("Bookings Data from API :");
				console.log(data);
				if (data.name != "error") {
					setBookingsDataState(data);
				} else {
					setBookingsDataState(bookingsData);
				}
			});
	}, [globalBookingInfo.date_booked]); // empty dependency array means this effect will only run once (like componentDidMount in classes)
	// FETCH FOR DESKS (all info on the desks):
	useEffect(() => {
		// GET request using fetch inside useEffect React hook
		fetch("http://localhost:3100/api/desks", { mode: "cors" })
			.then((response) => response.json())
			.then((data) => {
				// console.log("Desks Data from API :")
				// console.log(data);
				// setDesksDataState(data);

				if (data.name != "error") {
					setDesksDataState(data);
				} else {
					setDesksDataState(deskData);
				}
			});
	}, [bookingsDataState]); // empty dependency array means this effect will only run once (like componentDidMount in classes)
	// ------- Code to sort through desks data and create list of desks. Then goes through
	// list of bookings, and if the desk is booked then it updates list to reflect this. We are
	// using a state hook so it updates if the bookings data is updated  ----------------------
	let deskAndBookingList = [];
	let shortArray = bookingsDataState.map((element, index) => {
		console.log("SHORT ARRAY RUN .................");
		console.log(element);

		if (element.am == true && element.pm == true) {
			return element.desk_id;
		} else if (element.am == true && globalBookingInfo.am == true) {
			return element.desk_id;
		} else if (element.pm == true && globalBookingInfo.pm == true) {
			return element.desk_id;
		}
	});
	console.log(shortArray);
	const svgFormatting = [
		{
			groupNumber: 1,
			start: 1,
			end: 8,
			forward: true,
			individual_desks: [],
		},
		{
			groupNumber: 2,
			start: 9,
			end: 16,
			forward: true,
			individual_desks: [],
		},
		{
			groupNumber: 3,
			start: 17,
			end: 22,
			forward: false,
			individual_desks: [],
		},
		{
			groupNumber: 4,
			start: 23,
			end: 30,
			forward: true,
			individual_desks: [],
		},
		{
			groupNumber: 5,
			start: 41,
			end: 50,
			forward: false,
			individual_desks: [],
		},
		{
			groupNumber: 6,
			start: 31,
			end: 40,
			forward: false,
			individual_desks: [],
		},
	];
	// 1 , 2 , 3 , 4 .... 49 , 50
	desksDataState.forEach((element, index) => {
		const outer50index = index;
		const desk_number = element.id;
		console.log(element);
		svgFormatting.map((currentGroup, i) => {
			if (
				desk_number >= currentGroup.start &&
				desk_number <= currentGroup.end
			) {
				let tabIndex;
				let groupingLength = currentGroup.end - currentGroup.start + 1;
				let relativeDeskIndex = outer50index + 1 - currentGroup.start;
				let relativeDeskNumber = relativeDeskIndex + 1;
				let leftOrRight;
				if (currentGroup.forward) {
					tabIndex = relativeDeskIndex;
				} else {
					tabIndex = currentGroup.end - 1 - outer50index;
				}
				let finalNumber;
				if (relativeDeskIndex % 2 == 0) {
					leftOrRight = leftDesk;

					if (
						element.desk_features.accessibilty &&
						globalUserDetails.accessibility
					) {
						leftOrRight = leftDeskAccessible;
					}

					let startingPosition = groupingLength / 2 + 1;

					finalNumber =
						currentGroup.start - 1 + (startingPosition + relativeDeskIndex / 2);
				} else {
					leftOrRight = rightDesk;

					if (
						element.desk_features.accessibilty &&
						globalUserDetails.accessibility
					) {
						leftOrRight = rightDeskAccessible;
					}

					let startingPosition = groupingLength / 2 + (currentGroup.start - 1);

					finalNumber = startingPosition - (relativeDeskIndex - 1) / 2;
				}

				let desk_booked = "active";
				if (shortArray.includes(finalNumber)) {
					desk_booked = "inactive";
				}
				let passAccessibilityClass;
				if (element.desk_features.accessibilty) {
					passAccessibilityClass = "matchingAccessibility";
				}
				svgFormatting[currentGroup.groupNumber - 1].individual_desks.push({
					desk_id: finalNumber,
					grouping: currentGroup.groupNumber,
					group_length: groupingLength,
					relativeOrder: relativeDeskNumber,
					tabIndex: tabIndex,
					leftOrRight: leftOrRight,
					start: currentGroup.start,
					end: currentGroup.end,
					desk_accessibility: passAccessibilityClass,
					desk_booked: desk_booked,
				});
			}
		});
	});
	function compare(a, b) {
		if (a.grouping < b.grouping) {
			return -1;
		}
		if (a.grouping > b.grouping) {
			return 1;
		}
		return 0;
	}
	deskAndBookingList.sort(compare);
	console.log(svgFormatting);
	return (
		<div className="BookingSvgWrapper">
			<h3>4. Choose Your desk</h3>

			<div className="SvgKeyWrapper">
				{globalUserDetails.accessibility == true ? (
					<div>
						<div className="SvgKey">
							<h4>Accessible and Available Desk</h4>
							<img src={leftDeskAccessible} />
						</div>
						<div className="SvgKey">
							<h4>Inaccessible but Available Desk</h4>
							<img src={leftDesk} />
						</div>
						<div className="SvgKey">
							<h4>Unavailable Desk</h4>
							<img src={leftDeskInaccessible} />
						</div>
					</div>
				) : (
					<div>
						<div className="SvgKey">
							<h4>Available Desk</h4>
							<img src={leftDesk} />
						</div>
						<div className="SvgKey">
							<h4>Unavailable Desk</h4>
							<img src={leftDeskInaccessible} />
						</div>
					</div>
				)}
			</div>

			<div className="outer-svg-wrapper">
				<div className="inner-svg-wrapper">
					<div className="svg-wrapper">
						<div className="kitchen">
							<span>Kitchen</span>
						</div>
						<div className="floor-plan">
							{svgFormatting.map((elem, index) => {
								let extraClasses;
								if (elem.groupNumber == 4) {
									extraClasses = "tablist";
								}
								return (
									<div
										className={`desks-${elem.start}-to-${elem.end} desk-space`}
										role={extraClasses}
									>
										{elem.individual_desks.map((element, index) => {
											return (
												<div
													onClick={(e) => handleSVGClick(e)}
													key={index}
													onKeyDown={(e) => handleSVGClick(e)}
													role="tab"
													tabIndex={index}
													style={{
														backgroundImage: `url(${element.leftOrRight})`,
													}}
													className={
														element.desk_id == globalBookingInfo.desk_id
															? `selectedDesk desk ${element.leftOrRight} ${element.desk_booked} ${element.desk_accessibility}`
															: `desk ${element.leftOrRight} ${element.desk_booked} ${element.desk_accessibility}`
													}
												>
													<span>{element.desk_id}</span>
												</div>
											);
										})}
									</div>
								);
							})}
						</div>
						<div
							className="couch"
							style={{ backgroundImage: `url(${couch})` }}
						></div>
						<div className="common-table">
							<span>Common Table</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BookingSVG;
