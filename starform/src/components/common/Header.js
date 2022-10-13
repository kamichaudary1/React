import React, { useEffect, useState } from 'react'

const Header = () => {

    const [togglenav, setToggleNav] = useState(false);
    const [headerdata, setHeaderData] = useState([]);

    // Fetching Data
   
    const getData = async(  ) => {
        try {
            const headerContent = 'http://localhost/starform/wp-json/acf/v3/options/options';
            const response = await fetch( headerContent );
            const result = await response.json();
            setHeaderData( result.acf );
        }catch(error) {
            console.log('Data loading error');
        }
    }

    useEffect(() => {
        getData( );
    }, [])

    // NAV Toggle Handler for Mobile Responsive View
    const navHandler = () => {
        setToggleNav(!togglenav);
    }

    return (
        <header className='absolute w-full top-0 left-0 z-10'>
            <img className='xs:visible xs:block tablet:hidden absolute top-9 right-6' src="images/nav-icon.png" alt="" onClick={navHandler} />
            <div className='xs:w-[auto] laptopview:w-[1380px] xs:px-6 mx-auto xs:pt-9 tablet:pt-[50px] flex flex-wrap justify-between'>
                <a href="/" className=''>
                    <img className='w-[174px] h-[29px]' src={headerdata.header_logo} alt="" />
                </a>
                <nav className={`lg:w-[735px] 1xl:w-[815px] tablet:z-10 tablet:opacity-100 tablet:visible tablet:block ${togglenav ? "z-10 visible opacity-100" : "opacity-0 z-auto invisible"}`}>
                    <ul className='flex flex-wrap justify-between w-full tablet:w-auto bg-black tablet:bg-transparent mt-10 tablet:mt-0 absolute left-0 tablet:relative p-5 tablet:p-0'>
                        {
                            headerdata && headerdata.navlist && headerdata.navlist.map((item) => {
                                return (
                                    <li key={item.navlink_link} className='text-white font-normal text-base hover:text-[#E8B222] cursor-pointer md:mr-3 w-full tablet:w-auto text-left'>
                                        {item.navlink_text}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
