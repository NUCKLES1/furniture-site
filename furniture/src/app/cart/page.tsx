"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Loading from "../components/Loading";
import useCartStore from "../../../store";
import Container from "../components/Component";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import toast from "react-hot-toast";

const CartPage = () => {
  const [isClient, setIsClient] = useState(false);
  const {
    deleteCartProduct,
    getTotalPrice,
    getItemCount,
    resetCart,
    getGroupedItems,
  } = useCartStore();

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return <Loading />;
  }

  const handleResetCart = () => {
    const confirmed = window.confirm("Are you sure to reset your cart");
    if (confirmed) {
      toast.success("Your cart reset successfully")
    }
  }

  const cartProducts = getGroupedItems();

  return (
    <div className="w-full h-full bg-[#ebebeb]">
      <Navbar />
      <div className="w-full flex justify-between pt-24 px-24">
        <div className="w-[60%] bg-white ">
          {cartProducts?.length ? (
            <>
              {cartProducts?.map(({ product }) => {
                return (
                  <div
                    className="grid lg:grid-cols-3 md:gap-8"
                    key={product._id}
                  >
                    <div className="border-b p-2.5 w-80 last:border-b-0 flex items-center justify-between gap-5">
                      <div className="flex flex-1 items-center gap-2 h-36 md:h-44">
                        {product?.images && (
                          <Link
                            href={`/product/${product?.slug?.current}`}
                            className="border p-6 md:p-1 mr-2 rounded-md  overflow-hidden group"
                          >
                            <Image
                              src={urlFor(product?.images[0]).url()}
                              alt="productImage"
                              width={500}
                              height={500}
                              loading="lazy"
                              className="w-52 md:w-40 h-32 md:h-40 object-cover group-hover:scale-105 overflow-hidden duration-300"
                            />
                          </Link>
                        )}
                      </div>
                      <div>
                        <p className="font-semibold line-clamp-1">
                          {product?.title}
                        </p>
                        <p className="">
                          {product?.description}
                        </p>
                        <p className="">
                          Variant: 
                          <span className="pl-1 font-semibold">{product?.variant}</span>
                        </p>
                      </div>
                      <div className="lg:col-span-2 rounded-lg"></div>
                    </div>
                   <button className="" onClick={handleResetCart}>reset</button> 
                  </div>
                );
              })}
            </>
          ) : (
            <div></div>
          )}
        </div>
        <div className="lg:col-span-1">
          <div className="hidden md:inline-block w-full bg-white p-6 rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
