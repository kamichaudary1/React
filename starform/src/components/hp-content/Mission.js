import React from 'react'
import Button from '../common/Button'

const Mission = ( {acfData} ) => {

  return (
    <div className='w-full bg-mainbody-blue' id="mission">
        <div className='xs:w-[auto] laptopview:w-[1380px] xs:px-7 mx-auto flex flex-wrap justify-between'>
            <h2 className='flex text-beige text-base font-sora font-medium uppercase tracking-[3px]'>{acfData.ourmission_title}</h2>
            <div className='flex flex-wrap xs:w-full ipad:w-[915px]'>
                <p className='text-white font-normal xs:text-[25px] text-[40px] xs:leading-[40px] leading-[60px] text-left mb-10 ipad:pr-24 font-sora'>
                {acfData.ourmission_descp}</p>
                <Button>{acfData.ourmission_button_text}</Button>
            </div>
        </div>
    </div>
  )
}

export default Mission