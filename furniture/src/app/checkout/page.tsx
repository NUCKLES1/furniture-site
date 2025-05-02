import dynamic from 'next/dynamic'
import React from 'react'

const CheckOut = dynamic(() => import('../components/Check'), {
  ssr: false
})

export default function page () {
  return (
    <div className='w-full h-full'>
      <CheckOut />
    </div>
  )
}

