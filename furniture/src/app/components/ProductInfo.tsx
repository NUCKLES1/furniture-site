"use client";

import { MdStar } from "react-icons/md";
import { ProductData } from "../../../types";
import AddToCartButton from "./AddToCartButton";
import FormattedPrice from "./FormattedPrice";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Image from "next/image";
import PriceView from "./PriceView";
import { urlFor } from "@/sanity/lib/image";
import Imager1 from "./Imager1";
import Imager2 from "./Imager2";
import Lister from "./Lister";
import { Product } from "../../../sanity.types";
import Quantity from "./Quantity";
import { useEffect, useState } from "react";

interface Props {
  product:Product;
  className?: string;
}

export function ProductInfo  ({ product, className }: Props) {

    const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
      setIsClient(true);
    }, []);
    if (!isClient) {
      return null
    }
    
  return (
    <div className="w-full pl-4 h-auto">
      <div className="flex pb-12 px-2 h-auto lg:w-[74%] lg:ml-[27%] max-sm:ml-4 max-sm:w-full flex-col">
        <div className="lg:border-l-3 sm:border-l-1 border top-0 lg:h-[114.5rem] max-sm:h-[132rem] max-sm:left-2 absolute"></div>
        <div className="h-[30rem] max-sm:ml-[-1.5rem] w-full">
          <div className="w-full justify-between sm:block lg:flex">
            <div className="lg:w-[40%] max-sm:ml-[-2rem] max-sm:pl-8 lg:pl-2 sm:w-full">
              <h2 className="text-4xl lg:pt-16 max-sm:pt-4 leading-none text-[#231f20] font-semibold">
                {product?.title}
              </h2>
              <h2 className="text-3xl leading-none text-[#231f20]">
                {product?.description}
              </h2>
            </div>

            <div className="lg:w-[20rem] max-sm:mt-20 max-sm:w-full lg:text-right">
             
            </div>
          </div>
          <div className="absolute left-0 border-line w-full"></div>
          <div className="sm:block w-full h-auto lg:flex">
            <p className="tiny max-sm:text-[14px] uppercase sm:ml-0 lg:ml-[-5rem] mb-[-4rem] mt-8 pb-4">
              Description
            </p>
            <p className="lg:w-[80%] max-sm:text-2xl max-sm:w-full max-sm:pt-14 max-sm:pl-0 h-auto lg:pl-8">
              {product?.subtext}
            </p>
          </div>
        </div>
        <div className="max-sm:mt-[30rem]">
          <p className="tiny uppercase max-sm:text-[14px] max-sm:ml-[-1.4rem] ml-[-4.5rem]">
            DIMENSION
          </p>
          <Imager1 product={product} />
          <div className="lg:w-[70%] max-sm:w-full max-sm:mt-[4rem] lg:mt-[12rem] max-sm:ml-[-1.5rem] lg:ml-7 h-[20rem]">
            <div className="lg:ml-[-9rem] sm:ml-0 sm:text-left lg:text-right w-24">
              <p className="tiny uppercase sm:mb-0 lg:mb-[-2rem]">
                Technical <br />
                specifications
              </p>
            </div>
            <ul className="w-full text-[#231f20]  max-sm:text-[16px] text-[12px] font-semibold bord-t py-3 flex justify-between">
              <li>MATERIAL</li>
              <li className="tinny text-[#231f207d] max-sm:text-[14px] pt-1">MATERIAL</li>
            </ul>
            <ul className="w-full  text-[#231f20] max-sm:text-[16px] text-[12px]  font-semibold bord-t py-3 flex justify-between">
              <li>COLOR</li>
              <li className="tinny text-[#231f207d] max-sm:text-[14px] pt-1">MATERIAL</li>
            </ul>
            <ul className="w-full  font-semibold text-[#231f20] max-sm:text-[16px] text-[12px] bord-t py-3 flex justify-between">
              <li>FINISION</li>
              <li className="tinny text-[#231f207d] max-sm:text-[14px] pt-1">MATERIAL</li>
            </ul>
            <ul className="w-full  font-semibold text-[#231f20] text-[12px] max-sm:text-[16px] bord-t py-3 flex justify-between">
              <li>DIMENSIONS</li>
              <li className="tinny text-[#231f207d] max-sm:text-[14px] pt-1">MATERIAL</li>
            </ul>
            <ul className="w-full  font-semibold text-[#231f20] text-[12px] max-sm:text-[16px] bord-t py-3 flex justify-between">
              <li>WEIGHT</li>
              <li className="tinny text-[#231f207d] max-sm:text-[14px] pt-1">MATERIAL</li>
            </ul>
          </div>
          <div className=" ml-[-23rem] max-sm:ml-[-1.5rem] border-line border-2 w-full"></div>
        </div>
      </div>
      <div className="lg:flex ml-[-0.5rem] sm:block max-sm:h-auto h-[110vh] w-full">
        <div className="w-[50%] font-bold uppercase text-[#231f20] pt-40 lg:pl-16 leading-10 max-sm:text-[2.5rem] lg:text-[3rem]">
          <p>
            dice <br /> collections
          </p>
        </div>
        <div className="lg:w-[50%] object-contain sm:w-full max-sm:h-[20rem] overflow-hidden">
          <Imager2 product={product} />
        </div>
      </div>
      <div>
        <div className=" lg:ml-[-23rem] max-sm:ml-[-0.5rem] border-line border-2 lg:mt-[-2rem] w-full"></div>
        <div>
          <p className="tiny lg:p-4">COLLECTIONS</p>
        </div>
      </div>
      <div>
        <p className="text-[#231f20] lg:pl-10 leading-none font-bold lg:mt-[15rem] max-sm:mt-[5rem]  max-sm:text-[55px] lg:text-[40px]">
          Products that may interest <br /> you.
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
