import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import Banner from './Banner';
import { useSelector } from 'react-redux';
import { productActions } from '../store/product-slice';

const Header = ( ) => {
  const cartNotification = useSelector( state => {
    return state.product.totalQty;
  });

  return (
  <Fragment>
    <header className='bg-slate-100 w-full'>
        <div className='h-16 w-[1170px] mx-auto flex flex-wrap justify-between items-center'>
          <Link to="/">
            <span className='text-4xl font-semibold text-black'>Logo</span>
          </Link>
            <ul className='flex flex-wrap justify-between w-2/6'>
                <li className='text-black text-lg cursor-pointer'><Link to="/">Home</Link></li>
                <li className='text-black text-lg cursor-pointer'>Shoes</li>
                <li className='text-black text-lg cursor-pointer'>Hoddies</li>
            </ul>
            <Link to="/Cart">
              <button className='bg-black text-white text-base font-semibold px-4 py-2'>Cart {cartNotification}</button>
            </Link>
        </div>
    </header>
    <Banner />
  </Fragment>
  )
}

export default Header