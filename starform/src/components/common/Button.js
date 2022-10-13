import React from 'react'

const Button = ( props ) => {
  return (
    <button 
        onClick={props.onClick}
        className='default-btn w-[190px] h-[60px] bg-[#3c76b6] text-center text-white text-base font-medium capitalize relative transition-all hover:bg-beige overflow-hidden'>
            {props.children}            
        </button>
  )
}

export default Button