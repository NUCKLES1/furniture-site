"use client";

import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import useCartStore from "../../../store";
import Container from "../components/Component";

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

  const cartProducts = getGroupedItems();

  return (
    <div>
        <p>hi</p>
      <Container>
        {!cartProducts?.length ? (
          <>
            {cartProducts?.map(({ product }) => {
              return (
                <div key={product._id}>
                  <p>{product?.title}</p>
                </div>
              );
            })}
          </>
        ) : (
          <div></div>
        )}
      </Container>
    </div>
  );
};

export default CartPage;
