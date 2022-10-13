import React from 'react'

const Infected = (props) => {
   const {confirmedCases} = props
    return (
        <div style={{backgroundColor:'#f3f3f3', padding:'12px 15px'}}>
        <h2>Infected</h2>
        <h5>{confirmedCases}</h5>
        <h6>Real Date</h6> 
        <p>Number of active cases of Covid-19</p>
        </div>
    )
}

export default Infected