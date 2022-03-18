import DeskListBooker from "./DeskListBooker";
import bookingsData from "./bookings.json";
import deskData from "./desks.json";
import "./../stylings/DeskList.css";
import { useState, useEffect } from "react";

// all bookings
// bookings by date


export default function DeskList(props){
    console.log(props.date);
    // We will need a fetch request to the API which will pull all of the bookings for the date
    // passed in the props from the calender component. I don't know whether we will need to use a
    // state hook for the date to update the list ...?? :
        // const passedData = props.date;
        // const [passedDate, setPassedDate] = useState(passedData);
        // console.log(passedDate);
    //     useEffect(() => {
    // // GET request using fetch inside useEffect React hook
    //     fetch('http://localhost:3100/api/bookings')
    //         .then(response => response.json())
    //         .then(data => {
    //             updateVideoData(data);
    //             // orderVideos();
    //             updateCurrentVideo(data[0]);
    //         })
    //     // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);



    // ------- Code to sort through desks data and create list of desks. Then goes through
    // list of bookings, and if the desk is booked then it updates list to reflect this. We are
    // using a state hook so it updates if the bookings data is updated  ----------------------

    const [bookingsDataState, setBookingsDataState] = useState (bookingsData);
    let deskAndBookingList = [];

    deskData.map((element) => {
        deskAndBookingList.push(
            {
                "id": element.id,
                "desk_booked": false,
            }
        );
    });

    bookingsDataState.map((element) => {
        // console.log(element)
        if ((element.am) || (element.pm)) {
            deskAndBookingList[element.id - 1].desk_booked = true;
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
                                                        <DeskListBooker deskNumber={element.id} />
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
