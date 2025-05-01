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

const CheckoutQuantity = ({ product, className }: Props) => {
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
    <div>

      <span>
        x{itemCount}
      </span>
    
    </div>
  );
};

export default CheckoutQuantity