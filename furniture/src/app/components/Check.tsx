"use client";

import React, { useEffect, useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import useCartStore from "../../../store";
import Loading from "../components/Loading";
import PriceView from "../components/PriceView";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PaystackButton } from 'react-paystack'
import CheckoutQuantity from "../components/CheckoutQuantity";
import router, {useRouter} from "next/router";
import CheckoutNav from "../components/CheckoutNav";



const page = () => {
  const publicKey = "pk_test_a1bf2492215b15bd9d28015555cd369f3e5bb339";
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleSuccess = () => {
    // Payment successful, navigate to another page
    router.push('/cart');
  };

  const handleClose = () => {
    router.push('/checkout');
  };


  const config = {
    reference: (new Date()).getTime().toString(),
  };

  const { getTotalPrice, getTotalFeePrice, getGroupedItems } = useCartStore();

  const cartProducts = getGroupedItems();

  const itemCount = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  const price = getTotalFeePrice();

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);
    if (!isClient) {
      return <Loading />;
    }

  return (
    <div className="w-full h-full">

      <CheckoutNav />
    <div className="bg-[#ebebeb] h-auto w-full lg:px-36 max-sm:px-4">
      <div className="pt-20 max-sm:pt-6 pb-20">
        <div className="flex">
          <button className="w-14 border duration-300 h-14 bg-[#231f20] text-white hover:text-[#231f20] hover:bg-[#ebebeb] p-4 text-[1.5rem]">
            <HiOutlineArrowLeft className="" />
          </button>
          <p className="pl-4 font-semibold text-2xl uppercase text-[#231f20] pt-4">
            01. Billing details
          </p>
        </div>
        <div className="pt-10">
          <div className="w-full lg:flex">
            <form action="">
              <input
                type="text"
                placeholder="First name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="lg:w-44 max-sm:w-full bg-transparent text-[12px] max-sm:text-xl max-sm:pb-2 border-b outline-none hover:border-[#231f20] pb-2 border-[#746d6d46] text-black"
              />
            </form>
            <form action="">
              <input
                type="text"
                placeholder="Last name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className="w-44 max-sm:w-full bg-transparent text-[12px] max-sm:text-xl max-sm:pb-2 border-b outline-none hover:border-[#231f20] border-[#746d6d46] text-black pb-2 lg:ml-6 mt-8"
              />
            </form>
            <form action="">
              <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-44 max-sm:w-full bg-transparent text-[12px] max-sm:text-xl max-sm:pb-2 border-b outline-none hover:border-[#231f20] border-[#746d6d46] text-black pb-2 lg:ml-6 mt-8"
              />
            </form>
            <form action="">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-44 max-sm:w-full bg-transparent text-[12px] max-sm:text-xl max-sm:pb-2 border-b outline-none hover:border-[#231f20] border-[#746d6d46] text-black pb-2 lg:ml-6 mt-8"
              />
            </form>
            <form action="">
              <input
                type="text"
                placeholder="State"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-44 max-sm:w-full bg-transparent text-[12px] max-sm:text-xl max-sm:pb-2 border-b outline-none hover:border-[#231f20] border-[#746d6d46] text-black pb-2 lg:ml-6 mt-8"
              />
            </form>
          </div>
          <form action="">
            <input
              type="text"
              placeholder="Street Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-60 max-sm:w-full bg-transparent text-[12px] max-sm:text-xl max-sm:pb-2 border-b pt-8 outline-none hover:border-[#231f20] pb-2 border-[#746d6d46] text-black"
            />
          </form>
        </div>
        <div className="w-full mt-32 max-sm:mt-10  lg:flex border-t border-black">
          <div className="w-[40%] max-sm:w-full pt-6">
            <p className="font-semibold text-2xl uppercase text-[#231f20] pt-4">
              02. Your order
            </p>
            <div className="w-[96%] mt-8 max-sm:h-[18rem] h-[25rem] overflow-auto">
              {cartProducts?.map(({ product }) => {
                return (
                  <div className="pt-2 flex h-28" key={product._id}>
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
                          className="w-18 h-24  object-cover group-hover:scale-110 overflow-hidden duration-300 bg-[#e3e3e3]"
                        />
                      </Link>
                    )}
                    <div className="w-full flex justify-between pt-2 pl-2">
                      <div className="w-full justify-between">
                        <div>
                          <p className="font-bold leading-none uppercase text-[#231f20]">
                            {product.title}
                          </p>
                          <span className="text-[11px] leading-none font-normal text-[#231f20]">
                            {product.description}
                          </span>
                        </div>
                        <div className="text-[11px] leading-none text-[#231f20] pt-8 font-normal uppercase">
                          {" "}
                          <PriceView price={product?.price as number} />
                        </div>
                      </div>
                      <div>
                      <CheckoutQuantity product={product}/>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-[60%] max-sm:w-full pt-6 border-l-8 border-[#231f20]">
            <div className="h-36">
              <p className="pl-8 font-semibold text-2xl uppercase text-[#231f20] pt-4">
                03. Delivery method
              </p>
              <p className="tiny w-80 text-[#231f20] pl-8 pt-8">
                Place your order and we will contact you within 48h with the
                shipping cost. Non-EU countries: The price of the products
                listed online does not include the local taxes and customs.
              </p>
            </div>
            <div className="border-t h-36 border-black">
              <p className="pl-8 font-semibold text-2xl uppercase text-[#231f20] pt-4">
                04. Payment method
              </p>
              <p className="tiny w-80 text-[#231f20] pl-8 pt-8">
                Shipping out of Nigeria or a close country
              </p>
            </div>
            <div className="border-t h-auto border-black justify-end">
              <div className="w-[70%] max-sm:ml-2 max-sm:w-full lg:ml-[30%] pt-8 h-80">
                <ul className="uppercase flex w-full text-[12px] justify-between">
                  <li>Delivery Fee</li>
                  <li>₦ 1500.00</li>
                </ul>
                <ul className="uppercase pt-2 flex w-full text-[12px] justify-between">
                  <li>subtotal</li>
                  <li>
                    {" "}
                    <PriceView price={getTotalPrice()} />
                  </li>
                </ul>
                <div className="border-t pt-4 mt-4 border-b h-16 border-black">
                  <ul className="w-full font-semibold flex justify-between uppercase text-[#231f20]  text-3xl">
                    <li>Total</li>
                    <li>
                      {" "}
                      <PriceView price={getTotalFeePrice()} />
                    </li>
                  </ul>
                </div>
                <div className="mt-8 text-[11px] flex">
                  <input
                    type="checkbox"
                    className="w-6 h-6 bg-transparent cursor-pointer"
                  />
                  <p className="pl-2 pt-1">
                    {" "}
                    I have read and agree to the website terms and conditions *
                  </p>
                </div>
                <PaystackButton publicKey={publicKey} firstname={firstname} lastname={lastname} phone={phone} email={email} amount={price * 100} 
                onSuccess={handleSuccess}
                onClose={handleClose}
                {...config}
                className="border mt-8 cursor-pointer w-full py-5 tiny text-white hover:text-[#231f20] hover:bg-[#ebebeb] ease-in-out	duration-300  bg-[#231f20]"
                >
                  PLACE ORDER
                </PaystackButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default page;
