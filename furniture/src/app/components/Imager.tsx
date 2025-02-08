

import React from "react";
import Image from "next/image";
import { Product } from "../../../sanity.types";
import { getProductsData } from "@/lib/getData";
import { urlFor } from "@/sanity/lib/image";

const Imager = ({ product }: { product: Product }) => {

  return (
    <div className="overflow-hidden">
    <div className="slidely-track h-[70vh]">
      {product?.images && (
        <Image
          src={urlFor(product?.images[0]).url()}
          width={800}
          height={200}
          alt="productimage"
          priority
          className={`mt-8 max-md:mt-[-2rem] max-sm:mt-16 slidely ml-2 max-sm:ml-[24%] max-md:ml-0 object-cover`}
        />
      )}
      {product?.images && (
        <Image
          src={urlFor(product?.images[1]).url()}
          width={800}
          height={200}
          alt="productimage"
          priority
          className={`mt-8 slidely max-md:mt-[-2rem] max-sm:mt-16 ml-2 max-sm:ml-[24%] max-md:ml-0 object-cover`}
        />
      )}
      {product?.images && (
        <Image
          src={urlFor(product?.images[3]).url()}
          width={800}
          height={200}
          alt="productimage"
          priority
          className={`mt-8 slidely max-md:mt-[-2rem] max-sm:mt-16 ml-2 max-sm:ml-[24%] max-md:ml-0 object-cover`}
        />
      )}
    </div>
    </div>
  );
};

export default Imager;