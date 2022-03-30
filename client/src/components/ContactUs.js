import React, { Fragment, useState, useRef} from "react";
import { Link } from 'react-router-dom';
import emailjs from "emailjs-com";
// import { fab, github } from "@fortawesome/free-brands-svg-icons";

const ContactUs = () => {
    const form = useRef();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_hdwmx9f", "template_w9rsf57", e.target, "jstrAHQnnT70CLM-z")
          .then((result) => {
            console.log("message sent");
          }, (error) => {
            console.log(error.text);
          });
        e.target.reset();
    };
    return (
        <form ref={form} onSubmit={handleOnSubmit}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />

    </form>
    //   <form onSubmit={handleOnSubmit}>
    //     <div>
    //       <label htmlFor="name">Name:</label>
    //       <input type="text" id="name" required />
    //     </div>
    //     <div>
    //       <label htmlFor="email">Email:</label>
    //       <input type="email" id="email" required />
    //     </div>
    //     <div>
    //       <label htmlFor="message">Message:</label>
    //       <textarea id="message" required />
    //     </div>
    //     <button type="submit">{}</button>
       
    //   </form>
    );
  };
  
// const ContactUs = ()=> {
//     return (
//         <div className="ContactUs">
//   <h1>Contact us</h1>

//  <form className="form">

//     <div className="name">

//        <label for="FullName">FullName</label>
//        <input
//             type="text"
//             name="FullName"
//             className="FullName"
//             tabIndex="1"
//        />
//        <label for="Email">Email</label>
//        <input
//             type="email"
//             name="Email"
//             className="Email"
//             tabIndex="2"
//        />
// <label for="Email">Email</label>
//        <textarea
//             type="email"
//             name="Email"
//             className="Email"
//             tabIndex="2"
//        />
// <div class="social-container">
//       <h3>Social Follow</h3>
//        <a href="https://github.com/erin-switchstitch"
//         className="github social">
//         <FontAwesomeIcon icon={faInstagram} size="2x" />
//       </a>
//     </div>
//  </form>
// </div>
//     )
// }
export default ContactUs;