import React from 'react'
import Image from 'next/image'
import img1 from "../components/images/1.png"
import img2 from "../components/images/2.png"
import img3 from "../components/images/3.png"
import img4 from "../components/images/4.png"

const Section6 = () => {
  return (
    <div className='w-full max-sm:w-[96%] pb-40 max-sm:ml-2 h-[auto] max-sm:mt-[10rem] text-center'>
      <Image src={img1} alt='' data-scroll data-scroll-speed="0.4" className='w-[25rem] ml-[15.5%] mb-[-15rem] max-sm:hidden h-[20rem] object-cover' />
      <Image src={img1} alt='' className='w-[25rem] max-sm:mt-[0rem] hidden max-sm:block ml-[15.5%] max-sm:h-[13rem] max-sm:w-[55%] max-sm:ml-8 h-[20rem] object-cover' />
      <div className='w-[30%] max-sm:w-full ml-[35%] max-sm:relative max-sm:ml-0 text-center mt-[-5rem] pt-20 relative h-20'>
        <p className='text-5xl bold max-sm:text-[54px] max-sm:pt-[2rem] text-[#231f20]'>NEWSLETTER</p>
        <p className='text-[#231f20] mt-3 max-sm:text-[27px] line text-[18px] line-height'>-10% OFF YOUR 1ST ORDER</p>
        <p className='tiny mt-6 max-sm:text-[15px] line-height-1'>Sign up for our newsletter
          to find out all about us, our news, our offers...
          We're not too chatty and we'll protect your email
          like the apple of our eye.Your email
        </p>
        <div className='text-[#575555] max-sm:mt-24 max-sm:w-full'>
          <input type="text" placeholder='YOUR EMAIL' className='bg-transparent p-3 mt-8 border-line max-sm:w-full' />
        </div>
        <button className='tiny hovee bordy max-sm:w-full bg-[#262324] text-white px-24 py-5 mt-5'>SUBSCRIBE</button>
      </div>
      <Image src={img2} alt='' data-scroll data-scroll-speed="0.3" className='w-[6rem] mt-[4.5rem] ml-[75%] h-[8rem] max-sm:hidden object-cover' />
      <Image src={img2} alt='' className='hidden max-sm:block w-[6rem] mt-[4.5rem] max-sm:mt-[-7rem] max-sm:ml-[66%] ml-[75%] h-[8rem] object-cover' />
      <Image src={img3} alt='' data-scroll data-scroll-speed="0.3" className=' w-[12rem] mt-[4rem] h-[16rem] max-sm:hidden object-cover' />
      <Image src={img3} alt='' className='max-sm:w-[8rem] max-sm:block max-sm:h-[10rem] hidden object-cover max-sm:ml-[-1rem] max-sm:mt-[26rem]' />
      <Image src={img4} alt='' data-scroll data-scroll-speed="0.4" className=' w-[18rem] max-sm:hidden mt-[-12rem] ml-[75%] h-[14rem] object-cover' />
      <Image src={img4} alt='' className=' max-sm:w-[10rem] hidden max-sm:block max-sm:mt-[-2rem] max-sm:ml-[58%] max-sm:h-[8rem] object-cover' />



      <div className='h-[auto] max-sm:mt-52 w-full max-sm:w-[98%] max-sm:ml-1 text-left border-top'>
        <p className='text-7xl ml-2 max-sm:ml-0 max-sm:text-6xl bold text-[#231f20] pt-16'>OUR PRODUCTS</p>
        <div className='w-full ml-[1%] max-sm:ml-0 mt-24 flex max-sm:block max-sm:h-auto h-[60vh] max-md:h-[45vh]'>
          <div className='w-[24%] max-sm:w-full max-sm:ml-0 max-sm:h-[25rem] h-full ima overflow-hidden bg-[#e3e3e3]'>
            <div className='text-left pt-4 pl-2 text-[#231f20] cont'>
              <p className='liney'>Dice</p>
              <p className='text-[12px] mt-1'>Configuration 14</p>
            </div>
            <Image src="/deck1.jpg" width={200} height={200} alt='' className='mt-8 cale ml-12 max-sm:mt-14 max-sm:ml-[24%] max-md:mt-[-2rem] max-md:ml-0' />
            <div className='flex mt-8 conti ml-2'>
              <p className='text-[10px] bold mt-8'>EUR 4110</p>
              <p className='ml-2 text-[10px] mt-8'>REF.DC-059</p>
            </div>
          </div>
          <div className='w-[24%] max-sm:hidden h-full ima overflow-hidden ml-2 text-left text-[#231f20] max-sm:mt-2'>
            <button className='ml-2 tiny underline'>VIEW ALL TABLES</button>
            <p className=' text-5xl bold ml-2 text-[#231f20] max-md:text-3xl mt-2'>TABLES</p>
            <p className='text-[10px] w-[70%] line ml-2 mt-[73%] max-md:mt-[10%] max-md:w-[90%]'>Table: noun. A piece of furniture that serves
              above all to foster a sense of community. Homo
              erectus had the hearth,
              modern man has the table. Sometimes more than one.</p>
          </div>
          <div className='w-[24%] max-sm:w-full max-sm:ml-0 max-sm:h-[25rem] h-full ima overflow-hidden ml-2 max-sm:mt-2 bg-[#e3e3e3]'>
            <div className='text-left pt-4 pl-2 text-[#231f20] cont'>
              <p className='liney'>Dice</p>
              <p className='text-[12px] mt-1'>Configuration 14</p>
            </div>
            <Image src="/deck2.png" width={200} height={200} alt='' className='mt-8 cale ml-12 max-sm:mt-14 max-sm:ml-[24%] max-md:mt-[-2rem] max-md:ml-0' />
            <div className='flex mt-8 conti ml-2'>
              <p className='text-[10px] bold mt-8'>EUR 4110</p>
              <p className='ml-2 text-[10px] mt-8'>REF.DC-059</p>
            </div>
          </div>
          <div className='w-[24%] max-sm:w-full max-sm:ml-0 max-sm:h-[25rem]
                 h-full ima overflow-hidden ml-2 max-sm:mt-2 bg-[#e3e3e3]'>
            <div className='text-left pt-4 pl-2 text-[#231f20] cont'>
              <p className='liney'>Dice</p>
              <p className='text-[12px] mt-1'>Configuration 14</p>
            </div>
            <Image src="/deck3.png" width={200} height={200} alt='' className='mt-8 cale ml-12 max-sm:mt-14 max-sm:ml-[24%] max-md:mt-[-2rem] max-md:ml-0' />
            <div className='flex mt-8 conti ml-2'>
              <p className='text-[10px] mt-8 bold'>EUR 4110</p>
              <p className='ml-2 text-[10px] mt-8'>REF.DC-059</p>
            </div>
          </div>
        </div>
        <div className='w-full ml-[1%] max-sm:ml-0 mt-2 flex max-sm:block max-sm:h-auto h-[60vh] max-md:h-[45vh]'>
          <div className='w-[24%] max-sm:w-full max-sm:ml-0 max-sm:h-[25rem] h-full ima overflow-hidden bg-[#e3e3e3]'>
            <div className='text-left pt-4 pl-2 text-[#231f20] cont'>
              <p className='liney'>Dice</p>
              <p className='text-[12px] mt-1'>Configuration 14</p>
            </div>
            <Image src="/chair1.png" width={200} height={200} alt='' className='mt-8 cale ml-12 max-sm:mt-14 max-sm:ml-[24%] max-md:mt-[-2rem] max-md:ml-0' />
            <div className='flex mt-8 conti ml-2'>
              <p className='text-[10px] bold mt-8'>EUR 4110</p>
              <p className='ml-2 text-[10px] mt-8'>REF.DC-059</p>
            </div>
          </div>
          <div className='w-[24%] max-sm:w-full max-sm:ml-0 max-sm:h-[25rem]
                 h-full ima overflow-hidden ml-2 max-sm:mt-2 bg-[#e3e3e3]'>
            <div className='text-left pt-4 pl-2 text-[#231f20] cont'>
              <p className='liney'>Dice</p>
              <p className='text-[12px] mt-1'>Configuration 14</p>
            </div>
            <Image src="/chair2.png" width={200} height={200} alt='' className='mt-8 cale ml-12 max-sm:mt-14 max-sm:ml-[24%] max-md:mt-[-2rem] max-md:ml-0' />
            <div className='flex mt-8 conti ml-2'>
              <p className='text-[10px] bold mt-8'>EUR 4110</p>
              <p className='ml-2 text-[10px] mt-8'>REF.DC-059</p>
            </div>
          </div>
          <div className='w-[24%] max-sm:w-full max-sm:ml-0 max-sm:h-[25rem]
                 h-full ima overflow-hidden ml-2 max-sm:mt-2 bg-[#e3e3e3]'>
            <div className='text-left pt-4 pl-2 text-[#231f20] cont'>
              <p className='liney'>Dice</p>
              <p className='text-[12px] mt-1'>Configuration 14</p>
            </div>
            <Image src="/chair3.png" width={200} height={200} alt='' className='mt-8 cale ml-12 max-sm:mt-14 max-sm:ml-[24%] max-md:mt-[-2rem] max-md:ml-0' />
            <div className='flex mt-8 conti ml-2'>
              <p className='text-[10px] mt-8 bold'>EUR 4110</p>
              <p className='ml-2 text-[10px] mt-8'>REF.DC-059</p>
            </div>
          </div>
          <div className='w-[24%] max-sm:hidden max-sm:ml-0 max-sm:h-[25rem]
                 h-full ima overflow-hidden ml-2 text-left text-[#231f20] max-md:text-3xl max-sm:mt-2'>
            <button className='ml-2 tiny underline'>VIEW ALL SEATS</button>
            <p className=' text-5xl bold ml-2 text-[#231f20] max-md:text-3xl mt-2'>SEATS</p>
            <p className='text-[10px] w-[70%] line ml-2 mt-[73%] max-md:mt-[12%] max-md:w-[90%]'>
              SEAT: noun. A piece
              of furniture that should be comfortable, even when
              made out of concrete. If you are not comfortable,
              check to make
              sure you're not seated on the coffee table.</p>
          </div>
        </div>
        <div className='w-full ml-5 max-sm:ml-0 mt-2 flex max-sm:block max-sm:h-auto h-[60vh] max-md:h-[45vh]'>
          <div className='w-[24%] max-sm:w-[96%] max-sm:hidden max-sm:h-[25rem]
                 h-full ima overflow-hidden text-left text-[#231f20] max-sm:mt-2'>
            <button className='ml-2 tiny underline'>VIEW ALL STORAGES</button>
            <p className=' text-5xl bold ml-2 text-[#231f20] max-md:text-3xl mt-2'>STORAGES</p>
            <p className='text-[10px] w-[70%] line ml-2 mt-[70%] max-md:mt-[12%] max-md:w-[90%]'>STORAGE: noun. Any kind of furnishing
              that lets you show off the objects that inspire you -
              and keep out of sight the one that don't. If your
              storage solution looks
              good, all the better. So long Billy.</p>
          </div>
          <div className='w-[24%] max-sm:w-full max-sm:ml-0 max-sm:h-[25rem] h-full ima overflow-hidden bg-[#e3e3e3]'>
            <div className='text-left pt-4 pl-2 text-[#231f20] cont'>
              <p className='liney'>Dice</p>
              <p className='text-[12px] mt-1'>Configuration 14</p>
            </div>
            <Image src="/storage1.png" width={200} height={200} alt='' className='mt-8 cale ml-12 max-sm:mt-14 max-sm:ml-[24%] max-md:mt-[-2rem] max-md:ml-0' />
            <div className='flex mt-8 conti ml-2'>
              <p className='text-[10px] bold mt-8'>EUR 4110</p>
              <p className='ml-2 text-[10px] mt-8'>REF.DC-059</p>
            </div>
          </div>
          <div className='w-[24%] max-sm:w-full max-sm:ml-0 max-sm:h-[25rem]
                 h-full ima overflow-hidden ml-2 max-sm:mt-2 bg-[#e3e3e3]'>
            <div className='text-left pt-4 pl-2 text-[#231f20] cont'>
              <p className='liney'>Dice</p>
              <p className='text-[12px] mt-1'>Configuration 14</p>
            </div>
            <Image src="/storage2.png" width={200} height={200} alt='' className='mt-8 cale ml-12 max-sm:mt-14 max-sm:ml-[24%] max-md:mt-[-2rem] max-md:ml-0' />
            <div className='flex mt-8 conti ml-2'>
              <p className='text-[10px] bold mt-8'>EUR 4110</p>
              <p className='ml-2 text-[10px] mt-8'>REF.DC-059</p>
            </div>
          </div>
          <div className='w-[24%] max-sm:w-full max-sm:ml-0 max-sm:h-[25rem]
                 h-full ima overflow-hidden ml-2 max-sm:mt-2 bg-[#e3e3e3]'>
            <div className='text-left pt-4 pl-2 text-[#231f20] cont'>
              <p className='liney'>Dice</p>
              <p className='text-[12px] mt-1'>Configuration 14</p>
            </div>
            <Image src="/storage3.png" width={200} height={200} alt='' className='mt-8 cale ml-12 max-sm:mt-14 max-sm:ml-[24%] max-md:mt-[-2rem] max-md:ml-0' />
            <div className='flex mt-8 conti ml-2'>
              <p className='text-[10px] mt-8 bold'>EUR 4110</p>
              <p className='ml-2 text-[10px] mt-8'>REF.DC-059</p>
            </div>
          </div>
        </div>
        <div className='w-full ml-[1%] max-sm:ml-0 mt-2 flex max-sm:block max-sm:h-auto h-[60vh] max-md:h-[45vh]'>
          <div className='w-[24%] max-sm:w-full max-sm:ml-0 max-sm:h-[25rem] h-full ima overflow-hidden bg-[#e3e3e3]'>
            <div className='text-left pt-4 pl-2 text-[#231f20] cont'>
              <p className='liney'>Dice</p>
              <p className='text-[12px] mt-1'>Configuration 14</p>
            </div>
            <Image src="/acc1.png" width={200} height={200} alt='' className='mt-8 cale ml-12 max-sm:mt-14 max-sm:ml-[24%] max-md:mt-[-2rem] max-md:ml-0' />
            <div className='flex mt-8 conti ml-2'>
              <p className='text-[10px] bold mt-8'>EUR 4110</p>
              <p className='ml-2 text-[10px] mt-8'>REF.DC-059</p>
            </div>
          </div>
          <div className='w-[24%] max-sm:w-full max-sm:ml-0 max-sm:h-[25rem]
                 h-full ima overflow-hidden ml-2 max-sm:mt-2 bg-[#e3e3e3]'>
            <div className='text-left pt-4 pl-2 text-[#231f20] cont'>
              <p className='liney'>Dice</p>
              <p className='text-[12px] mt-1'>Configuration 14</p>
            </div>
            <Image src="/acc2.png" width={200} height={200} alt='' className='mt-8 cale ml-12 max-sm:mt-14 max-sm:ml-[24%] max-md:mt-[-2rem] max-md:ml-0' />
            <div className='flex mt-8 conti ml-2'>
              <p className='text-[10px] bold mt-8'>EUR 4110</p>
              <p className='ml-2 text-[10px] mt-8'>REF.DC-059</p>
            </div>
          </div>
          <div className='w-[24%] max-sm:w-full max-sm:hidden max-sm:h-[25rem]
                 h-full ima overflow-hidden ml-2 text-left text-[#231f20] max-sm:mt-2'>
            <button className='ml-2 tiny underline'>VIEW ALL ACCESSORIES</button>
            <p className=' text-[44px] bold ml-2 max-md:text-3xl mt-2 text-[#231f20]'>ACCESSORIES</p>
            <p className='text-[10px] w-[70%] line ml-2 mt-[73%] max-md:mt-[22%] max-md:w-[90%]'>
              ACCESSORY: noun. Decorative element that
              helps your home stand out. When it's thoughtfully chosen, of course.</p>
          </div>
          <div className='w-[24%] max-sm:w-full max-sm:ml-0 max-sm:h-[25rem]
                 h-full ima overflow-hidden ml-2 max-sm:mt-2 bg-[#e3e3e3]'>
            <div className='text-left pt-4 pl-2 text-[#231f20] cont'>
              <p className='liney'>Dice</p>
              <p className='text-[12px] mt-1'>Configuration 14</p>
            </div>
            <Image src="/acc3.png" width={200} height={200} alt='' className='mt-8 cale ml-12 max-sm:mt-14 max-sm:ml-[24%] max-md:mt-[-2rem] max-md:ml-0' />
            <div className='flex mt-8 conti ml-2'>
              <p className='text-[10px] mt-8 bold'>EUR 4110</p>
              <p className='ml-2 text-[10px] mt-8'>REF.DC-059</p>
            </div>
          </div>
        </div>
        <div className='w-full ml-[1%] max-sm:ml-0 mt-2 flex max-sm:block max-sm:h-auto h-[60vh] max-md:h-[45vh]'>
          <div className='w-[24%] max-sm:w-[96%] max-sm:hidden max-sm:h-[25rem]
                 h-full ima overflow-hidden text-left text-[#231f20] max-sm:mt-2'>
            <button className='ml-2 tiny underline'>VIEW ALL FRAGS</button>
            <p className=' text-5xl max-md:text-3xl bold ml-2 text-[#231f20] mt-2'>FRAGS</p>
            <p className='text-[10px] w-[70%] line ml-2 max-md:mt-[12%] max-md:w-[90%] mt-[70%]'>
              FRAG: noun. 4 cm of raw concrete. A flat surface
              that is smooth to the touch, while retaining the
              raw look of concrete with its micro-bubbles and
              slight cracks, well known to urban art artists.
            </p>
          </div>
          <div className='w-[24%] max-sm:w-full max-sm:ml-0 ml-2 max-sm:h-[25rem] h-full ima overflow-hidden bg-[#e3e3e3]'>
            <div className='text-left pt-4 pl-2 text-[#231f20] cont'>
              <p className='liney'>Dice</p>
              <p className='text-[12px] mt-1'>Configuration 14</p>
            </div>
            <Image src="/frag1.png" width={200} height={200} alt='' className='mt-8 cale ml-12 max-sm:mt-14 max-sm:ml-[24%] max-md:mt-[-2rem] max-md:ml-0' />
            <div className='flex mt-8 conti ml-2'>
              <p className='text-[10px] bold mt-8'>EUR 4110</p>
              <p className='ml-2 text-[10px] mt-8'>REF.DC-059</p>
            </div>
          </div>
          <div className='w-[24%] max-sm:w-full max-sm:ml-0 max-sm:h-[25rem]
                 h-full ima overflow-hidden ml-2 max-sm:mt-2 bg-[#e3e3e3]'>
            <div className='text-left pt-4 pl-2 text-[#231f20] cont'>
              <p className='liney'>Dice</p>
              <p className='text-[12px] mt-1'>Configuration 14</p>
            </div>
            <Image src="/frag2.png" width={200} height={200} alt='' className='mt-8 cale ml-12 max-sm:mt-14 max-sm:ml-[24%] max-md:mt-[-2rem] max-md:ml-0' />
            <div className='flex mt-8 conti ml-2'>
              <p className='text-[10px] bold mt-8'>EUR 4110</p>
              <p className='ml-2 text-[10px] mt-8'>REF.DC-059</p>
            </div>
          </div>
          <div className='w-[24%] max-sm:w-full max-sm:ml-0 max-sm:h-[25rem]
                 h-full ima overflow-hidden ml-2 max-sm:mt-2 bg-[#e3e3e3]'>
            <div className='text-left pt-4 pl-2 text-[#231f20] cont'>
              <p className='liney'>Dice</p>
              <p className='text-[12px] mt-1'>Configuration 14</p>
            </div>
            <Image src="/frag3.png" width={200} height={200} alt='' className='mt-8 cale ml-12 max-sm:mt-14 max-sm:ml-[24%] max-md:mt-[-2rem] max-md:ml-0' />
            <div className='flex mt-8 conti ml-2'>
              <p className='text-[10px] mt-8 bold'>EUR 4110</p>
              <p className='ml-2 text-[10px] mt-8'>REF.DC-059</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section6