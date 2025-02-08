"use client";

import React, { useEffect, useState } from "react";
import HomeTabber from "../components/HomeTabber";
import { productType } from "./Data";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../sanity.types";
import ProductCardi from "./ProductCardi";
import NoProducts from "./NoProducts";
import Image from "next/image";
import icon from "../../../public/icons8.gif";
import { motion, AnimatePresence } from "framer-motion";

const ProductGrid = () => {
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const query = `*[_type == 'product' && variant ==$variant] | order(name asc)`;
  const params = { variant: selectedTab.toLocaleLowerCase() };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await client.fetch(query, params);
        setProducts(await response);
      } catch (error) {
        console.log("Product fetching Error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedTab]);

  return (
    <div className="mt-10 flex flex-col items-center">
      <HomeTabber selectedTab={selectedTab} onTabSelect={setSelectedTab} />
      {loading ? (
        <div
          className={
            "flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-[80%] mt-10"
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
                <AnimatePresence  key={product?._id}>
                  <motion.div 
                  layout
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}>
                    <ProductCardi product={product} />
                  </motion.div>
                </AnimatePresence>
              ))}
            </div>
          ) : (
            <>
              <NoProducts selectedTab={selectedTab} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ProductGrid;
