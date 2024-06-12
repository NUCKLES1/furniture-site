import React from 'react'
import Image from 'next/image'
import boy from "../components/images/boy.jpg"

const Section3 = () => {
    return (
        <div className='w-[98%] ml-[1%] max-sm:w-[96%] max-sm:ml-2 mt-16 h-full bg-[#ebebeb] mb-48'>
            <div className='w-full pt-20 text-center max-sm:block flex'>
                <p className='tiny w-24 max-sm:w-auto text-[#231f20] text-left max-sm:text-center max-sm:text-[0.9rem]'>A never-before-seen design anchored in our collective memory.</p>
                <p className='text-7xl max-sm:text-5xl ml-[10%] mt-2 max-sm:ml-0 bold text-[#231f20]'>I CREATE, YOUR IMAGINATIONS</p>
            </div>
            <div className='flex max-sm:block max-sm:text-center w-full h-[30rem]'>
            <div className='w-[30%] max-sm:w-full max-md:w-[60%] max-sm:mt-28 h-full'>
                    <Image src={boy} alt='' className='w-full h-full object-cover' />
                </div>
                <p className='text-7xl ml-[26%] max-sm:ml-0 max-sm:mt-[-145%] max-md:ml-[1rem]  max-sm:text-5xl bold text-[#231f20]'>WITH A TASTE<br />OF DEJA-VU.</p>
            </div>
            <div className='relative text-left max-sm:w-full w-[43%] max-sm:mt-10 mt-[-4rem] max-sm:ml-0 ml-[40%]'>
                <p className='text-[#231f20] texty max-sm:text-[2rem] text-left'>
                    <span className='tinny pt-[-2rem] max-sm:text-[18px] pr-6 max-sm:pr-28'>About</span>
                    Our creations are singular, never seen elsewhere
                    and do not follow fashion. Nevertheless, they are
                    anchored in a history. Our references are linked
                    to what inspires and drives us: an artistic movement,
                    an architectural style, a way of life... Our French
                    culture also influences
                    us unconsciously. Let's cultivate that.
                </p>
                <div className='w-full text-right max-sm:text-left mt-12'>
                    <p className='tiny bold underline max-sm:text-[12px]'>MORE ABOUT</p>
                </div>
            </div>
        </div>
    )
}

export default Section3