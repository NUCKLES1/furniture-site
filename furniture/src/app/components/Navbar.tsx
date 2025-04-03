"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import { PiShoppingCartThin } from "react-icons/pi";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const [showi, setShowi] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 10) {
      setShowi(false);
    } else {
      setShowi(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const [isActive, setIsActive] = useState(false);
  const toggleButton = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
      <div className="w-[98%] fixed ml-[1%] mt-3 z-[999] max-sm:bottom-5 bg-[#ebebeb] text-center h-[52px] flex border">
        <ul className="w-[30%] h-full tiny flex max-sm:hidden relative">
          <div className="show block w-[33%]">
            <Link href={"/shop"}>
              <button
                className="w-full hove bg-transparent btn bord
                 h-full"
              >
                SHOP
              </button>
            </Link>
          </div>
          <li className="w-[33%] h-full pt-5 hove bord text-center">ABOUT</li>
          <li className="w-[33%] h-full pt-5 hove bord text-center">JOURNAL</li>
        </ul>
        <div className="w-[40%] text-center max-sm:hidden bord">
          <p className="p-3">
            <Link href="/">nuckles daan</Link>
          </p>
        </div>
        <div className="w-[30%] max-sm:hidden flex">
          <p className="w-[55%] h-full pt-5 tiny hove bord text-center">
            PROFESSIONAL
          </p>
          <div className="w-[15%] h-full bord text-center hove">
            <p className="pt-5 tiny">EN</p>
          </div>
          <SearchBar />
          <div className="w-[15%] h-full hove">
            <Link href={"/cart"} className="h-full w-full flex">
              
              <PiShoppingCartThin className="w-6 h-6 md:h-4 md:w-4 max-md:ml-4 md:mt-4 mt-[0.8rem] ml-[1rem]"></PiShoppingCartThin>
              <CartIcon />
            </Link>
          </div>
        </div>

        <ul className="w-[30%] h-full lg:hidden md:hidden tiny flex relative">
          <div className="w-[50%] text-center bord">
            <p className="pt-2 text-3xl text-[#231f20] font-bold">nb</p>
          </div>
          <div className="w-[50%] h-full bord hove">
            <button
              onClick={() => setIsActive((prev) => !prev)}
              className="w-full h-full text-center max-sm:ml-4 pb-2 hove"
            >
              {!isActive ? (
                <CiSearch className="w-6 h-6 mt-4 md:h-4 md:w-4 max-md:ml-1 max-md:mt-[0.7rem]" />
              ) : (
                <LiaTimesSolid className="w-6 h-6 md:h-4 md:w-4 max-md:ml-1 md:mt-4 mt-[0.8rem] ml-[1rem]" />
              )}
            </button>
            {isActive && (
              <div className="bg-[#000000] w-full">
                <div className="absolute w-[45vh] h-[90.5vh] flex left-0 top-[-91vh] bg-[#03a77e]">
                  <div className="w-[15%] bordi h-full"></div>
                  <div className="w-[85%]">
                    <input
                      type="text"
                      placeholder="SEARCH"
                      className="w-full pl-4 bg-transparent text-[3rem] pt-16 bordb font-bold outline-none text-black"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </ul>
        <div className="show block lg:hidden md:hidden w-[40%]">
          <div className="ml-[40%] h-full maker pt-5 hove bord text-center">
            <label className="burger">
              <input type="checkbox" id="burger" />
              <span></span>
              <span></span>
            </label>
          </div>
          <div className="hidy">
            <ul className="border bg-[#231f20]">
              <li className="w-full h-[52px] pt-5 text-[#ebebed] hovee text-center">
                SHOP
              </li>
              <li className="w-full h-[52px] pt-5 hovee text-[#ebebed] text-center">
                ABOUT
              </li>
              <li className="w-full h-[52px] pt-5 hovee text-[#ebebed] text-center">
                JOURNAL
              </li>
            </ul>
          </div>
        </div>

        <div className="w-[30%] lg:hidden md:hidden flex">
          <div className="w-[50%] h-full bord text-center hove">
            <p className="pt-5 tiny">EN</p>
          </div>
          <div className="w-[50%] h-full hove">
            <PiShoppingCartThin className="w-6 h-6 md:h-4 md:w-4 max-md:ml-4 md:mt-4 mt-[0.8rem] ml-[1rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
