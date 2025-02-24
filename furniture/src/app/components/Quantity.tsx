import React from "react";
import { Product } from "../../../sanity.types";
import { PiMinus, PiPlus } from "react-icons/pi";
import useCartStore from "../../../store";
import toast from "react-hot-toast";

interface Props {
  product: Product;
  className?: string;
}

const Quantity = ({ product, className }: Props) => {
  const { addItem, getItemCount, removeItem } = useCartStore();

  const itemCount = getItemCount(product?._id);

  const isOutOfStock = product?.stock === 0;
  const handleRemoveProduct = () => {
    removeItem(product?._id);
    if(itemCount > 1){
      toast.success("Quantity Decreased Successfully");  
    }else{
      toast.success(`${product?.title?.substring(0,12)} removed successfully`)
    }
  };

  console.log(itemCount);
  console.log(handleRemoveProduct);

  return (
    <div className="flex items-center gap-1 text-base">
      <button
        onClick={handleRemoveProduct}
        disabled={itemCount === 0 || isOutOfStock}
        className={"p-2 text-center h bg-black text-white rounded-md"}
      >
        <PiMinus />
      </button>
      <span className="font-semibold w-8 text-center">{itemCount}</span>
      <button
        onClick={() => {
          addItem(product);
          toast.success(
            `${product?.title?.substring(0, 12)}... added successfully`
          );
        }}
        className="p-2 bg-black text-white text-center rounded-md"
      >
        <PiPlus />
      </button>
    </div>
  );
};

export default Quantity;
