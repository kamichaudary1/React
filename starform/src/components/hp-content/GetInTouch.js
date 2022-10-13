import React from 'react'

import Button from '../common/Button'

const GetInTouch = ( {acfData} ) => {

  return (
    <div className='w-full xs:bg-[url(../public/images/getintouch-bg-mobile.jpg)] md:bg-[url(../public/images/getin-touch-bg.png)] bg-no-repeat bg-cover bg-center xs:pt-28 xs:pb-24 md:pt-48 md:pb-36'>
        <div className='max-w-[910px] mx-auto flex justify-center flex-wrap'>
            <h2 className='flex text-beige text-base font-sora font-normal uppercase tracking-[3px] text-center'>{acfData.get_in_touch_title}</h2>.
            <p className='text-white font-normal xs:text-3xl md:text-[50px] md:leading-[60px] text-center xs:mt-3 xs:mb-10 md:mb-5 font-sora'>
              {acfData.get_in_touch_descp}
            </p>
            <Button>{acfData.globalchallenge_buttontext}</Button>
        </div>
    </div>
  )
}

export default GetInTouch