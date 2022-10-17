import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { productActions } from '../store/product-slice';

const CheckOut = () => {

    const checkoutData = useSelector( state => {
        return state.product.cartProduct;
    });
    const dispatch = useDispatch();
    const priceArray = checkoutData.map((item) => {
        return item.cartQuantity * item.price;
    });
    // console.log(priceArray, "::: PRICEARRAY CHECKOUT");
    const checkoutPrice = priceArray.reduce((acc, curr) => {
        return acc = acc + curr
    }, 0)


    return (
        <div>
            <div className='w-[1170px] mx-auto mb-8'>
                <h1 className='text-6xl text-black text-center font-semibold py-12'>In your Beg</h1>
                <div className='flex flex-wrap justify-between'>
                    <div className='w-6/12'>
                        <h2 className='text-left text-3xl font-semibold pb-8 text-black capitalize'>Personal Info</h2>
                        <form action="">
                            <div>
                                <input type="text" value='Full name' className='bg-slate-100 py-2 px-4 border border-black mb-4 w-full' />
                            </div>
                            <div>
                                <input type="text" value='Email' className='bg-slate-100 py-2 px-4 border border-black mb-4 w-full' />
                            </div>
                            <div>
                                <textarea name="" id="" cols="30" rows="10" className='bg-slate-100 py-2 px-4 border border-black mb-4 w-full'>Address</textarea>
                            </div>
                            <div>
                                <button type='submit' className='px-3 py-1 border border-black font-semibold text-1xl bg-slate-black'>Submit</button>
                            </div>                            
                        </form>
                    </div>
                    <div className='w-2/5'>
                        <h2 className='text-left text-3xl font-semibold pb-8 text-black capitalize'>items Info</h2>
                        <div className='flex flex-wrap bg-slate-100 p-4'>                            
                            <div className='w-full flex flex-wrap'>
                                {
                                    checkoutData.map( (item) => {
                                        return (
                                            <div key={item.id} className='flex flex-wrap justify-between items-start mb-3 pb-4 border-b-gray-300 border-b'>
                                                <div className='flex flex-wrap w-1/5'>
                                                    <img src={item.image} alt="" />
                                                </div>
                                                <div className='flex flex-wrap w-3/4'>
                                                    <h3 className='text-lg font-semibold w-full'>{item.title}</h3>
                                                    <span className='text-sm font-semibold'>{item.cartQuantity} x {item.price} = {item.cartQuantity * item.price }</span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='w-full flex justify-end'>
                                <span className='text-black text-lg font-semibold'>Total Amount:</span>
                                <span className='text-black text-lg font-semibold ml-1'>{checkoutPrice}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut