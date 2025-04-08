import React from 'react'
import { Product } from '../../../sanity.types';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import PriceView from './PriceView';

const RecomendData = ({ product }: { product: Product }) => {
    return (
      <div>
        <div className="text-left pt-4 pl-2 text-[#231f20] cont">
          <p className="liney max-sm:font-normal max-sm:text-[25px]">{product?.title}</p>
          <p className="text-[12px] max-sm:text-[15px] mt-2">{product?.description}</p>
        </div>
  
        <div className="group">
          {product?.images && (
            <Link href={`/product/${product?.slug?.current}`}>
              <Image
                src={urlFor(product?.images[0]).url()}
                width={200}
                height={200}
                alt="productimage"
                priority
                className={`mt-8 max-md:mt-[-2rem] max-sm:mt-16 cale ml-6 max-sm:mx-[16%] hover:scale-110 max-md:ml-0 ${product?.stock !== 0 && "group-hover:scale-110 cale"}`}
              />
            </Link>
          )}
          {product?.stock === 0 && (
            <div className="absolute top-0 left-0 w-full h-full text-center bg-black/10">
              <p className="text-[#231f20] text-center text-[40px] font-bold pt-[45%]">
                OUT OF STOCK
              </p>
            </div>
          )}
        </div>
        <div className="flex max-sm:mt-8 -mt-2 text-[#231f20] conti ml-2">
          <div className="text-[12px] lg:font-bold max-sm:text-[15px] mt-8">
            <PriceView price={product?.price} />
          </div>
          <p className="ml-2 max-sm:text-[15px] text-[12px] mt-8">{product?.brand}</p>
        </div>
      </div>
    );
  };

export default RecomendData