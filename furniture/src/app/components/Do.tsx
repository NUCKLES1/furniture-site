"use client";

import { useEffect, useState } from "react";
import useCartStore from "../../../store";

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Loading from "./Loading";

const Do = () => {
  const {
    deleteCartProduct,
    getTotalPrice,
    getItemCount,
    resetCart,
    getGroupedItems,
  } = useCartStore();

  const cartProducts = getGroupedItems();

  const itemCount = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  if (!isClient) {
    return <Loading />;
  }

  return (
    <div className="w-full absolute h-screen top-0 bg-[#00000076]">
      <div className="absolute top-[4.5rem] bg-[#ebebeb] h-[85vh] p-2 w-[25%] border">
        <div
          style={{
            transition: "background-color 0.3s ease",
          }}
        >
          <div className=" w-full flex justify-between ">
            <div>
              <p className=" bold text-[#231f20] text-[44px] leading-none">
                CART
              </p>
            </div>
            <div>
              <p className=" bold text-[#231f20] text-[44px] leading-none">
                {itemCount}
              </p>
            </div>
          </div>
          <div className=" mt-4 bord-t border-[#00000094]"></div>
          <div className="h-[47vh] pt-4 w-full">
            {cartProducts?.length ? (
              <>
                {cartProducts?.map(({ product }) => {
                  return (
                    <div
                      className="flex flex-1 items-center gap-2 h-16 md:h-44"
                      key={product._id}
                    >
                      {product?.images && (
                        <Link
                          href={`/product/${product?.slug?.current}`}
                          className="border p-6 md:p-1 mr-2 rounded-md  overflow-hidden group"
                        >
                          <Image
                            src={urlFor(product?.images[0]).url()}
                            alt="productImage"
                            width={100}
                            height={100}
                            loading="lazy"
                            className="w-52 md:w-40 h-16 md:h-40 object-cover group-hover:scale-105 overflow-hidden duration-300"
                          />
                        </Link>
                      )}
                    </div>
                  );
                })}
              </>
            ) : (
              <div className="tiny">
                {" "}
                <p>YOUR CART IS EMPTY</p>
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="w-full bord-t flex justify-between">
            <p>SUBTOTAL</p>
            <p>total</p>
          </div>
          <button className="border  mt-2 cursor-pointer w-full py-5 tiny text-white hover:text-[#231f20] hover:bg-[#ebebeb] ease-in-out	duration-200 bg-[#231f20]">
            CHECKOUT
          </button>
          <button className="border mt-2 cursor-pointer w-full py-5 tiny text-[#231f20] hover:text-[#ebebeb] hover:bg-[#231f20] ease-in-out	duration-200 bg-[#ebebeb]">
            CONTINUE SHOPPING
          </button>
        </div>
      </div>
    </div>
  );
};

export default Do;
