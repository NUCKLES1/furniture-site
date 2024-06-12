"use client"
import React from 'react'

const Section = () => {
    return (
        <div className='w-full h-[100vh]'>
            <div className='h-full w-full max-sm:h-[100vh]'>
            </div>
            <div className='absolute w-full h-full justify-center text-center max-sm:top-0 top-10'>
                <p className='bigi text-[150px] md:text-[85px] max-sm:text-[40px]'>NUCKLES DAAN</p>
                <ul className='w-full items-center md:hidden justify-center text-center tiny flex'>
                    <li className='pt-5 cursor-pointer text-center'>SHOP</li>
                    <li className='ml-8 pt-5 cursor-pointer text-center'>ABOUT</li>
                    <li className='ml-8 pt-5 cursor-pointer text-center'>JOURNAL</li>
                    <li className='ml-8 pt-5 cursor-pointer text-center'>JOURNAL</li>
                </ul>
                <div className='flex w-full mt-14 md:mt-3 text-center justify-center'>
                 <ul className='flex-row justify-center items-center flex flex-wrap gap-6 h-full w-[60%]'>
                    <li className='text-4xl text-[#231f20] md:text-[55px] bold hov'><p className='tiny liney md:pb-3'> <br />PROJECT</p>NUCKLES DAAN</li>
                    <li className='text-4xl text-[#231f20] md:text-[55px]  hov bold'><p className='tiny liney md:pb-3'> <br />COLLECTIONS</p>NEW DICE</li>
                    <li className='text-4xl text-[#231f20] md:text-[55px]  hov bold'><p className='tiny liney md:pb-3'> <br />COLLECTIONS</p>NEW DICE</li>
                    <li className='text-4xl text-[#231f20] md:text-[55px]  hov bold'><p className='tiny liney md:pb-3'> <br />COLLECTIONS</p>DICE</li>
                    <li className='text-4xl text-[#231f20] md:text-[55px]  hov bold'><p className='tiny liney md:pb-3'> <br />COLLECTIONS</p>TWIST</li>
                    <li className='text-4xl text-[#231f20] md:text-[55px]  hov bold'><p className='tiny liney md:pb-3'> <br />COLLECTIONS</p>TWIST</li>
                    <li className='text-4xl text-[#231f20] md:text-[55px]  hov bold'><p className='tiny liney md:pb-3'> <br />SESSIONS</p>STRUT RUST</li>
                    <li className='text-4xl text-[#231f20] md:text-[55px]  hov bold'><p className='tiny liney md:pb-3'> <br />COLABBB</p>SOFFFA</li>
                 </ul>
                </div>
            </div>
        </div>
    )
}

export default Section