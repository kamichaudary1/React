import React, { Fragment, useEffect, useState } from 'react';

import Banner from './Banner';
import GetInTouch from './GetInTouch';
import GlobalChallenges from './GlobalChallenges';
import Media from './Media';
import Membership from './Membership';
import Mission from './Mission';
import SpaceSolar from './SpaceSolar';

const Content = () => {
  const [ homeContent, setHomeContent ] = useState([]);
  const [ hasError, setHasError ] = useState(false);

  const fetchPageData = async () => {
    const fetchURl =  'http://localhost/starform/wp-json/wp/v2/pages/12';
    try {
      const response = await fetch(fetchURl)
      const data = await response.json();
      setHomeContent(data.ACF);
    } catch (error) {
      setHasError(true)
      console.log(error + "Data not found");
    }
  };

  useEffect(() => {
    fetchPageData()
  }, [])

  return (
    <Fragment>
      {
        hasError 
          ? <p className='text-center w-full h-3/6 flex justify-center items-center text-xl text-black'>Data not Found</p>
          : <>
              <Banner acfData={homeContent} />
              <Mission acfData={homeContent} />
              <GlobalChallenges acfData={homeContent} />
              <SpaceSolar acfData={homeContent} />
              <Membership acfData={homeContent} />
              <Media acfData={homeContent} /> 
              <GetInTouch acfData={homeContent} />
            </>
      }
    </Fragment>
  )
}

export default Content