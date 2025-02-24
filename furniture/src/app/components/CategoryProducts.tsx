"use client";

import React, { useEffect, useState } from "react";
import { CATEGORIES_QUERYResult, Product } from "../../../sanity.types";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import ProductCardi from "./ProductCardi";
import NoProducts from "./NoProducts";
import icon from "../../../public/icons8.gif";
import { client } from "@/sanity/lib/client";

interface Props {
  categories: CATEGORIES_QUERYResult;
  slug: string;
}

const CategoryProducts = ({ categories, slug }: Props) => {

  const [currentSlug, setCurrentSlug] = useState(slug);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (categorySlug: string) => {
    try {
      setLoading(true);
      const query =`*[_type == 'product' && references(*[_type == 'category' && slug.current == $categorySlug]._id)] | order(name asc)`; 
      const data = await client.fetch(query, { categorySlug });
      setProducts(data);
    } catch (error) {
      console.error("Error fetching Products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentSlug);
  }, [currentSlug]);
  
  return (
    <div className="py-5 flex flex-col md:flex-row item-start gap-5">
      <div className="flex flex-col md:min-w-40 border">
        {categories?.map((item) => (
          <button
            onClick={() => setCurrentSlug(item?.slug?.current as string)}
            className={`text-black hover:bg-black mt-2 hover:text-white ${item?.slug?.current === currentSlug && "bg-black text-white border-black"}`}
            key={item?._id}
          >
            {item?.title}
          </button>
        ))}
      </div>
      <div className="flex-1 bg-red-200">
        {loading ? (
          <div
            className={
              "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-[80%] mt-10"
            }
          >
            <Image src={icon} alt="" />
            <span className="text-[1.4rem]">Product is loading...</span>
          </div>
        ) : (
          <>
            {products?.length ? (
              <div className="grid grid-cols-2 md:grid-cols-3">
                {products?.map((product: Product) => (
                  <AnimatePresence key={product?._id}>
                    <motion.div
                      layout
                      initial={{ opacity: 0.2 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <ProductCardi product={product} />
                    </motion.div>
                  </AnimatePresence>
                ))}
              </div>
            ) : (
              <>
                <NoProducts selectedTab={currentSlug} />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;
