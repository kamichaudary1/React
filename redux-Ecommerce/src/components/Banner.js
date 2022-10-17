import React, { Fragment } from 'react'

const Banner = () => {
  return (
    <Fragment>
        <div className='w-full h-[800px] overflow-hidden'>
            <img src="./nike-hero.jpg" alt="" className='object-contain object-scale-down' />
        </div>
    </Fragment>
    
  )
}

export default Banner