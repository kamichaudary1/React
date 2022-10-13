import React, { useState } from 'react';

import Infected from './Infected';
import Recovered from './Recoverd';
import Deaths from './Deaths';

const Cards = ( props ) => {

  const {coviddata} = props;

  const confirmedCases = coviddata.reduce((acc, curr) => {
    return acc = acc + curr.Confirmed
  }, 0) 

  const recoveredCases = coviddata.reduce((acc, curr) => {
    return acc = acc + curr.Recovered;
  }, 0)

  const deathCases = coviddata.reduce((acc, curr) => {
    return acc = acc + curr.Deaths;
  }, 0)

  return (
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'spaceBetween'}}>
      <Infected confirmedCases={confirmedCases} />
      <Recovered recoveredCases={recoveredCases} />
      <Deaths deathCases={deathCases}/>
    </div>
  )
  
}

export default Cards