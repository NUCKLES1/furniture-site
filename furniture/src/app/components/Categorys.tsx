"use client"
import React from 'react'
import { CATEGORIES_QUERYResult } from '../../../sanity.types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Categorys = ({categories}:{categories: CATEGORIES_QUERYResult}) => {

  const pathname = usePathname

  return (
    <div className='hidden md:inline-flex w-1/3 '>
    {categories?.map((category) => (
        <Link 
        key={category?._id}
        href={`/category/${category?.slug?.current}`}
        className={`hover:text-black relative group ${pathname === category?.slug?.current && "text-black"}`}>
            {category?.title}
            <span className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 text-black ${pathname === category?.slug?.current && "w-1/2"}`}/>
            <span className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 text-black ${pathname === category?.slug?.current && "w-1/2"}`}/>
          
        </Link>
    ))}






 {/*  <div className="hider overflow">
    <ul className="border bg-[#231f20]">
      <li className="w-full h-[52px] pt-5 text-[#ebebed] hovee text-center">
        TABLE
      </li>
      <li className="w-full h-[52px] pt-5 hovee text-[#ebebed] text-center">
        SEAT
      </li>
      <li className="w-full h-[52px] pt-5 hovee text-[#ebebed] text-center">
        STORAGE
      </li>
      <li className="w-full h-[52px] pt-5 hovee text-[#ebebed] text-center">
        ACCESSORIES
      </li>
      <li className="w-full h-[52px] pt-5 hovee text-[#ebebed] text-center">
        FRAGS
      </li>
    </ul>
  </div>
  */}
    </div>
  )
}

export default Categorys