"use client"
import NextVideo from 'next-video'
import React from 'react'
import Video from 'next-video'
import BackgroundVideo from 'next-video/background-video'
import Nav from './Nav'


const Section = () => {
    return (
        <div className='w-full h-[100vh]'>
           <div className='h-full w-full max-sm:h-[100vh]'>
                <BackgroundVideo src='https://www.lyon-beton.com/wp-content/uploads/2024/04/VIDEO-16-9-HOME-1.webm' className='max-sm:h-[100vh]' autoPlay muted loop playsInline/>
            </div>
            <div className=' w-full absolute justify-center text-center max-sm:top-0 top-0 mt-4'>
                <p className='bigi text-[145px] max-md:text-[75px] max-md:mt-[-0.9rem] mt-[-4rem] max-sm:text-[44.7px]'>NUCKLES DAAN</p>
                <ul className='w-full items-center mt-[-2rem] max-md:mt-[-1rem] justify-center text-center tiny flex'>
                    <li className='pt-5 cursor-pointer text-center'>SHOP</li>
                    <li className='ml-8 pt-5 cursor-pointer text-center'>ABOUT</li>
                    <li className='ml-8 pt-5 cursor-pointer text-center'>JOURNAL</li>
                    <li className='ml-8 pt-5 cursor-pointer text-center'>JOURNAL</li>
                </ul>
                <div className='flex w-full mt-40 max-md:mt-20 text-center justify-center'>
                    <ul className='flex-row justify-center items-center flex flex-wrap gap-6 h-full w-[60%] max-sm:w-[60%] max-md:w-[80%]'>
                        <li className='text-4xl text-[#231f20] max-md:text-[30px] bold hov'><p className='tiny liney md:pb-3'> <br />PROJECT</p>NUCKLES DAAN</li>
                        <li className='text-4xl text-[#231f20] max-md:text-[30px]  hov bold'><p className='tiny liney md:pb-3'> <br />COLLECTIONS</p>NEW DICE</li>
                        <li className='text-4xl text-[#231f20] max-md:text-[30px]  hov bold'><p className='tiny liney md:pb-3'> <br />COLLECTIONS</p>NEW DICE</li>
                        <li className='text-4xl text-[#231f20] max-md:text-[30px]  hov bold'><p className='tiny liney md:pb-3'> <br />COLLECTIONS</p>DICE</li>
                        <li className='text-4xl text-[#231f20] max-md:text-[30px]  hov bold'><p className='tiny liney md:pb-3'> <br />COLLECTIONS</p>TWIST</li>
                        <li className='text-4xl text-[#231f20] max-md:text-[30px]  hov bold'><p className='tiny liney md:pb-3'> <br />COLLECTIONS</p>TWIST</li>
                        <li className='text-4xl text-[#231f20] max-md:text-[30px]  hov bold'><p className='tiny liney md:pb-3'> <br />COLLECTIONS</p>TWIST</li>
                        <li className='text-4xl text-[#231f20] max-md:text-[30px]  hov bold'><p className='tiny liney md:pb-3'> <br />SESSIONS</p>STRUT RUST</li>
                        <li className='text-4xl text-[#231f20] max-md:text-[30px]  hov bold'><p className='tiny liney md:pb-3'> <br />COLABBB</p>SOFFFA</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Section