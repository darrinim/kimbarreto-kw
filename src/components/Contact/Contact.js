import React from 'react';
import './Contact.css'

const Contact = () => {

  return(
    <div className="contactContainer">
      <div className="contactInfoWrap">
        <h2>Contact</h2>
        <ul>
          <li>Address</li>
          <li>Number</li>
          <li>Email</li>
        </ul>
      </div>
      <div className="contactFormWrap">
        <form>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
        </form>
      </div>
    </div>
  )
}

export default Contact;
