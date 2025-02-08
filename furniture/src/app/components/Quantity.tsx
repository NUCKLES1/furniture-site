import React from 'react'
import { Product } from '../../../sanity.types';
import { PiMinus, PiPlus } from 'react-icons/pi';

interface Props {
  product:Product;
  className?: string;
}

const Quantity = ({product, className}:Props) => {
 
    const itemCount = 4;

  return (
    <div className='flex items-center gap-1 text-base'>
        <button className={'p-2 text-center h bg-black text-white rounded-md'}>
            <PiMinus />
        </button>
        <span className='font-semibold w-8 text-center'>{itemCount}</span>
        <button className='p-2 bg-black text-white text-center rounded-md'><PiPlus /></button>
    </div>
  )
}

export default Quantity