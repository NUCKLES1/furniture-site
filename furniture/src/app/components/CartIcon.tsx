"use client"

import React from 'react'
import Link from 'next/link'
import useCartStore from '../../../store'

const CartIcon = () => {
    const itemCount = useCartStore((state) => state.items.reduce((total, item) => total + item.quantity, 0))
  return (
    <div className='h-full w-4 pt-3 ml-2 border-l border-black bg-[#03a77e]'>
        <span className=' -right-1 text-white text-[12px] h-full'>
          {itemCount}
        </span>
    </div>
  )
}

export default CartIcon


