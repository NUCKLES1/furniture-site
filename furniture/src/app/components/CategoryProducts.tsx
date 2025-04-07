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
      const query = `*[_type == 'product' && references(*[_type == 'category' && slug.current == $categorySlug]._id)] | order(chair asc)`;
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
    <div className="md:flex-row item-start gap-5">
      <div className="max-md:min-w-40  pt-[8rem] pb-[3rem] lg:ml-[20%] max-sm:ml-[5%] border-l border-black">
        <div className="w-5 web lg:block pl-10 max-sm:pl-5 text-transparent text-[5rem] mt-2">
          <Link href={"/shop"}>
            <div className="lg:block text-[25px] text-left mt-2 max-sm:mt-[-4rem] block hover:text-black max-sm:mb-[-3rem] max-sm:pb-[2.5rem]">
              All
            </div>
          </Link>
          <div>
            {categories?.map((item) => (
              <button
                onClick={() => setCurrentSlug(item?.slug?.current as string)}
                className={`max-sm:mt-[1rem] hover:text-black leading-10 max-sm:leading-none block max-sm:text-[20px] text-[25px] ${item?.slug?.current === currentSlug && "webi "}`}
                key={item?._id}
              >
                {item?.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1">
        {loading ? (
          <div className="w-full mt-30 h-80">
            <div className="loader mx-auto w-10 h-6 my-auto">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>

            {/* <div
            className={
              "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center pb-10 min-h-80 space-y-4 text-center bg rounded-lg w-[98%] mx-2 bg-[#ebebeb]"
            }
          >
            <Image src={icon} alt="" />
            <span className="text-[1.4rem]">Product is loading...</span>
          </div> */}
          </div>
        ) : (
          <>
            {products?.length ? (
              <div className="grid mx-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products?.map((product: Product) => (
                  <AnimatePresence key={product?._id}>
                    <motion.div
                      layout
                      initial={{ opacity: 0.2 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="mb-12">
                        <ProductCardi product={product} />
                      </div>
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
