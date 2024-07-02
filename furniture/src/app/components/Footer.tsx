import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-[80vh] overflow-hidden max-sm:h-[85vh] bg-[#ebebeb]'>
            <div className='w-[74%] max-sm:w-[95%] max-sm:ml-4 h-full ml-[25%] flex max-sm:block justify-between border-left'>
                <ul className='ml-2 text-[0.7em] text-[#231f20]'>
                    <li>SHOP</li>
                    <li>ABOUT</li>
                    <li>JOURNAL</li>
                    <li>PROFESSIONAL</li>
                    <li>PARTNER LOGIN</li>
                </ul>
                <ul className='ml-2 text-[0.7em] max-sm:mt-8 text-[#231f20]'>
                    <li className='max-sm:text-[8px]'>CONTACT</li>
                    <li className='text-[0.8em] max-sm:mt-20 pt-10 text-[#231f20]'>+234 814 880 5614</li>
                    <li className='text-[0.8em] text-[#231f20] '>danyxcharge@gmail.com</li>
                </ul>
                <ul className=' text-[0.6em] max-sm:relative max-sm:text-right max-sm:mt-[-35%] text-[#231f20]'>
                    <li>590 BOULEVARD ALBERT CAMUS</li>
                    <li>69400 VILLEFRANCHE-SUR-SAÔNE</li>
                    <li>FRANCE</li>
                    <li className='mt-4'>9H-18H</li>
                </ul>
            </div>
            <div className='flex max-sm:ml-3 lowercase relative max-sm:block max-sm:mt-32 w-full justify-between top-[-65%]'>
            <p className='text-[#231f20] bold max-md:text-[75px] text-[13rem] max-sm:text-[115px]'>LYON</p>
            <p className='text-[#231f20] bold max-sm:mt-[-5rem] max-sm:text-[115px] max-md:text-[75px] text-[13rem]'>BETHON</p>
            </div>
            <ul className='flex relative max-md:w-[98%] ml-2 max-sm:ml-4 underline text-[#231f20] top-[-75%] bold text-[8px] max-sm:mt-14'>
                <li>T&C</li>
                <li className='pl-[24%] max-sm:pl-4'>LEGAL NOTICE</li>
                <li className='pl-[10%] max-md:pl-[5%] max-sm:pl-10'>QUALITY AND CSR</li>
                <li className='pl-[36%] max-md:pl-[24%] max-sm:pl-12'>NEWSLETTER</li>
                <li className='pl-[8%]'>INSTAGRAM</li>
            </ul>
        </div>
    )
}

export default Footer