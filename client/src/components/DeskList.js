import DeskListBooker from "./DeskListBooker";
import bookingsData from "./../data/bookings.json";
import deskData from "./../data/desks.json";
import "./../stylings/DeskList.css";
import { useState, useEffect } from "react";


export default function DeskList(props){
    
    //  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
    let globalUserDetails = props.globalUserDetails;
    let setGlobalUserDetails = props.setGlobalUserDetails;
    console.log(globalUserDetails);
    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    //  ↓↓↓ Parent component useState and setState for currently selected date ↓↓↓ 
    let selectedDateParent = props.selectedDateParent;
    // let selectedDateParent="2022-03-13";
    // if (!selectedDateParent){
    //     selectedDateParent="2022-03-13";
    // }
    let setSelectedDateParent = props.setSelectedDateParent;

    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑


    //  ↓↓↓↓↓↓↓ Global useState and setState for Current Booking Information ↓↓↓↓↓↓
	let globalBookingInfo = props.globalBookingInfo;
   let setGlobalBookingInfo = props.setGlobalBookingInfo;
   console.log(globalBookingInfo);
   //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    

    const [ bookingsDataState, setBookingsDataState] = useState(bookingsData);
    const [ desksDataState, setDesksDataState] = useState(deskData);


    // FETCH FOR BOOKINGS for the date selected:
    useEffect(() => {
    // GET request using fetch inside useEffect React hook
        fetch(`http://localhost:3100/api/bookings?date=${globalBookingInfo.date_booked}`, {mode: 'cors'})
            .then(response => response.json())
            .then(data => {
                console.log("Bookings Data from API :")
                console.log(data);

                if (data.name != "error"){
                    setBookingsDataState(data);
                } else {
                    setBookingsDataState(bookingsData)
                }
            })
    }, [globalBookingInfo.date_booked]); // empty dependency array means this effect will only run once (like componentDidMount in classes)


    // FETCH FOR DESKS (all info on the desks):
    useEffect(() => {
    // GET request using fetch inside useEffect React hook
        fetch(`http://localhost:3100/api/desks`, {mode: 'cors'})
            .then(response => response.json())
            .then(data => {
                console.log("Desks Data from API :")
                console.log(data);
                // setDesksDataState(data);
                
                if (data.name != "error"){
                    setDesksDataState(data);
                } else {
                    setDesksDataState(deskData);
                }
            })
    }, [bookingsDataState.date_booked, bookingsDataState.am, bookingsDataState.pm]); // empty dependency array means this effect will only run once (like componentDidMount in classes)



    // ------- Code to sort through desks data and create list of desks. Then goes through
    // list of bookings, and if the desk is booked then it updates list to reflect this. We are
    // using a state hook so it updates if the bookings data is updated  ----------------------

    let deskAndBookingList = [];

    desksDataState.map(element => {
        deskAndBookingList.push(
            {
                "id": element.id,
                "desk_booked": false,
            }
        );
    });

    bookingsDataState.map((element,  index) => {
        if (index == 0){
            console.log(deskAndBookingList)
        }
        console.log("FAILED HERE")
        console.log(element)
        console.log(deskAndBookingList[element.desk_id-1]);
        if ((element.am) || (element.pm)) {
            deskAndBookingList[element.desk_id-1].desk_booked = true;
            deskAndBookingList[element.desk_id-1].id = element.desk_id;
        }
    });



    // ----------- This code stops all of the rows opening the dropdown component, and
    // forces it only to open the row for the desk selected --------------------------

    const [toOpen , setToOpen] = useState({ number:"", open: false });



    // ----------- This will iterate through our list, and display the desk and whether its been booked

    return (
        <div className="DeskListContainer">
            <h3>3. Choose your desk</h3>

            <table>
                <thead>
                    <tr>
                      <th>Desk ID</th>
                      <th>Availability</th>
                    </tr>
                </thead>

                <tbody className="DeskListTableBody">
                {deskAndBookingList.map((element)=>{
                                    return (
                                        <div key={element.id} className="tableRows">
                                        <tr>
                                            <td className="tableLeftColumn">Desk {element.id}</td>
                                            <td className="tableRightColumn">
                                                {element.desk_booked ? (
                                                    <div>
                                                        <button style={{"user-select": "none", "background-color" : "rgba(0, 0, 0, 0.555)"}}
                                                        >Booked</button>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        {toOpen.open && (toOpen.number === element.id) ? (
                                                            <button onClick={()=>{
                                                            setToOpen({ number: element.id, open: false })
                                                            setGlobalBookingInfo({...globalBookingInfo, desk_id : ""})
                                                            }} 
                                                            style={{"background-color" : "#469796"}}
                                                            >Selected</button>
                                                        ) : (
                                                            <button onClick={()=>{
                                                            setToOpen({ number: element.id, open: true })
                                                            setGlobalBookingInfo({...globalBookingInfo, desk_id : element.id})
                                                            }}>Book Now</button>
                                                        )}
                                                        
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                        <div>
                                                {/* {toOpen.open && (toOpen.number === element.id) ? (
                                                        <button>Book Now</button>
                                                    ) : (
                                                        <h2 className="noShow">Nothing to display</h2>
                                                    )
                                                } */}
                                            </div>
                                        </div>
                                    );
                                })}

                </tbody>
            </table>
        </div>

    );

}
