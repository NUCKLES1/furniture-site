

import CategoryProducts from '@/app/components/CategoryProducts';
import { getAllCategories } from '@/sanity/helper/query'
import { Container } from 'postcss';
import React from 'react'

const CategoryPage = async ({params,}:{params: Promise<{slug: string}>}) => {
  const {slug } = await params
  const categories = await getAllCategories();


  return (
    <>
    <div className='py-10'>
      <div className='text-xl'>
       Products by Category{""}
       <span className='font-bold text-green-500 capitalize tracking-wide'>
        {slug && slug}
       </span>
      </div>
      <CategoryProducts categories={categories} slug={slug} />
    </div>
    </>
  )
}

export default CategoryPage