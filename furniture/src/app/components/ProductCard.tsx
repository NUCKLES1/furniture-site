import React from "react";
import { ProductData } from "../../../types";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { MdStar } from "react-icons/md";
import FormattedPrice from "./FormattedPrice";
import { Product } from "../../../sanity.types";
import PriceView from "./PriceView";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div>
      <div className="text-left pt-4 pl-2 text-[#231f20] cont">
        <p className="liney max-sm:text-[25px]">{product?.title}</p>
        <p className="text-[12px] max-sm:text-[15px] mt-2">{product?.description}</p>
      </div>

      <div>
        {product?.images && (
          <Link href={`/product/${product?.slug?.current}`}>
            <Image
              src={urlFor(product?.images[0]).url()}
              width={200}
              height={200}
              alt="productimage"
              priority
              className={`mt-8 max-md:mt-[-2rem] max-sm:mt-16 cale ml-12 max-sm:ml-[24%] hover:scale-105 max-md:ml-0 ${product?.stock !== 0 && "group-hover:scale-105 cale"}`}
            />
          </Link>
        )}
        {product?.stock === 0 && (
          <div className="absolute top-0 left-0 w-full h-full bg-black/50">
            <p className="text-white text-center font-semibold text-base">
              Out of Stock
            </p>
          </div>
        )}
      </div>
      <div className="flex max-sm:mt-8 mt-4 text-[#231f20] conti ml-2">
        <div className="text-[12px] font-bold max-sm:text-[15px] mt-8">
          <PriceView price={product?.price} />
        </div>
        <p className="ml-2 max-sm:text-[15px] text-[12px] mt-8">{product?.brand}</p>
      </div>
    </div>
  );
};

export default ProductCard;
