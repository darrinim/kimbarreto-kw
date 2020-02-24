import React, { useState, useEffect } from 'react';
import './Feed.css';

const Feed = () => {

  const [ sales, setSales ] = useState([]);

  const API_KEY = `${process.env.REACT_APP_API_KEY_GSHEETS}`;
  

  useEffect(() => {
    async function getSales () {
      // let id = '1-RbZLYCY6NNbHB5IJzLSezQ83y6xH5iUAKOnqyCVndM'
      let source = await fetch(`https://spreadsheets.google.com/feeds/list/${API_KEY}/od6/public/values?alt=json`)
      let salesArray = await source.json()
      console.log('inside useEffect Feed', salesArray.feed.entry);
      setSales(salesArray.feed.entry)
    }
    getSales();
  }, [])

  return(
    <div className="saleOuterContainer">
      <h2>Previous Sales</h2>
      <div className="saleContainer">
      {sales.map( sale => {
        return(
          <div className="saleTile">
            <img className="saleImage" src={sale.gsx$image.$t}/>
            <div className="saleInnerTile">
              <p className="saleText">{sale.gsx$city.$t}</p>
              <p className="saleText">{sale.gsx$address.$t}, {sale.gsx$state.$t}</p>

            </div>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Feed;
