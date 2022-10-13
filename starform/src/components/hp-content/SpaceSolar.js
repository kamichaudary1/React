import React  from 'react'
import Button from '../common/Button';

// Slick Slider
import Slider from "react-slick";

const SpaceSolar = ( {acfData} ) => {

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='w-full md:bg-[url(../public/images/solarspace-bg.jpg)] bg-[url(../public/images/solarspace-bg-mobile.png)] bg-no-repeat bg-cover md:bg-left-bottom bg-center'>
            <div className='max-w-6xl mx-auto md:pt-64 md:pb-64 px-8 pt-24 pb-44 text-center flex flex-wrap justify-center'>
                <span className='flex justify-center w-full text-beige text-base font-sora xs:font-normal md:font-medium uppercase tracking-[3px]'>the benefits of space solar</span>
                <div className='spacesolar-slider w-full'>
                    <Slider {...settings}>
                        {
                           acfData && acfData.spacesolar_slider && acfData.spacesolar_slider.map((item, i) => {
                                return (
                                    <div key={i}>
                                        <h2 
                                            className='w-full text-center font-sora font-normal xs:text-3xl md:text-[50px] md:leading-[63px] xs:tracking-[-2px] md:tracking-[-3px] text-white mt-5 mb-8'>
                                                {item.spacesolar_slidertitle}
                                        </h2>
                                        <p className='max-w-2xl mx-auto text-white font-sora font-normal text-base leading-8 text-center mb-8 text-opacity-50'>
                                            {item.spacesolar_sliderdescp}
                                        </p>
                                        <Button className=''>{item.spacesolar_buttontext}</Button>            
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default SpaceSolar