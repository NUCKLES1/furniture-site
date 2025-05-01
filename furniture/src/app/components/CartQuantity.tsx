import React from "react";
import { Product } from "../../../sanity.types";
import { PiMinus, PiPlus } from "react-icons/pi";
import useCartStore from "../../../store";
import toast from "react-hot-toast";
import { LiaTimesSolid } from "react-icons/lia";

interface Props {
  product: Product;
  className?: string;
}

const CartQuantity = ({ product, className }: Props) => {
  const { addItem, getItemCount, deleteCartProduct, removeItem } =
    useCartStore();

  const itemCount = getItemCount(product?._id);

  const isOutOfStock = product?.stock === 0;
  const handleRemoveProduct = () => {
    removeItem(product?._id);
    if (itemCount > 1) {
      toast.success("Quantity Decreased Successfully");
    } else {
      toast.success(`${product?.title?.substring(0, 12)} removed successfully`);
    }
  };

  const handleDelete = (id: string) => {
    deleteCartProduct(id);
    toast.success("Product Deleted Successfully");
  };

  return (
    <div className="flex items-center mt-2 border-t border-b border-black text-base">
      <button
        onClick={() => removeItem(product._id)}
        disabled={itemCount === 0 || isOutOfStock}
        className={
          "p-3 text-center border-r border-black text-[#231f20] hover:bg-[#231f20] duration-300 hover:text-white"
        }
      >
        <PiMinus className="text-[18px]" />
      </button>
      <span className="font-semibold w-12 text-center text-[#231f20] text-[14px]">
        {itemCount}
      </span>
      <button
        onClick={() => {
          addItem(product);
          toast.success(
            `${product?.title?.substring(0, 12)}... added successfully`
          );
        }}
        className="p-3 text-[#231f20] text-center border-r border-l border-black hover:bg-[#231f20] duration-300 hover:text-white"
      >
        <PiPlus className="text-[18px]" />
      </button>
      <button
        className="p-3 text-[#231f20] text-center border-r border-black hover:bg-[#231f20] duration-300 hover:text-white"
        onClick={() => handleDelete(product?._id)}
      >
        <LiaTimesSolid className="text-[18px]" />
      </button>
    </div>
  );
};

export default CartQuantity;

