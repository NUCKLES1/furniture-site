"use client"

import React from 'react'
import Link from 'next/link'
import useCartStore from '../../../store'

const CartIcon = () => {
    const {items} = useCartStore()
  return (
    <div className='group relative'>
        <span className='absolute -top-1 -right-1 bg-black text-white h-3'>
            {items.length ? items.length : 0}
        </span>
    </div>
  )
}

export default CartIcon