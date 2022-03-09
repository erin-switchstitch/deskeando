import DeskListBooker from "./DeskListBooker";
import templateData from "./templateData.json";
import "./../stylings/DeskList.css";
import { useState } from "react";

export default function DeskList(){

    console.log(templateData);

    const [toOpen , setToOpen] = useState({ number:"", open: false });

    return (
        <div className="DeskListContainer">
            <h1>Current Date selected in calender: </h1>
            <h2>09/03/2020</h2>
            <table>
                <thead>
                    <tr>
                      <th>Desk ID</th>
                      <th>Availability</th>
                    </tr>
                </thead>

                <tbody>
                {templateData.map((element)=>{
                                    return (
                                        <div key={element.id} className="tableRows">
                                        <tr>
                                            <td className="tableLeftColumn">Desk {element.desk_id}</td>
                                            <td className="tableRightColumn">
                                                {element.desk_booked ? (
                                                    <div>Booked</div>
                                                ) : (
                                                    <div>
                                                        <button onClick={()=>setToOpen({ number: element.desk_id, open: true })}>Book Now</button>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                        <div>
                                                {toOpen.open && (toOpen.number === element.desk_id) ? (
                                                        <DeskListBooker deskNumber={element.desk_id} />
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
