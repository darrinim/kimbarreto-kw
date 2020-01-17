import React, { useState, useEffect } from 'react';
import './ClientTestimonials.css';
import axios from 'axios';

const ClientTestimonials = () => {

  const [ reviews, setReview ] = useState([]);

  // useEffect(() => {
  //   fetch('http://www.zillow.com/webservice/ProReviews.htm?zws-id=X1-ZWz17fzq7msjrf_7j3qs&output=json&screenname=ROBfortheJOB&count=10')
  //   .then(response => response.json())
  //   .then(reviews => {
  //     setReview(reviews.response.results.proReviews.review)
  //     console.log('inside useEffect', reviews.response.results.proReviews.review)})
  // }, [])

  // empty array reps the dependencies for useEffect hook
  // if something in that array changes, that function will run again
    // (always will be array)
    // empty array indicates that it only needs to run once (like componentdidmount)
    // look into componentdidUpdate

    // useEffect(async () => {
    //   const response = await fetch('http://www.zillow.com/webservice/ProReviews.htm?zws-id=X1-ZWz17fzq7msjrf_7j3qs&output=json&screenname=ROBfortheJOB&count=10')
    //   const reviews = await response.json()
    //     setReview(reviews.response.results.proReviews.review)
    //     console.log('inside useEffect', reviews.response.results.proReviews.review)
    // }, [])
    //the above gives warning, look at it

    useEffect(() => {
      async function getReviews () {
        const response = await fetch('http://www.zillow.com/webservice/ProReviews.htm?zws-id=X1-ZWz17fzq7msjrf_7j3qs&output=json&screenname=ROBfortheJOB&count=10')
        const reviews = await response.json()
        setReview(reviews.response.results.proReviews.review)
        console.log('inside useEffect', reviews.response.results.proReviews.review)
      }
      getReviews();
    }, [])

//   const getReviews = async () => {
//     const response = await axios.get('http://www.zillow.com/webservice/ProReviews.htm?zws-id=X1-ZWz17fzq7msjrf_7j3qs&output=json&screenname=ROBfortheJOB&count=10')
//     .then((response) => {
//       let review = response.data.response.results.proReviews.review;
//       console.log('in getReviews', review);
//       setReview(review)
//   });
// }
// getReviews();

//need && somewhere, but where
//possibly need to put function call in componentdidmount

// getReviews();

  return(
    <div>
      {reviews.map(review => {
        return(
          <p>{review.description}</p>
        )
      })}
    </div>
  )
}

export default ClientTestimonials;
