"use client";

import { twMerge } from "tailwind-merge";
import SmallLoader from "../SmallLoader";
import { Product } from "../../../../sanity.types";
import Quantity from "../Quantity";
import PriceView from "../PriceView";
import useCartStore from "../../../../store";
import toast from "react-hot-toast";

interface Props {
  product:Product;
  className?: string;
}

const AddToCartButton = ({ product, className }: Props) => {

  const { addItem, getItemCount } = useCartStore();
  const itemCount = getItemCount(product?._id);

  const isOutOfStock = product?.stock === 0;

  return (
    <div className="w-full">
    { itemCount ? (
      <div className="w-full text-sm">
        <div className="flex items-center justify-between">
          <span className="">Quantity</span>
          <Quantity product={product}/>
        </div>
        <div className="flex items-center justify-between border-t pt-1">
          <span>Subtotal</span>
          <PriceView price={product?.price ? product?.price*itemCount:0}/>
        </div>
      </div>
    ) : (
      <button
      onClick={() => {
        addItem(product);
        toast.success(`${product?.title?.substring(0,12)}... added successfully`)
      }}
      disabled={isOutOfStock}
      className="border cursor-pointer w-full py-5 tiny text-white hover:text-[#231f20] hover:bg-[#ebebeb] ease-in-out	duration-200 bg-[#231f20]">
      ADD TO BASKET
    </button>
    )}
    </div>
  );
};

export default AddToCartButton;