import React from 'react'

// Slick Slider
import Slider from "react-slick";

// Components Calls
import Button from '../common/Button';

const Membership = ( {acfData} ) => {
 
    const settings = {
        centerMode: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 5
              }
            },
            {
              breakpoint: 767,
              settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 3
              }
            }
          ]
    };

    return (
        <div className='bg-mainbody-blue w-full pt-[120px] xs:pb-24 md:pb-36'>
            <h2 className='flex justify-center mb-14 text-beige text-base font-sora font-medium uppercase tracking-[3px] text-center'>{acfData.membership_title}</h2>
            <div>
                <Slider {...settings}>
                    {
                       acfData && acfData.membership_slider && acfData.membership_slider.map((item, i) => {
                            return (
                                <div key={i} className='flex w-auto justify-center xs:items-center h-[90px] mx-8'>
                                    <img 
                                        className='xs:max-w-[150px] xs:max-h-[60px] md:max-w-[100%] w-full h-full md:max-h-[90px] mx-auto xs:object-contain' 
                                        src={item.membership_logo} alt="" 
                                    />
                                </div>
                            )
                        })
                    }             
                </Slider>
            </div>
        </div>
    )

}

export default Membership