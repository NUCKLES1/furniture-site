import React from 'react'

import { CiRepeat } from 'react-icons/ci';
import { productType } from './Data';

interface Props{
    selectedTab:string;
    onTabSelect:(tab: string) => void;
}

const HomeTabber = ({selectedTab, onTabSelect}:Props) => {
  return (
    <div className='flex items-center gap-1.5 text-sm font-semibold'>
        <div className='flex items-center gap-1.5'>
        {productType?.map((item)=>(
            <button key={item?.title}
            onClick={()=> onTabSelect(item?.title)}
            className={`border border-black px-4 py-1.5 md:px-md:py-2 rounded-full hover:bg-black hover:text-white ${selectedTab === item?.title && 'bg-black text-white'}`}>
                {item?.title}
            </button>
        ))}
        </div>
        <button className='w-5 h-5'>
            <CiRepeat />
        </button>
    </div>
  )
}

export default HomeTabber