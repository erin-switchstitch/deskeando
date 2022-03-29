// import { urlencoded } from "body-parser";
import leftDesk from "../images/left_desk.svg";
import rightDesk from "../images/right_desk.svg";
import DeskListBooker from "./DeskListBooker";
import bookingsData from "./../data/bookings.json";
import deskData from "./../data/desks.json";
import { useState, useEffect } from "react";
import "../stylings/SVG.css";
import { Element } from "prop-types";

function BookingSVG(props){


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

   function handleSVGClick(event){
      console.log("CLICK WORKING !!!!!!!!!!!!!!!!!");
      console.log(event.target.innerText);
      setGlobalBookingInfo({ ...globalBookingInfo, desk_id : parseInt(event.target.innerText) });
   }



   const [ bookingsDataState, setBookingsDataState] = useState(bookingsData);
   const [ desksDataState, setDesksDataState] = useState(deskData);

   // FETCH FOR BOOKINGS for the date selected:
   useEffect(() => {
   // GET request using fetch inside useEffect React hook
       fetch(`http://localhost:3100/api/bookings?date=${globalBookingInfo.date_booked}`, { mode: "cors" })
           .then((response) => response.json())
           .then((data) => {
               console.log("Bookings Data from API :");
               console.log(data);

               if (data.name != "error"){
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

               if (data.name != "error"){
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


   let shortArray = bookingsDataState.map((element,  index) => {

      if (index == 0){
           console.log(deskAndBookingList);
      }
      console.log(element);

      return element.desk_id;
   });

   console.log(shortArray);


   const svgFormatting = [
      {
         "groupNumber": 1,
          "start":1,
          "end":8,
          "forward":true,
          "individual_desks" :[],
      },
      {
         "groupNumber": 2,
          "start":9,
          "end":16,
          "forward":true,
          "individual_desks" :[],
      },
      {
         "groupNumber": 3,
          "start":17,
          "end":22,
          "forward":false,
          "individual_desks" :[],
      },
      {
         "groupNumber": 4,
          "start":23,
          "end":30,
          "forward":true,
          "individual_desks" :[],
      },
      {
         "groupNumber": 5,
          "start":41,
          "end":50,
          "forward":false,
          "individual_desks" :[],
      },
      {
         "groupNumber": 6,
          "start":31,
          "end":40,
          "forward":false,
          "individual_desks" :[],
      },
   ];



   // 1 , 2 , 3 , 4 .... 49 , 50
   desksDataState.forEach((element, index) => {

      const outer50index = index;
      const desk_number = element.id;
      // console.log(element);

      svgFormatting.map((currentGroup , i) =>{


         if (desk_number >= currentGroup.start && desk_number <= currentGroup.end){

            let tabIndex;
            let groupingLength = (currentGroup.end - currentGroup.start) + 1 ;

            let relativeDeskIndex = outer50index + 1 - currentGroup.start;
            let relativeDeskNumber = relativeDeskIndex + 1;
            let leftOrRight;

            if (currentGroup.forward){
               tabIndex = relativeDeskIndex;
            } else {
               tabIndex = currentGroup.end -1 - outer50index;
            }

            let finalNumber;

            if (relativeDeskIndex % 2 == 0){

               leftOrRight = leftDesk;

               let startingPosition = (groupingLength / 2) + 1;

               finalNumber = (currentGroup.start-1) + (startingPosition + (relativeDeskIndex/2));

            } else {

               leftOrRight = rightDesk;

               let startingPosition = (groupingLength / 2) + (currentGroup.start-1);

               finalNumber = startingPosition - ((relativeDeskIndex-1)/2);

            }

            let desk_booked = "active";

            if (shortArray.includes(finalNumber)){
               desk_booked = "inactive";
            }

            let passAccessibilityClass;


            if (element.desk_features.accessibilty){
               passAccessibilityClass = "matchingAccessibility";
            }

            svgFormatting[currentGroup.groupNumber -1].individual_desks.push(
               {
                  "desk_id": finalNumber,
                  "grouping": currentGroup.groupNumber,
                  "group_length":groupingLength,
                  "relativeOrder":relativeDeskNumber,
                  "tabIndex" :  tabIndex,
                  "leftOrRight" : leftOrRight,
                  "start":currentGroup.start,
                  "end":currentGroup.end,
                  "desk_accessibility": passAccessibilityClass,
                  "desk_booked": desk_booked,
               }
            );
         }
      });
   });


   function compare( a, b ) {
      if ( a.grouping < b.grouping ){
         return -1;
      }
      if ( a.grouping > b.grouping ){
        return 1;
      }
      return 0;
   }

   deskAndBookingList.sort( compare );

   console.log(svgFormatting);



   return (
      <div className="BookingSvgWrapper">
         <h2>2. Choose Your desk</h2>
         <div className="floor-plan" >
            {svgFormatting.map((elem,index) =>{

               let extraClasses;

               if (elem.groupNumber == 4){
                  extraClasses = "tablist";
               }

               console.log(elem);
               return (
                  <div key={index} className="svg-container">
                     <div className="kitchen"></div>
                     <div className={`desks-${elem.start}-to-${elem.end} desk-space`} role={extraClasses}>
                        {elem.individual_desks.map((element,index) =>{
                           return (
                              <div onClick={(e) => handleSVGClick(e)} key={index} onKeyDown={(e)=>handleSVGClick(e)} role="tab" tabIndex={index} style={{ backgroundImage: `url(${element.leftOrRight})` }} className={`desk ${element.leftOrRight} ${element.desk_booked} ${ element.desk_accessibility }`}> <span>{element.desk_id}</span></div>
                           );
                        })}
                     </div>
                     <div className="couch"></div>
                     <div className="common-table"></div>
                  </div>
               );
            })}
         </div>

      </div>

      // <div className="BookingSvgWrapper">
      //    <h2>2. Choose Your desk</h2>
      //    <div className="floor-plan" >
      //       <div className="desks-1-to-8 desk-space" >
      //          <div onClick={handleSVGClick}  onKeyDown={handleSVGClick} role="tab" tabIndex={0} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left inactive"><span>5</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-1} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>4</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-2} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>6</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-3} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>3</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-4} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>7</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-5} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>2</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-6} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>8</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-7} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>1</span></div>
      //       </div>
      //       <div className="desks-9-to-16 desk-space" >
      //          <div onClick={handleSVGClick}  onKeyDown={handleSVGClick} role="tab" tabIndex={0} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>13</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-1} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>12</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-2} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>14</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-3} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>11</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-4} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>15</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-5} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>10</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-6} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>16</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-7} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>9</span></div>
      //       </div>
      //       <div className="desks-17-to-22 desk-space" >
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-5} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>20</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-4} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>19</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-3} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>21</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-2} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>18</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-1} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>22</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-0} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>17</span></div>
      //       </div>
      //       <div className="desks-23-to-30 desk-space" role="tablist" >
      //          <div onClick={handleSVGClick}  onKeyDown={handleSVGClick} role="tab" tabIndex={0} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>27</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-1} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>26</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-2} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>28</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-3} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>25</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-4} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>29</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-5} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>24</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-6} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>30</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-7} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>23</span></div>
      //       </div>
      //       <div className="desks-41-to-50 desk-space">
      //          <div onClick={handleSVGClick}  onKeyDown={handleSVGClick} role="tab" tabIndex={-9} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>46</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-8} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>45</span></div>
      //          <div onClick={handleSVGClick}  onKeyDown={handleSVGClick} role="tab" tabIndex={-7} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>47</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-6} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>44</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-5} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>48</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-4} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>43</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-3} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>49</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-2} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>42</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-1} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>50</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-0} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>41</span></div>
      //       </div>
      //       <div className="desks-31-to-40 desk-space">
      //          <div onClick={handleSVGClick}  onKeyDown={handleSVGClick} role="tab" tabIndex={-9} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>36</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-8} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>35</span></div>
      //          <div onClick={handleSVGClick}  onKeyDown={handleSVGClick} role="tab" tabIndex={-7} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>37</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-6} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>34</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-5} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>38</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-4} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>33</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-3} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>39</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-2} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>32</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={-1} style={{ backgroundImage: `url(${leftDesk})` }} className="desk left"><span>40</span></div>
      //          <div onClick={handleSVGClick} onKeyDown={handleSVGClick} role="tab" tabIndex={0} style={{ backgroundImage: `url(${rightDesk})` }} className="desk right"><span>31</span></div>
      //       </div>
      //    </div>
      //  </div>

    );
}

export default BookingSVG;