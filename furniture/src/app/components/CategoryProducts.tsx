"use client";

import React, { useEffect, useState } from "react";
import { CATEGORIES_QUERYResult, Product } from "../../../sanity.types";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import ProductCardi from "./ProductCardi";
import NoProducts from "./NoProducts";
import icon from "../../../public/icons8.gif";
import { client } from "@/sanity/lib/client";
import Footer from "./Footer";
import Link from "next/link";

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
      const query = `*[_type == 'product' && references(*[_type == 'category' && slug.current == $categorySlug]._id)] | order(name asc)`;
      const data = client.fetch(query, { categorySlug });
      setProducts(await data);
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
    <div className="py-5 pt-16 md:flex-row item-start gap-5">
      <div className="web flex lg:hidden text-[5rem] mt-2 text-black pr-[3rem]">
        SHOP
      </div>
      <div className="flex lg:ml-[20%] md:min-w-40">
        <Link href={"/shop"}>
          <div className="web flex lg:pl-10 max-sm:pl-4 text-transparent max-sm:text-[20px] text-[5rem] mt-2 hover:text-black lg:pr-[3rem]">
            All
          </div>
        </Link>
        {categories?.map((item) => (
          <button
            onClick={() => setCurrentSlug(item?.slug?.current as string)}
            className={`web flex max-sm:pl-4 lg:pl-10 text-transparent text-[5rem] mt-2 max-sm:text-[20px] hover:text-[#231f20] ${item?.slug?.current === currentSlug && "webi "}`}
            key={item?._id}
          >
            {item?.title}
          </button>
        ))}
      </div>
      <div className="flex-1">
        {loading ? (
          <div
            className={
              "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center py-10 min-h-80 space-y-4 text-center bg rounded-lg w-[98%] mx-2 bg-[#ebebeb] mt-10"
            }
          >
            <Image src={icon} alt="" />
            <span className="text-[1.4rem]">Product is loading...</span>
          </div>
        ) : (
          <>
            {products?.length ? (
              <div className="pt-[5rem] grid mx-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
      <div className="pt-[10rem]">
        <Footer />
      </div>
    </div>
  );
};

export default CategoryProducts;
