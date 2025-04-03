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
        className="w-[15%] h-full bord text-center pb-6 hove"
      >
        {!isStyled ? (
          <CiSearch className="w-6 h-6 mt-4 md:h-4 transition-all duration-500 md:w-4 max-md:ml-1 max-md:mt-[0.7rem] ml-[1rem]" />
        ) : (
          <LiaTimesSolid className="w-6 h-6 md:h-4 md:w-4 max-md:ml-1 md:mt-4 mt-[0.8rem] ml-[1rem]" />
        )}
      </button>
      <div className=" left-0 top-[3.3rem] w-full bg-[#03a77e] absolute"
      >
        <div
          style={{
            height: isStyled ? "87vh" : "0",
            opacity: isStyled ? "1" : "0",
            transition: "height 1.2s ease-in-out",
            animationDelay: "opacity 2s ease-in-out",
          }}
          className=" w-full flex left-0 top-[3.3rem] "
        >
          <div className="w-[28.8%] bordi h-full"></div>
          <div className="w-[70%]">
            <form action="">
              <input
                type="text"
                placeholder="SEARCH"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-4 bg-transparent uppercase text-[6rem] bordb font-bold outline-none text-black"
              />
            </form>
          </div>
          <div className="absolute tide left-0">
            {loading ? (
              <p>Searching in Progress...</p>
            ) : products.length ? (
              products.map((product: Product) => (
                <div key={product?._id}>
                  <div className="w-full flex mt-2 h-[6rem] max-sm:w-[96%] max-sm:ml-3 max-sm:h-[25rem] ima overflow-hidden ml-2 max-sm:mt-2">
                    <Link href={`/product/${product?.slug?.current}`}>
                      {product?.images && (
                        <Image
                          src={urlFor(product?.images[0]).url()}
                          width={100}
                          height={100}
                          className="w-[6rem] h-[6rem]  bg-[#e3e3e3]"
                          alt="image"
                        />
                      )}
                    </Link>
                  </div>
                  <div className="w-[76rem] mt-20 h-[20rem] absolute left-2 overflow-y-hidden">
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
    </>
  );
};

export default SearchBar;
