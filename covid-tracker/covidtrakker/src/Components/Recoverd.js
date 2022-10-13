import React from 'react'

const Recovered = ( props ) => {
    const { recoveredCases } = props;
  return (
    <div style={{backgroundColor:'#f3f3f3', padding:'12px 15px', margin:'0 15px'}}>
      <h2>Recovered</h2>
      <h5>{recoveredCases}</h5>
      <h6>Real Date</h6>
      <p>Number of active cases of Covid-19</p>
    </div>
  )
}

export default Recovered