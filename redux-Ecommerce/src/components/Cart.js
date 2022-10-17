import React, {useMemo} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { productActions } from '../store/product-slice';

const Cart = () => {
    const cartItems = useSelector( state => {
        return state.product.cartProduct;
    });

    const dispatch = useDispatch();
    
    const removeCartItem = ( id ) => {
        dispatch(productActions.removeCartItem(id));
    }

    const checkoutPrice = cartItems.reduce(( acc, item ) => {
        const totalItemPrice = item.price * item.cartQuantity
        return acc += totalItemPrice
    }, 0 );

    const decrementHandler = (i) => {
        dispatch(productActions.decrement(i));
    }

    const incrementHandler = (i) => {        
        dispatch(productActions.increment(i));
    }

    const checkoutHandler = () => {
        dispatch( productActions.checkOut(cartItems) );
    }

    return (
    <div className='w-[1170px] mx-auto py-8'>
        {
            cartItems.map((item, e, id) => {
                return (
                    <div className='w-full p-5 rounded-2xl border-2 border-gray-200 mb-6 bg-white flex flex-wrap justify-between' key={item.id}>
                        <div className='w-4/12 rounded-2xl border-2 border-black p-8'>
                            <img className='h-40 w-full object-contain' src={item.image} alt="" />
                        </div>
                        <div className='w-7/12'>
                            <h2 className='text-left text-3xl font-semibold pb-8 py-5 text-black'>{item.title}</h2>
                            <span className='w-full flex mb-8'>{item.price}</span>
                            <div className='w-full flex justify-end flex-wrap mt-8'>
                                <button 
                                    onClick={() => removeCartItem(item.id)}
                                    className='w-36 h-10 bg-black text-white text-base cursor-pointer'
                                >
                                    Remove
                                </button>
                                <button onClick={() => decrementHandler(item)} className='ml-5 px-3 py-1 border-black border border-r-0 font-semibold text-1xl bg-slate-100'>-</button>
                                <input className='px-3 py-1 border-black border border-r-0 w-9' type="text" value={item.cartQuantity} />
                                <button onClick={() => incrementHandler(item)} className='px-3 py-1 border-black border font-semibold text-1xl bg-slate-100'>+</button>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        <div className='w-full flex justify-end flex-wrap mt-8'>
            <h6 className='text-black text-xl font-bold'>Total: {checkoutPrice}</h6>
            <span className='text-black text-xl'></span>
        </div>
        <div className='w-full flex justify-end flex-wrap mt-8'>
            <Link to={"/CheckOut"}>
                <button 
                    onClick={() => checkoutHandler()}
                    className='w-36 h-10 bg-black text-white text-base cursor-pointer'
                    >CheckOut
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Cart