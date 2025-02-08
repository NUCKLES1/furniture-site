
import React from "react";
import { getProductsData } from "@/lib/getData";
import { ProductData } from "../../../types";
import ProductCard from "./ProductCard";
import { Product } from "../../../sanity.types";
import { AnimatePresence, motion } from "framer-motion";
export const revalidate = 0;

const Lister = async () => {
  const products: Product[] = await getProductsData();
  return (
    <div className="w-full mt-12 flex max-md:h-[45vh] max-md:w-[98%] max-sm:ml-0 max-sm:block max-sm:h-auto h-[60vh]">
      {products?.map((product: Product) => (
        <AnimatePresence key={product?._id}>
          <div
            className="w-[18%] max-sm:w-[96%] max-sm:ml-3 max-sm:h-[25rem]
       h-full ima overflow-hidden ml-2 max-sm:mt-2 bg-[#e3e3e3]"
          >
            <ProductCard product={product}/>
          </div>
        </AnimatePresence>
      ))}
    </div>
  );
};

export default Lister;
