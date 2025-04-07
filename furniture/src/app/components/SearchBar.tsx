"use client";

import { client } from "@/sanity/lib/client";
import React, { useCallback, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import { Product } from "../../../sanity.types";
import Link from "next/link";
import ImageView from "./ImageView";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const fetchProducts = useCallback(async () => {
    if (!search) {
      setProducts([]);
      return;
    }
    setLoading(true);
    try {
      const query = `*[_type == "product" && title match $search ]  | order(title asc)`;
      const params = { search: `${search}*` };
      const response = await client.fetch(query, params);
      setProducts(response);
    } catch (error) {
      console.error("Error fetching Products:");
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchProducts();
    }, 300);
    return () => clearTimeout(debounceTimer);
  }, [search, fetchProducts]);

  const [showi, setShowi] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 10) {
      setShowi(false);
    } else {
      setShowi(true);
    }
  };

  const [isActive, setIsActive] = useState(false);
  const toggleButton = (p0: (prev: any) => boolean) => {
    setIsActive(!isActive);
  };

  const [isStyled, setIsStyled] = useState(false);

  const toggleStyle = () => {
    setIsStyled(!isStyled);
  };

  return (
    <>
      <button
        onClick={toggleStyle}
        className="lg:w-[15%] max-sm:w-[50%] h-full max-sm:px-3 bord text-center pb-6 hove"
      >
        {!isStyled ? (
          <CiSearch className="w-6 h-6 mt-4 md:h-4 transition-all duration-500 md:w-4 max-md:ml-1 max-md:mt-[0.7rem] ml-[1rem]" />
        ) : (
          <LiaTimesSolid className="w-6 h-6 md:h-4 md:w-4 max-md:ml-1 md:mt-4 mt-[0.8rem] ml-[1rem]" />
        )}
      </button>
      <div>
      <div className=" left-0 z-20 max-sm:top-[-88vh] max-sm:w-[43.5vh] top-[3.3rem] w-full bg-[#03a77e] absolute">
        <div
          style={{
            height: isStyled ? "87vh" : "0",
            opacity: isStyled ? "1" : "0",
            transition: "height 1.2s ease-in-out",
            animationDelay: "opacity 2s ease-in-out",
          }}
          className=" w-full flex left-0 top-[3.3rem] "
        >
          <div className="w-[28.8%] max-sm:w-[10%] bordi h-full"></div>
          <div className="w-[70%] max-sm:w-[88%]">
            <form action="">
              <input
                type="text"
                placeholder="SEARCH"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-4 bg-transparent uppercase text-[6rem] max-sm:text-5xl max-sm:pt-8 max-sm:pb-4 bordb font-bold outline-none text-black"
              />
            </form>
          </div>
          <div className="absolute max-sm:ml-[12%] max-sm:h-[80%] overflow-auto max-sm:w-[85%]  max-sm:top-[17%] tide left-0">
            {loading ? (
              <p>Searching in Progress...</p>
            ) : products.length ? (
              products.map((product: Product) => (
                  <div key={product?._id}>
                    <div className="w-[8rem] mb-[12rem] max-sm:w-[60%] h-full gap-2 lg:hidden max-sm:mb-2 ">
                      <Link href={`/product/${product?.slug?.current}`}
                      className="">
                        {product?.images && (
                          <Image
                            src={urlFor(product?.images[0]).url()}
                            width={400}
                            height={400}
                            className="w-full h-[12rem]  bg-[#e3e3e3]"
                            alt="image"
                          />
                        )}
                      </Link>
                    </div>

                  <div className="w-[76rem] max-sm:hidden mt-20 h-[20rem] absolute left-2 overflow-y-hidden">
                    <Link href={`/product/${product?.slug?.current}`}>
                      <ul className="flex justify-between text-[#231f20] uppercase px-4 mi text-[18px] font-bold transition-all delay-100 hover:bg-[#231f20] hover:text-[#ffffff]">
                        <li>{product?.brand}</li>
                        <li>{product?.title}</li>
                        <li>{product?.description}</li>
                        <li>NGN {product?.price}.00</li>
                      </ul>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div>
                {search ? (
                  <p className="text-[10px] text-[#231f20] ">
                    NO PRODUCT RESULT FOUND
                  </p>
                ) : (
                  <p></p>
                )}
              </div>
            )}
          </div>
        </div>
        </div>
        <div
        style={{   
          position: isStyled ? "fixed" : "absolute",
          opacity: isStyled ? "1" : "0",
          height: isStyled ? "100vh" : "0",
          display: isStyled ? "block" : "none",
        }}
        onClick={toggleStyle}
        className="hidden
          top-0 left-0 z-10 w-full bg-[#00000078]"
      ></div>
      </div>
    </>
  );
};

export default SearchBar;
