import React from "react";
import Image from "next/image";
import { Product } from "../../../sanity.types";
import { getProductsData } from "@/lib/getData";
import { urlFor } from "@/sanity/lib/image";

const Imager1 = ({ product }: { product: Product }) => {

  return (
    <div>
      {product?.images && (
        <Image
          src={urlFor(product?.images[4]).url()}
          width={200}
          height={200}
          alt="productimage"
          priority
          className={`mt-8 w-[60%] max-md:mt-[-2rem] max-sm:mt-16 ml-2 max-sm:ml-[24%] max-md:ml-0`}
        />
      )}
    </div>
  );
};

export default Imager1;
