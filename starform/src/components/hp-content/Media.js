import React from 'react'

// Slick Slider
import Slider from "react-slick";

const Media = ( {acfData} ) => {

    const settings = {
        centerMode: true,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1359,
                settings: {
                    slidesToShow: 3
                }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 767,
              settings: {
                centerMode: false,
                slidesToShow: 1
              }
            }
          ]

    };
    
    const getColor = (media_events) =>{
        if(media_events === "News" ) {
        return 'bg-[#22A0E8]'
        } else if(media_events === "Events"){
            return 'bg-[#d48327]'
        } else {
            return 'bg-[#1dbc7a]'
        }
    }

    return (
        <div className='w-full relative xs:pb-20 md:pb-120px md:pl-4 xl:pl-28 relative bg-mainbody-blue xs:px-5 md:px-0'>
            <img className='absolute left-0 top-12 h-[430px] xs:hidden tablet:block' src="images/circle-bg2.png" alt="" />
            <h2 className='text-white font-sora text-[50px] leading-[62px] font-normal mb-12 text-left'>{acfData.media_title}</h2>
            <div className='w-full  xs:pb-20 md:pb-52 media-slider'>
                <Slider {...settings}>
                    {
                      acfData && acfData.media_slider && acfData.media_slider.map((item, i) => {
                            return (
                                <div key={i} className='relative'>
                                    <span className='absolute w-full h-full left-0 top-0 media-gradientopaciity-0 media-gradient-0'></span>
                                    <img src={item.media_thumbnail} alt="" />
                                    <span 
                                        className={`absolute left-3 top-4 rounded-2xl ${getColor(item.media_events)} text-white font-sora font-normal text-xs tracking-[3px] py-2 px-4 capitalize`}>
                                            {item.media_events}
                                    </span>
                                    <div className='absolute px-3 bottom-4 w-full'>
                                        <span className='text-white font-sora font-medium text-sm flex mb-3 tracking-[3px]'>{item.media_date}</span>
                                        <h3 className='text-white font-sora xs:text-xl md:text-lg lg:text-2xl font-normal leading-7 text-left'>{item.media_slider_title}</h3>
                                        <p className='text-base leading-7 font-normal text-white text-left my-5 text-opacity-50'>{item.media_slider_descp}</p>
                                        <a href="" className='flex items-center w-full text-white text-sm font-medium capitalize text-left'>{item.media_slider_linktext}
                                            <span><img className='ml-1' src="images/readmore-arrow.png" alt="" /></span>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )

}

export default Media