

import CategoryProducts from '@/app/components/CategoryProducts';
import Navbar from '@/app/components/Navbar';
import { getAllCategories } from '@/sanity/helper/query'
import { Container } from 'postcss';
import React from 'react'

const CategoryPage = async ({params,}:{params: Promise<{slug: string}>}) => {
  const {slug } = await params
  const categories = await getAllCategories();


  return (
    <>
    <Navbar />
    <div className='bg-[#ebebeb] h-auto w-full'>
     {/* <div className='text-xl pt-8'>
     Products by Category{""}
       <span className='font-bold text-green-500 capitalize tracking-wide'>
        {slug && slug}
       </span>
      </div>
       */}
      <CategoryProducts categories={categories} slug={slug} />
    </div>
    </>
  )
}

export default CategoryPage