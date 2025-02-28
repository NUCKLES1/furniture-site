
import React from 'react'
import List from '../components/List'
import Navbar from '../components/Navbar'
import AllProduct from '../components/AllProduct'
import Footer from '../components/Footer'
import Categorys from '../components/Categorys'
import { getAllCategories } from '@/sanity/helper/query'

const page = async () => {

    const categories = await getAllCategories();
    
  return (
    <div className=' bg-[#ebebeb] mx-2 h-auto overflow-hidden'>
        <Navbar />
        <Categorys categories={categories} />
        <AllProduct />
        <Footer />
    </div>
  )
}

export default page