import React, { useState, useEffect } from 'react';
import './ClientTestimonials.css';
import axios from 'axios';

const ClientTestimonials = () => {

  const [ reviews, setReview ] = useState([]);

  // BELOW WORKS, JUST THE OTHER WAY USING FETCH/PROMISES INSTEAD OF ASYNC/AWAIT
  // useEffect(() => {
  //   fetch('http://www.zillow.com/webservice/ProReviews.htm?zws-id=X1-ZWz17fzq7msjrf_7j3qs&output=json&screenname=ROBfortheJOB&count=10')
  //   .then(response => response.json()) // gets initial response
  //   .then(reviews => {
  //     setReview(reviews.response.results.proReviews.review)
  //     console.log('inside useEffect', reviews.response.results.proReviews.review)})
  // }, []) // after getting the response, we then are able to use that data and update state

  // empty array reps the dependencies for useEffect hook
  // if something in that array changes, that function will run again
    // (always will be array)
    // empty array indicates that it only needs to run once (like componentdidmount)
    // look into componentdidUpdate

    useEffect(() => {
      async function getReviews () {
        const response = await fetch('http://www.zillow.com/webservice/ProReviews.htm?zws-id=X1-ZWz17fzq7msjrf_7j3qs&output=json&screenname=ROBfortheJOB')
        const reviews = await response.json()
        setReview(reviews.response.results.proReviews.review)
        console.log('inside useEffect', reviews.response.results.proReviews.review)
      }
      getReviews();
    }, [])

// http://www.zillow.com/webservice/ProReviews.htm?zws-id=X1-ZWz17fzq7msjrf_7j3qs&output=json&screenname=ROBfortheJOB&count=10

  return(
    <div className="reviewContainer">
      <h2>Client Testimonials</h2>
      <div className="reviewInnerWrap">
        {reviews.map(review => {
          return(
            <div className="reviewTile">
              <div className="reviewTileWrap">
                <img src="https://res.cloudinary.com/darrin-im/image/upload/v1579282973/quotescolored_omtdbt.png" />
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
