import React from 'react'

const Banner = ( {acfData} ) => {
    // Arrow Click scroll to mission section function
    document.querySelectorAll('a[href^="#"]').forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            let block = document.querySelector(elem.getAttribute('href')),
                offset = elem.dataset.offset ? parseInt(elem.dataset.offset) : 0,
                bodyOffset = document.body.getBoundingClientRect().top;
            window.scrollTo({
                top: block.getBoundingClientRect().top - bodyOffset + offset,
                behavior: "smooth"
            }); 
        });
    });

    return (
        <section className='w-full h-[100vh] bg-cover bg-[url(../public/images/hero-img.jpg)] bg-no-repeat bg-center' >
            <span className='absolute w-full h-full left-0 top-0 banner-gradient-0 banner-gradientopaciity'></span>
            <div className='w-full flex flex-wrap items-center relative h-full'>
                <div className='xs:px-7 xl:px-0 xs:w-auto xl:w-[1050px] mx-auto justify-center text-center'>
                    <h1 
                        className='text-white tracking-[-3px] font-sora font-normal xs:text-[49px] xs:leading-[54px] ipad:text-[100px] ipad:leading-[137px]'>
                            {acfData.banner_title}
                    </h1>
                    <div className='flex justify-center flex-wrap mx-auto xl:w-[600px]'>
                        <p className='text-white text-xl leading-[36px] font-sora font-normal text-center'>
                            {acfData.banner_caption}
                            <span className='text-beige text-xl leading-[36px] font-sora font-normal ml-1'>Lower emissions with Star-Based Solar Technology</span>
                        </p>
                    </div>
                    <div className='w-full text-center absolute left-0 bottom-[150px]'>
                        <a href='#mission' className='scroll-arrow flex justify-center items-center mx-auto w-[36px] h-[36px] rounded-[50%] border-white border-[1px] cursor-pointer'>
                            <img className='w-[10px] h-[13px]' src="/images/down-arrow.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner