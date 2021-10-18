import React, { useRef } from 'react'
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
import arrowaltcircleleftsolid from '../imges/arrowaltcircleleftsolid.svg';

export const EmailForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_gmail_mazin', 'template_ook5guy', form.current, 'user_VxkixWqIUrQqk5jNX10XM')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

    return (
        <div className="form-container">
            <Link to="/"><img src={arrowaltcircleleftsolid}/></Link>
            <form ref={form} onSubmit={sendEmail}>
                <h1>Send me Email</h1>
                <label>Name</label>
                <input className="text" type="text" name="user_name" />
                <label>Email</label>
                <input className="text" type="email" name="user_email" />
                <label>Message</label>
                <textarea className="text" name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}
