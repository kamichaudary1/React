import React, { useEffect, useState } from 'react'

const Footer = () => {

  //setting up states
  const [ footerdata, setFooterData ] = useState( [] );

// fetching data
  const getData = async( api ) => {
    try {
      const footerData = 'http://localhost/starform/wp-json/acf/v3/options/options';
      const response = await fetch( footerData );
      const result = await response.json();
      setFooterData( result.acf );
    }catch( error ){
      console.log('Data not Loading');
    }
  }

  useEffect(() => {
    getData( ); 
  }, [])

  return (
    <div className='bg-[#0C1623] xs:pt-12 md:pt-[85px] pb-[30px]'>
      <div className='xs:px-4 md:px-8 laptopview:px-0 laptopview:w-[1380px] mx-auto'>

        <div className='flex flex-wrap justify-between'>  
          <div className='flex flex-wrap justify-between lg:w-36 w-full md:mb-0 xs:mb-14'>
            <img className='w-[132px] h-[22px]' src={footerdata.footer_logo} alt="" />
            <img className='lg:hidden' src={footerdata.footer_twitter_icon} alt="" />
          </div>
          <div className='lg:w-[300px] xs:mb-10'>
            <span className='w-full flex font-sora text-white text-sm tracking-[3px] mb-4 uppercase font-medium'>{footerdata.footer_contactus}</span>
            <a href="" 
              className='w-full flex font-sora text-white xs:text-[22px] md:text-3xl tracking-[1px] mb-4 font-normal text-left text-dec underline-offset-8 underline'>
              {footerdata.footer_email}
            </a>
            <a href="tel:+44 (0)1235 428199" 
              className='w-full flex font-sora text-white xs:text-[22px] md:text-3xl tracking-[1px] mb-4 text-left font-normal underline-offset-8 underline'>
              {footerdata.footer_tel}
            </a>
          </div>
          <div className='lg:w-[360px] md:w-[45%] md:mt-7 lg:mt-0'>
            <span className='w-full flex font-sora text-white text-xs tracking-[3px] xs:mb-6 md:mb-4 uppercase font-medium'>{footerdata.footer_navigation}</span>
            <div className='flex flex-wrap justify-between w-full items-start w-full'>
              <ul className='xs:inline-block md:flex flex-wrap xs:w-[55%] md:w-auto lg:w-7/12'>
                {
                  footerdata && footerdata.footer_navlinks1 && footerdata.footer_navlinks1.map(( navLink, i ) => {
                    return (
                      <li key={i} 
                        className='w-full flex font-sora text-opacity-60 text-white text-sm tracking-[3px] mb-4 capitalize font-normal text-left'>
                        { navLink.footer_navlinks1_text }
                      </li>
                    )
                  })
                }
              </ul>
              <ul className='xs:inline-block md:flex flex-wrap xs:[43%] lg:w-5/12'>
                {
                  footerdata && footerdata.footer_navlinks2 && footerdata.footer_navlinks2.map(( navLink ) => {
                    return (
                      <li key={ navLink.id } 
                        className='w-full flex font-sora text-opacity-60 text-white text-sm tracking-[3px] mb-4 capitalize font-normal text-left'>
                        { navLink.footer_navlinks2_text }
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          <div className='w-[360px] flex flex-wrap justify-between md:mt-0 mt-7 lg:mt-0'>
            <div>
              <span className='w-full flex font-sora text-white text-xs tracking-[3px] mb-4 uppercase font-medium'>legal</span>
              <ul>
                {
                  footerdata && footerdata.footer_legal_links && footerdata.footer_legal_links.map(( legalLink ) => {
                    return (
                      <li key={ legalLink.id } className='w-full flex font-sora text-opacity-60 text-white text-sm tracking-[3px] mb-4 capitalize font-medium'>
                        { legalLink.footerlegal_link_text }
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div>
              <img className='lg:block hidden' src={footerdata.footer_twitter_icon} alt="" />
            </div>
          </div>
        </div>

        <div className='w-full flex flex-wrap justify-between xs:mt-7 md:mt-20'>
          <ul className='flex flex-wrap items-start tablet:w-2/4'>
            {
              footerdata && footerdata.footer_copyright && footerdata.footer_copyright.map((item) => {
                return (
                  <li className='flex font-sora text-white text-xs capitalize font-normal'>{item.footer_copyright_text}</li>
                )
              })
            }
            {/* <li className='flex font-sora text-white text-xs capitalize font-normal'>© StarForm 2022</li>
            <li className='flex mx-1 text-white text-xs leading-4'>|</li>
            <li className='flex font-sora text-white text-xs capitalize font-normal'>All rights reserved.</li> */}
          </ul>
          <ul className='flex flex-wrap tablet:justify-end tablet:w-2/4 xs:mt-4 md:mt-0'>
            <li className='flex font-sora text-white text-xs capitalize font-normal'>Website design by</li>
            <li className='flex font-sora text-white text-xs capitalize font-normal ml-1'>
              <img className='w-[81px] h-[11px]' src={footerdata.footer_framework_logo} alt="" />
            </li>
          </ul>
        </div>

      </div>

    </div>
  )
}

export default Footer;
