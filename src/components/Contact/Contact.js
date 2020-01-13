import React from 'react';
import './Contact.css'

const Contact = () => {

  return(
    <div className="contactContainer">
      <div className="contactOuterWrap">
        <div className="contactInfoWrap">
          <h2>Contact</h2>
            <div>
              <span><i class="fas fa-map-marker-alt icon"></i></span>
              <span>
                <a
                  target="blank"
                  href="https://goo.gl/maps/RUF9zQzJUwbAEYvK6">2200 Fletcher Ave, Fort Lee, NJ 07024
                </a>
              </span>
            </div>
            <div>
              <span><i class="fas fa-phone-alt icon"></i></span>
              <span><a target="blank" href="tel:2015938900">Office: (201) 592-8900</a></span>
            </div>
            <div>
              <span><i class="fas fa-envelope icon"></i></span>
              <span><a target="blank" href="mailto:info@kimberlybarreto.com">info@kimberlybarreto.com</a></span>
            </div>
        </div>
        <div className="contactFormWrap">
          <form>
            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Email"></input>
            <input type="text" placeholder="What's on your mind?"></input>
            <input type="submit" value="Send"></input>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
