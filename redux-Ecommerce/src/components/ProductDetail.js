import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetail = (  ) => {
  const { id } = useParams();
  
  const myproduct = useSelector( state => {
    return state.product.productitems
  })
  const currentProduct = myproduct.find( item => item.id === parseInt(id) );

  return (
    <div>
      <h1 className='text-6xl text-blue-600 text-center font-semibold py-12'>Product Detail</h1>
      <div className='w-[1170px] mx-auto flex flex-wrap justify-between'>
        <div className='w-4/12 rounded-2xl border-2 border-black p-8'>
          <img src={currentProduct.image} alt="" />
        </div>
        <div className='w-7/12'>
          <h2 className='text-left text-4xl font-semibold pb-8 py-5 text-black'>{currentProduct.title}</h2>
          <p className='text-left text-xl font-normal pb-4 text-black'>{currentProduct.description}</p>
          <span className='flex text-left text-xl font-semibold pb-8 text-blue-600'>${currentProduct.price}</span>
          <button className='mb-4 bg-black text-white font-semibold text-xl text-center w-full py-4'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail