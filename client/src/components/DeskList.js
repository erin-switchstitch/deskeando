import DeskListBooker from "./DeskListBooker";
import templateData from "./templateData.json";
import "./../stylings/DeskList.css";
import { useState } from "react";

export default function DeskList(){

    console.log(templateData);

    const [toOpen , setToOpen] = useState({ number:"", open: false });

    return (
        <div className="DeskListContainer">
            <h1>Desk</h1>
            <h1>Book Desk</h1>
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
                                        <div key={element.id}>
                                        <tr>
                                            <td>Desk {element.number}</td>
                                            <td>
                                                {element.booked ? (
                                                    <td>Booked</td>
                                                ) : (
                                                    <td>
                                                        <button onClick={()=>setToOpen({ number: element.number, open: true })}>Book Now</button>
                                                    </td>
                                                )}
                                            </td>
                                        </tr>
                                        <div>
                                                {toOpen.open && (toOpen.number === element.number) ? (
                                                        <DeskListBooker />
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
