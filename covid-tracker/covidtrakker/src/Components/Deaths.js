import React from 'react'

const Deaths = ( props ) => {
    const { deathCases } = props;
    return (
        <div style={{backgroundColor:'#f3f3f3', padding:'12px 15px'}}>
            <h2>Deaths</h2>
            <h5>{deathCases}</h5>
            <h6>Real Date</h6>
            <p>Number of active cases of Covid-19</p>
        </div>
    )
}

export default Deaths