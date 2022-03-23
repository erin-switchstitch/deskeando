import DeskListBooker from "./DeskListBooker";
import bookingsData from "./../data/bookings.json";
import deskData from "./../data/desks.json";
import "./../stylings/DeskList.css";
import { useState, useEffect } from "react";


export default function DeskList(props){
    console.log(props.date);

    const [ bookingsDataState, setBookingsDataState] = useState(bookingsData);
    const [ desksDataState, setDesksDataState] = useState(deskData);


    // FETCH FOR BOOKINGS:
    useEffect(() => {
    // GET request using fetch inside useEffect React hook
        fetch(`http://localhost:3100/api/bookings?date=${props.date}`, {mode: 'cors'})
            .then(response => response.json())
            .then(data => {
                console.log("Bookings Data from API :")
                console.log(data);
                setBookingsDataState(data);
            })
    }, [props.date]); // empty dependency array means this effect will only run once (like componentDidMount in classes)


    // FETCH FOR DESKS:
    useEffect(() => {
    // GET request using fetch inside useEffect React hook
        fetch(`http://localhost:3100/api/desks`, {mode: 'cors'})
            .then(response => response.json())
            .then(data => {
                console.log("Desks Data from API :")
                console.log(data);
                setDesksDataState(data);
            })
    }, [bookingsDataState]); // empty dependency array means this effect will only run once (like componentDidMount in classes)



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
            <h1>Current Date selected in calender: </h1>
            <h2>{props.date}</h2>
            <table>
                <thead>
                    <tr>
                      <th>Desk ID</th>
                      <th>Availability</th>
                    </tr>
                </thead>

                <tbody>
                {deskAndBookingList.map((element)=>{
                                    return (
                                        <div key={element.id} className="tableRows">
                                        <tr>
                                            <td className="tableLeftColumn">Desk {element.id}</td>
                                            <td className="tableRightColumn">
                                                {element.desk_booked ? (
                                                    <div>Booked</div>
                                                ) : (
                                                    <div>
                                                        <button onClick={()=>setToOpen({ number: element.id, open: true })}>Book Now</button>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                        <div>
                                                {toOpen.open && (toOpen.number === element.id) ? (
                                                        <DeskListBooker deskNumber={element.id} bookingDate={props.date} parentPassBackSetStateFunction={(data)=>setBookingsDataState(data)}/>
                                                    ) : (
                                                        <h2 className="noShow">Nothing to display</h2>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    );
                                })}

                </tbody>
            </table>
        </div>

    );

}
