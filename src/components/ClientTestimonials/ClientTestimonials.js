import React, { useState, useEffect } from 'react';
import './ClientTestimonials.css';
import axios from 'axios';

const ClientTestimonials = () => {


  const [ reviews, setReview ] = useState([]);

  // useEffect(() => {
  //   fetch('http://www.zillow.com/webservice/ProReviews.htm?zws-id=X1-ZWz17fzq7msjrf_7j3qs&output=json&screenname=ROBfortheJOB&count=10')
  //   .then(reviews => setReview(reviews))
  // }, [])

  const getReviews = async () => {
    const response = await axios.get('http://www.zillow.com/webservice/ProReviews.htm?zws-id=X1-ZWz17fzq7msjrf_7j3qs&output=json&screenname=ROBfortheJOB&count=10')
    .then((response) => {
      let review = response.data.response.results.proReviews.review;
      console.log('in getReviews', review);
      setReview(review)
  });
}
// getReviews();

//need && somewhere, but where
//possibly need to put function call in componentdidmount

// getReviews();

  return(
    <div>
      {console.log('inside return', reviews)}
    </div>
  )
}

export default ClientTestimonials;
