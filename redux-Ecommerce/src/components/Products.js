import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../store/product-slice';
import { Link } from 'react-router-dom';

const Products = () => {
    const dispatch = useDispatch();
    const productItems = useSelector(state => {
        return state.product.productitems
    })

    const fetchURL = 'https://fakestoreapi.com/products';
    async function getData() {
        const result =  await axios.get( fetchURL )
        dispatch( productActions.addProductList( result.data.slice( 0, 12 )) );
    }
    
    useEffect(() => {        
        getData();
    }, [])

    const addCartHandler = ( i ) => {
        dispatch( productActions.addCart(i));
    }

    return (
        <div className='w-[1170px] mx-auto'>
            <h1 className='text-6xl text-black text-center font-semibold py-12'>Latest Collection</h1>
            <div className='w-full flex flex-wrap justify-between items-center'>
                {
                    productItems.map((item) => {
                        return (
                            <div 
                                className='w-[31%] mb-8 border-black rounded-2xl border-2 h-[400px] flex flex-wrap justify-center cursor-pointer' 
                                key={item.id}>
                                <Link to={`/ProductDetail/${item.id}`}>
                                    <div className='w-full'>
                                        <div className='bg-slate-100 w-full py-4 rounded-t-2xl'>
                                            <img src={item.image} alt="" className='w-[120px] h-[150px] object-contain mx-auto' />
                                        </div>
                                        <div className='bg-slate-100 p-4 w-full'>
                                            <h3 className='w-full text-sm'>{item.title}</h3>
                                            <span>{item.price}</span>
                                        </div>
                                    </div>
                                </Link>
                                <button 
                                    onClick={() => addCartHandler(item)} 
                                    className='mx-4 mb-4 bg-black text-white font-semibold text-xl text-center w-full py-1'>Add to Cart
                                </button>
                            </div>
                        )                        
                    })
                }
            </div>
        </div>
  )
}

export default Products