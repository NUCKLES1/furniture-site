import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-[60vh] bg-[#ebebeb]'>
            <div className='w-[74%] h-full ml-[25%] flex justify-between border-left'>
                <ul className='ml-2 text-[0.7em] text-[#231f20]'>
                    <li>SHOP</li>
                    <li>ABOUT</li>
                    <li>JOURNAL</li>
                    <li>PROFESSIONAL</li>
                    <li>PARTNER LOGIN</li>
                </ul>
                <ul className='ml-2 text-[0.7em] text-[#231f20]'>
                    <li>CONTACT</li>
                    <li className='text-[0.8em] pt-10 text-[#231f20]'>+234 814 880 5614</li>
                    <li className='text-[0.8em] text-[#231f20] '>danyxcharge@gmail.com</li>
                </ul>
                <ul className=' text-[0.6em] text-[#231f20]'>
                    <li>590 BOULEVARD ALBERT CAMUS</li>
                    <li>69400 VILLEFRANCHE-SUR-SAÔNE</li>
                    <li>FRANCE</li>
                    <li className='mt-4'>9H-18H</li>
                </ul>
            </div>
            <div className='flex relative w-full justify-between top-[-65%]'>
            <p className='text-[#231f20] bold text-[10.5rem]'>LYON</p>
            <p className='text-[#231f20] bold text-[10.5rem]'>BETHON</p>
            </div>
            <ul className='flex relative ml-2 underline text-[#231f20] top-[-70%] bold text-[8px]'>
                <li>T&C</li>
                <li className='pl-[24%]'>LEGAL NOTICE</li>
                <li className='pl-[10%]'>QUALITY AND CSR</li>
                <li className='pl-[36%]'>NEWSLETTER</li>
                <li className='pl-[8%]'>INSTAGRAM</li>
            </ul>
        </div>
    )
}

export default Footer