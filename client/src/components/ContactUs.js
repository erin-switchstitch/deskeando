import React, { Fragment, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

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
      <label> Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />

    </form>

    );
  };


export default ContactUs;