import React, { useState } from "react";

function DatePicker(){
const todaysDate = new Date();
const getDate = todaysDate.getDate();
console.log(getDate);
const [firstDay, setFirstDay]= useState (new Date(new Date().setDate(todaysDate.getDate() -10)));

console.log(firstDay);

return (
    <div> hello</div>
)
}
//Today's date
   //Today's date(or number)
   //Create a referenceDay useState. Reference day is the start day of the whatever month is currently
   //create disabiled useState for buttons. Helps restricting navigation between current month and next month only
   // ????? --> Do we need to have more months
   //Create a useState to tell if we are currently looking at the current month
   //Create a leapYear use state to  tellif in the database February should have 28 or 29 days
//Store the currentYear in a variable from the reference day
//Store the currentMonth in a variable from the reference day
// if(currentYear % 4 === 0){
    //set leapYear to true
     // put some code here to change number of days in February to 29
//  } else {
     //set leapYear to false
     // put some code here to change number of days in February to 28
//  }
// Information about the months that is to be stored in the database --> Month_name, abbreviation, number_of_days
// Using referenceDay's date store the date(number) of the reference date
//store pastDays in a variable and initialise to -1(note: initialise to 0 first and check the problems that we get)
//store pastDays in a variable and initialise to -1(note: initialise to 0 first and check the problems that we get)
//Get predefined information about the current month (i.e. store the object of the current month in a variable
//From the above object get the value for the number of days in that month
//Calculate the days that has passed(i.e increment the pastDays variable using todays date(number) variable as a reference
//Calculate the days ahead(i.e increment the "days ahead" variable using todays date(number) variable as a reference

// Calculate the very first day of the current month(e.g Mon, Tue)
// store the abbreviations of the days of the week in a variable(because that is how javascript stores it)
//Push each day as an item into an array an empty array
//Push an empty string for each number of day that should be  part of the previous months into another empty  array

export default DatePicker;