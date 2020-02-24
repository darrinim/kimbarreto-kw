import React, { useState, useEffect } from 'react';
import './ClientTestimonials.css';


const ClientTestimonials = () => {

  const [ reviews, setReview ] = useState([]);

  const API_KEY = `${process.env.REACT_APP_API_KEY_ZILLOW}`;


    useEffect(() => {
      async function getReviews () {
        const response = await fetch(`http://www.zillow.com/webservice/ProReviews.htm?zws-id=${API_KEY}&output=json&screenname=ROBfortheJOB&count=3`)
        const reviews = await response.json()
        setReview(reviews.response.results.proReviews.review)
        console.log('inside useEffect', reviews.response.results.proReviews.review)
      }
      getReviews();
    }, [])


  return(
    <div className="reviewContainer">
      <h2>Client Testimonials</h2>
      <div className="reviewInnerWrap">
        {reviews.map(review => {
          return(
            <div className="reviewTile">
              <div className="reviewTileWrap">
                <img alt="quote" src="https://res.cloudinary.com/darrin-im/image/upload/v1579282973/quotescolored_omtdbt.png" />
                <p>{review.description}</p>
                <p>-{review.reviewer.toUpperCase()}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ClientTestimonials;
