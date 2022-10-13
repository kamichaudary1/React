import React from 'react'

// Components Calls
import Button from '../common/Button'

const GlobalChallenges = ( {acfData} ) => {


    return (
        <div className='w-full bg-mainbody-blue xs:pt-28 pt-40 pb-28 relative'>
            <img className='xs:w-[170px] md:w-[250px] absolute right-0 xs:top-0 md:top-[-88px] ipad:w-[375px] object-cover' src="/images/circle-bg.png" alt="" />
            <div className='1xl:w-[auto] laptopview:w-[1380px] xs:px-5 md:px-8 mx-auto flex flex-wrap justify-between'>
                <div className='xs:order-2 tablet:order-none mx:px-0 tablet:w-2/4 ipad:w-1/2 1xl:w-[600px] text-left inline-block'>
                    <h2 className='flex text-beige text-base font-sora font-medium uppercase tracking-[3px] xs:pt-10 md:pt-0'>
                        {acfData.globalchallenge_title}
                    </h2>
                    <p className='text-white font-normal xs:text-3xl md:text-[50px] xs:leading-10 md:leading-[60px] text-left mt-6 mb-6 font-sora'>
                        {acfData.globalchallenge_subtitle}
                    </p>
                    <p className='text-white font-normal text-base leading-[30px] text-left mb-7 font-sora text-opacity-50'>
                        {acfData.ourmission_descp}
                    </p>
                    <Button>{acfData.globalchallenge_buttontext}</Button>
                </div>
                <div className='md:mt-5 ipad:mt-0 ipad:w-2/4 tablet:w-[45%] 1xl:w-[700px] flex flex-wrap relative z-10'>
                    <img className='w-full' src={acfData.globalchallenge_thumbnail} alt="" />
                </div>
            </div>
        </div>
    )
}

export default GlobalChallenges