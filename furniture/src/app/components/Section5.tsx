"use client"
import React,{useState} from 'react'
import { GoArrowRight } from "react-icons/go";
import {projects} from './Data';
import Image from 'next/image';

const Section5 = () => {


  return (
    <div className='w-full h-[100vh]'>
      <div className='w-full pt-20 max-sm:mt-[-15rem] h-[80vh]'>
        <div className='bord-t'>
        {projects.map((val) => (
          <div className='flex max-sm:block do border-line h-12 max-sm:h-[auto] max-sm:text-1xl text-[#575555] hovering border-line tinny justify-between bold p-4' key={val.id}>
            <p>{val.title}</p>
            <div className='flex'><GoArrowRight className='w-6 h-6 mt-[-6px] max-sm:mt-0 mr-2'/><p>PROJECTS</p></div>
            <div className='left-[-15rem] display h-[20rem] absolute'>
            <Image src={val.src} width={500} height={700} alt='' className='object-cover mt-36'/>
            </div>
            <p>{val.date}</p>
          </div>
        ))}
        </div>
        
      </div>
    </div>
  )
}

export default Section5