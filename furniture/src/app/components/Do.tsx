"use client";

import { useEffect, useState } from "react";
import useCartStore from "../../../store";

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Loading from "./Loading";
import PriceView from "./PriceView";
import toast from "react-hot-toast";
import { PiMinus, PiPlus } from "react-icons/pi";
import { LiaTimesSolid } from "react-icons/lia";
import CartQuantity from "./CartQuantity";

const Do = () => {
  const {
    deleteCartProduct,
    getTotalPrice,
    getItemCount,
    resetCart,
    addItem,
    removeItem,
    getGroupedItems,
  } = useCartStore();

  const cartProducts = getGroupedItems();

  const itemCount = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  const [isClient, setIsClient] = useState(false);

  const handleDelete = (id: string) => {
    deleteCartProduct(id);
    toast.success("Product Deleted Successfully");
  };

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return <Loading />;
  }

  return (
    <div className="w-full h-full">
      <div
        style={{
          transition: "background-color 0.3s ease",
        }}
      >
        <div className=" w-full flex justify-between ">
          <div>
            <p className=" bold text-[#231f20] max-sm:text-[54px] text-[44px] leading-none">
              CART
            </p>
          </div>
          <div>
            <p className=" bold max-sm:text-[54px] text-[#231f20] text-[44px] leading-none">
              {itemCount}
            </p>
          </div>
        </div>
        <div className=" mt-4 bord-t border-[#00000094]"></div>
        <div className="h-[47vh] max-sm:h-[43vh] overflow-auto w-full">
          {cartProducts?.length ? (
            <>
              {cartProducts?.map(({ product }) => {
                return (
                  <div
                    className="p-2 flex border-b border-black h-26"
                    key={product._id}
                  >
                    {product?.images && (
                      <Link
                        href={`/product/${product?.slug?.current}`}
                        className="   overflow-hidden group"
                      >
                        <Image
                          src={urlFor(product?.images[0]).url()}
                          alt="productImage"
                          width={140}
                          height={100}
                          loading="lazy"
                          className="w-18 h-18  object-cover group-hover:scale-110 overflow-hidden duration-300 bg-pink-300"
                        />
                      </Link>
                    )}
                    <div className="w-full pt-2 pl-2">
                      <div className="w-full flex justify-between">
                        <div>
                          <p className="font-semibold leading-3">
                            {product.title}
                          </p>
                          <span className="text-[12px] font-normal">
                            {product.description}
                          </span>
                        </div>
                        <div>
                          {" "}
                          <PriceView
                            price={(product?.price as number) * itemCount}
                          />
                        </div>
                      </div>
                    </div>
                    <CartQuantity product={product}/>
                  </div>
                );
              })}
            </>
          ) : (
            <div className="tiny text-left pt-4">
              {" "}
              {/*  */}
              <p>YOUR CART IS EMPTY</p>
            </div>
          )}
        </div>
      </div>

      <div>
        <div className="w-full py-4 bord-t flex uppercase justify-between">
          <p>SUBTOTAL</p>
          <PriceView price={getTotalPrice()} />
        </div>
        <button className="border  mt-2 cursor-pointer w-full py-5 tiny text-white hover:text-[#231f20] hover:bg-[#ebebeb] ease-in-out	duration-200 bg-[#231f20]">
          CHECKOUT
        </button>
        <button className="border mt-2 cursor-pointer w-full py-5 tiny text-[#231f20] hover:text-[#ebebeb] hover:bg-[#231f20] ease-in-out	duration-200 bg-[#ebebeb]">
          CONTINUE SHOPPING
        </button>
      </div>
    </div>
  );
};

export default Do;
