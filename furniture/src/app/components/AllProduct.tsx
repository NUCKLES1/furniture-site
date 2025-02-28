import React from "react";
import { getProductsData } from "@/lib/getData";
import { ProductData } from "../../../types";
import ProductCard from "./ProductCard";
import { Product } from "../../../sanity.types";
import { AnimatePresence, motion } from "framer-motion";
import ProductCardi from "./ProductCardi";


const AllProduct = async () => {

  const products: Product[] = await getProductsData();
  return (
    <div className="w-full mb-[12rem] h-full grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-[#ebebeb]">
      {products?.map((product: Product) => (
        <AnimatePresence key={product?._id}>
          <div>
             <ProductCardi product={product} />
          </div>
        </AnimatePresence>
      ))}
    </div>
  );
};

export default AllProduct;
