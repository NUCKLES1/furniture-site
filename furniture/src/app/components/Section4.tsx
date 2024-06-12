import React from 'react'
import Image from 'next/image'
import boy from "../components/images/boy.jpg"

const Section4 = () => {
    return (
        <div className='w-full h-[100vh]'>
            <div className='w-[98%] ml-[1%] max-sm:w-[96%] max-sm:ml-2 max-sm:mt-[-30%] bord-t'>
                <ul className='w-full mt-2 flex justify-between'>
                    <li className='tiny max-sm:text-[12px]'>OUR COLLECTIONS</li>
                    <li className='tiny max-sm:text-[12px]'>VIEW ALL</li>
                </ul>
            </div>
            <div className='slider'>
                <div className='slide-track mt-20 max-sm:mt-40'>
                    <div className='slide'>
                        <Image src={boy} alt='' className='h-full w-[100%] img object-cover' />
                        <p className='text-[32rem] max-sm:hidden ln text-[#231f20] bold '>DICE</p>
                    </div>
                    <div className='slide'>
                        <Image src={boy} alt='' className='h-full w-[100%] img object-cover' />
                        <p className='text-[14rem] max-sm:hidden lnn text-[#231f20] bold '>STRAIGHT</p>
                    </div>
                    <div className='slide'>
                        <Image src={boy} alt='' className='h-full w-[100%] img object-cover' />
                        <p className='text-[29rem] max-sm:hidden ln text-[#231f20] bold '>CURB</p>
                    </div>
                    <div className='slide'>
                        <Image src={boy} alt='' className='h-full w-[100%] img object-cover' />
                        <p className='text-[14rem] max-sm:hidden lnn text-[#231f20] bold '>STRAIGHT</p>
                    </div>
                    <div className='slide'>
                        <Image src={boy} alt='' className='h-full w-[100%] img object-cover' />
                        <p className='text-[29rem] max-sm:hidden ln text-[#231f20] bold '>KUBE</p>
                    </div>
                    <div className='slide'>
                        <Image src={boy} alt='' className='h-full w-[100%] img object-cover' />
                        <p className='text-[14rem] max-sm:hidden lnn text-[#231f20] bold '>STICK</p>
                    </div>
                    <div className='slide'>
                        <Image src={boy} alt='' className='h-full w-[100%] img object-cover' />
                        <p className='text-[14rem] max-sm:hidden lnn text-[#231f20] bold '>STRUP</p>
                    </div>
                    <div className='slide'>
                        <Image src={boy} alt='' className='h-full w-[100%] img object-cover' />
                        <p className='text-[29rem] max-sm:hidden ln text-[#231f20] bold '>KUBE</p>
                    </div>
                    <div className='slide'>
                        <Image src={boy} alt='' className='h-full w-[100%] img object-cover' />
                        <p className='text-[29rem] max-sm:hidden ln text-[#231f20] bold '>CURB</p>
                    </div>
                    <div className='slide'>
                        <Image src={boy} alt='' className='h-full w-[100%] img object-cover' />
                        <p className='text-[29rem] max-sm:hidden ln text-[#231f20] bold '>CURB</p>
                    </div>
                </div>
            </div>
            <div className='invisible relative'>
                <p>revenue</p>
            </div>
            <div className='invisible2'></div>
        </div>
    )
}

export default Section4