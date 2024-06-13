import React from 'react'
import Image from 'next/image'
import pic from "../components/images/next.svg"
import dc1 from "../components/images/dc1.png"
import dc2 from "../components/images/dc2.png"
import dc3 from "../components/images/dc3.png"
import dc4 from "../components/images/dc4.png"

const Section2 = () => {
    return (
        <div className='w-full h-[100vh] max-sm:h-auto bg-[#ebebeb]'>
            <div className='w-[98%] max-sm:w-[98%] ml-[1%] pt-14 flex mt-10 justify-between max-sm:block'>
                <p className='text-7xl bold max-sm:text-[7rem] text-[#231f20]'>SHOP</p>
                <p className='text-[#231f20] tiny pt-14 relative max-sm:top-[2rem] mt-4 max-sm:text-[0.8rem] max-sm:pl-2 underline'>VISIT SHOP</p>
                <p className='text-7xl max-sm:text-[7rem] bold text-[#231f20] max-sm:mt-[-110px]'>NOW</p>
            </div>
            <div className='w-full mt-12 flex ml-3 md:h-[35vh] md:w-[98%] max-sm:ml-0 max-sm:block max-sm:h-auto h-[60vh]'>
                <div className='w-[24%] max-sm:w-[96%] max-sm:ml-2 max-sm:h-[25rem] h-full ima overflow-hidden bg-[#e3e3e3]'>
                    <div className='text-left pt-4 pl-2 text-[#231f20] cont'>
                        <p className='liney'>Dice</p>
                        <p className='text-[12px] mt-1'>Configuration 14</p>
                    </div>
                    <Image src={dc1} width={200} height={200} alt='' className='mt-8 md:mt-[-1rem] cale ml-10 max-sm:ml-[24%] md:ml-0' />
                    <div className='flex mt-14 conti ml-2'>
                        <p className='text-[10px] bold mt-8'>EUR 4110</p>
                        <p className='ml-2 text-[10px] mt-8'>REF.DC-059</p>
                    </div>
                </div>
                <div className='w-[24%] max-sm:w-[96%] max-sm:ml-2 max-sm:h-[25rem]
                 h-full ima overflow-hidden ml-2 max-sm:mt-2 bg-[#e3e3e3]'>
                    <div className='text-left pt-4 pl-2 text-[#231f20] cont'>
                        <p className='liney'>Dice</p>
                        <p className='text-[12px] mt-1'>Configuration 14</p>
                    </div>
                    <Image src={dc2} width={200} height={200} alt='' className='mt-8 max-md:mt-[-1rem] cale ml-10 max-sm:ml-[24%] max-md:ml-0' />
                    <div className='flex mt-14 conti ml-2'>
                        <p className='text-[10px] bold mt-8'>EUR 4110</p>
                        <p className='ml-2 text-[10px] mt-8'>REF.DC-059</p>
                    </div>
                </div>
                <div className='w-[24%] max-sm:w-[96%] max-sm:ml-2 max-sm:h-[25rem]
                 h-full ima overflow-hidden ml-2 max-sm:mt-2 bg-[#e3e3e3]'>
                    <div className='text-left pt-4 pl-2 text-[#231f20] cont'>
                        <p className='liney'>Dice</p>
                        <p className='text-[12px] mt-1'>Configuration 14</p>
                    </div>
                    <Image src={dc3} width={200} height={200} alt='' className='mt-8 md:mt-[-1rem] cale ml-10 max-sm:ml-[24%] md:ml-0' />
                    <div className='flex mt-14 conti ml-2'>
                        <p className='text-[10px] mt-8 bold'>EUR 4110</p>
                        <p className='ml-2 text-[10px] mt-8'>REF.DC-059</p>
                    </div>
                </div>
                <div className='w-[24%] max-sm:w-[96%] max-sm:ml-2 max-sm:h-[25rem]
                 h-full ima overflow-hidden ml-2 max-sm:mt-2 bg-[#e3e3e3]'>
                    <div className='text-left pt-4 pl-2 text-[#231f20] cont'>
                        <p className='liney'>Dice</p>
                        <p className='text-[12px] mt-1'>Configuration 14</p>
                    </div>
                    <Image src={dc4} width={200} height={200} alt='' className='mt-8 md:mt-[-1rem] cale ml-10 max-sm:ml-[24%] md:ml-0' />
                    <div className='flex mt-12 conti ml-2'>
                        <p className='text-[10px] mt-8 bold'>EUR 4110</p>
                        <p className='ml-2 text-[10px] mt-8'>REF.DC-059</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2