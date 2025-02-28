import React from 'react'
import ProductInfo from './ProductInfo'
import Lister from './Lister'
import { ProductData } from '../../../types';
import { Product } from '../../../sanity.types';
import { getAllCategories } from '@/sanity/helper/query';
import Categorys from './Categorys';


const Propro = async () => {

  
      const categories = await getAllCategories();
  return (
    <div className='w-full max-sm:mb-[-1rem]'>

    </div>
  )
}

export default Propro