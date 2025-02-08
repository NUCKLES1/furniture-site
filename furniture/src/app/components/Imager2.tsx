import React from "react";
import Image from "next/image";
import { Product } from "../../../sanity.types";
import { getProductsData } from "@/lib/getData";
import { urlFor } from "@/sanity/lib/image";

const Imager2 = ({ product }: { product: Product }) => {

  return (
    <div>
      {product?.images && (
        <Image
          src={urlFor(product?.images[3]).url()}
          width={200}
          height={200}
          alt="productimage"
          priority
          className={`mt-32 w-full max-md:mt-[-2rem] max-sm:mt-16 max-md:ml-0`}
        />
      )}
    </div>
  );
};

export default Imager2;
