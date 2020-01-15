import React, { useState } from 'react';
import './Contact.css'
import axios from 'axios';

const Contact = () => {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');
  const nameChange = e => setName(e.target.value);
  const emailChange = e => setEmail(e.target.value);
  const messageChange = e => setMessage(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('YOOOOOOOOOOOOOO');
    // alert(`Submitting ${name}, ${email}, ${message}`)
    // console.log(name, email, message);
    const response = await axios.post("http://localhost:3002/send",{name, email, message})
    if (response.data.status === 'success'){
      alert("Message Sent.");
      setName('');
      setEmail('');
      setMessage('');
    } else if(response.data.status === 'fail'){
      alert("Message failed to send.")
    }
  }


  return(
    <div className="contactContainer">
      <div className="contactOuterWrap">
        <div className="contactInfoWrap">
          <h2>Contact</h2>
            <div>
              <span><i className="fas fa-map-marker-alt icon"></i></span>
              <span>
                <a
                  target="blank"
                  href="https://goo.gl/maps/RUF9zQzJUwbAEYvK6">2200 Fletcher Ave, Fort Lee, NJ 07024
                </a>
              </span>
            </div>
            <div>
              <span><i className="fas fa-phone-alt icon"></i></span>
              <span><a target="blank" href="tel:2015938900">Office: (201) 592-8900</a></span>
            </div>
            <div>
              <span><i className="fas fa-envelope icon"></i></span>
              <span><a target="blank" href="mailto:info@kimberlybarreto.com">info@kimberlybarreto.com</a></span>
            </div>
        </div>
        <div className="contactFormWrap">
          <form onSubmit={handleSubmit} method="POST" action="/send">
            <input type="text" placeholder="Name" onChange={nameChange} value={name}></input>
            <input type="text" placeholder="Email" onChange={emailChange} value={email}></input>
            <textarea placeholder="What's on your mind?" onChange={messageChange} value={message}></textarea>
            <input type="submit" value="Send"></input>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
