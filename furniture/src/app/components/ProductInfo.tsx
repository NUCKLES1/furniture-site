"use client";

import { MdStar } from "react-icons/md";
import { ProductData } from "../../../types";
import AddToCartButton from "./products/AddToCartButton";
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

interface Props {
  product: ProductData;
}

const ProductInfo =  ({ product }: { product: Product }) => {
  return (
    <div className="w-full">
      <div className="flex pb-12 px-2 h-auto w-[75%] ml-[27%] flex-col">
        <div className="border-l-3 border top-0 h-[114.5rem] absolute"></div>
        <div className="h-[30rem] w-full">
          <div className="w-full justify-between flex">
            <div className="w-[40%] pl-2">
              <h2 className="text-4xl pt-16 leading-none text-[#231f20] font-semibold">
                {product?.title}
              </h2>
              <h2 className="text-3xl leading-none text-[#231f20]">
                {product?.description}
              </h2>
            </div>
            
            <div className="w-[20rem] text-right">
              <FormattedPrice
                
                className="text-2xl font-bold text-[#231f20] w-full" amount={0}/>
              <button className="border mt-2 w-full py-5 tiny ">Sizes</button>
              <Provider store={store}>
                <AddToCartButton product={product} />
              </Provider>
            </div>
          </div>
          <div className="absolute left-0 border-line w-full"></div>
          <p className="tiny uppercase ml-[-5rem] mb-[-4rem] mt-8">Description</p>
          <p className="w-[80%] mt-10 pl-5">{product?.subtext}</p>
        </div>
        <p className="tiny uppercase ml-[-4.5rem]">DIMENSION</p>
        <Imager1 product={product} />
        <div className="w-[70%] mt-[12rem] ml-7 h-[20rem]">
          <div className="ml-[-9rem] text-right w-24">
          <p className="tiny uppercase mb-[-2rem]">Technical <br />
          specifications</p>
          </div>
          <ul className="w-full text-[#231f20] text-[12px] font-semibold bord-t py-3 flex justify-between">
            <li>MATERIAL</li>
            <li className="tinny pt-1">MATERIAL</li>
          </ul>
          <ul className="w-full  text-[#231f20] text-[12px]  font-semibold bord-t py-3 flex justify-between">
            <li>COLOR</li>
            <li className="tinny pt-1">MATERIAL</li>
          </ul>
          <ul className="w-full  font-semibold text-[#231f20] text-[12px] bord-t py-3 flex justify-between">
            <li>FINISION</li>
            <li className="tinny pt-1">MATERIAL</li>
          </ul>
          <ul className="w-full  font-semibold text-[#231f20] text-[12px] bord-t py-3 flex justify-between">
            <li>DIMENSIONS</li>
            <li className="tinny pt-1">MATERIAL</li>
          </ul>
          <ul className="w-full  font-semibold text-[#231f20] text-[12px] bord-t py-3 flex justify-between">
            <li>WEIGHT</li>
            <li className="tinny pt-1">MATERIAL</li>
          </ul>
        </div>
        <div className=" ml-[-23rem] border-line border-2 w-full"></div>
      </div>
      <div className="flex h-[110vh] w-full">
        <div className="w-[50%] font-bold uppercase text-[#231f20] pt-40 pl-16 leading-10 text-[3rem]">
          <p>dice <br /> collections</p>
        </div>
        <div className="w-[50%] overflow-hidden">
        <Imager2 product={product}/>
        </div>
      </div>
      <div>
      <div className=" ml-[-23rem] border-line border-2 mt-[-2rem] w-full">
      </div>
      <div>
      <p className="tiny p-4">COLLECTIONS</p>
      </div>
      </div>
      <div>
        <p className="text-[#231f20] pl-10 leading-none font-bold mt-[15rem] text-[40px]">
          Products that may interest <br /> you.
        </p>
        <Lister />
      </div>
    </div>
  );
};

export default ProductInfo;
