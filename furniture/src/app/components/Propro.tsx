import React from 'react'
import ProductInfo from './ProductInfo'
import Lister from './Lister'
import { ProductData } from '../../../types';
import { Product } from '../../../sanity.types';

interface Props {
  product: ProductData;
}

const Propro = ({ product }: { product: Product }) => {
  return (
    <div className='w-full max-sm:mb-[-1rem]'>
    <ProductInfo product={product}/>
    <Lister />
    </div>
  )
}

export default Propro