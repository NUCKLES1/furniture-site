"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import { PiShoppingCartThin } from "react-icons/pi";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import Do from "./Do";

const Nav = () => {
  const [showi, setShowi] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 10) {
      setShowi(false);
    } else {
      setShowi(true);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

    const [isStyle, setIsStyle] = useState(false);
  
    const toggleStyles = () => {
      setIsStyle(!isStyle);
    };
  
    const [isStyles, setIsStyles] = useState(false);
  
    const toggleStyless = () => {
      setIsStyles(!isStyles);
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

  const [isStyled, setIsStyled] = useState(false);

  const toggleStyle = () => {
    setIsStyled(!isStyled);
  };

  return (
    <div className={`active ${showi && "hidden"}`}>
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
          <li className="w-[33%] h-full pt-5 hove bord text-center">
            <Link href="/about">ABOUT</Link>
          </li>
          <div className="show block w-[30%]">
            <li className="w-full h-full pt-5 hove relative z-[999] bord text-center">
              CONTACT
            </li>
          </div>
        </ul>
        <div className="w-[40%] text-center max-sm:hidden bord">
          <p className="pt-3 text-[#231f20ba] font-semibold">
            <Link href="/">nuckles daan</Link>
          </p>
        </div>
        <div className="w-[30%] max-sm:hidden flex">
          <p className="w-[55%] h-full pt-5 tiny hove bord text-center">
            <Link href="/contact">CONTACT</Link>
          </p>

          <div className="w-[15%] h-full bord text-center hove">
            <p className="pt-5 tiny">EN</p>
          </div>

          <SearchBar />

          <div className="w-[15%] h-full">
            <div className="w-full h-full hove" onClick={toggleStyle}>
              <div className="h-full w-full flex">
                {!isStyled ? (
                  <PiShoppingCartThin className="w-6 h-6 mt-4 md:h-4 md:w-4 max-md:ml-1 max-md:mt-[0.7rem] ml-[1rem]" />
                ) : (
                  <LiaTimesSolid className="w-6 h-6 md:h-4 md:w-4 max-md:ml-1 md:mt-4 mt-[0.8rem] ml-[1rem]" />
                )}
                <CartIcon />
              </div>
            </div>
            <div
              style={{
                width: isStyled ? "28%" : "0",
                opacity: isStyled ? "1" : "0",
                transition: "width 1.2s ease-in-out",
                animationDelay: "opacity 2s ease-in-out",
              }}
              className="absolute top-[4rem] right-0 bg-[#ebebeb] h-[85vh] p-2 w-[0%] border overflow-hidden"
            >
              <Do />
            </div>
          </div>
        </div>

        <ul className="w-[30%] h-full lg:hidden md:hidden tiny flex relative">
          <div className="w-[50%] text-center bord">
            <Link href="/">
              <p className="pt-2 text-3xl text-[#231f20] font-bold">nb</p>
            </Link>
          </div>

          <SearchBar />
        </ul>
        <div className="lg:hidden md:hidden w-[40%]">
          <div className=" h-full pt-1 bord text-center">
            <button
              onClick={toggleStyles}
              className="lg:hidden text-black h-full text-center"
            >
              {!isStyle ? (
                <CiMenuBurger className="w-6 h-6  transition-all text-black duration-500" />
              ) : (
                <LiaTimesSolid className="w-6 h-6 transition-all text-black duration-500" />
              )}
            </button>
            <div
              className="absolute lg:hidden z-10 left-0 top-[-20vh] bg-[#231f20] w-[40%] ml-[30%] mx-auto text-center overflow-hidden"
              style={{
                height: isStyle ? "20vh" : "0px",
                transition: "height 0.5s ease-in-out",
              }}
            >
              <ul className=" bg-[#231f20]">
                <li className="w-full h-full py-4 text-[#ebebed] hovee text-center">
                  <Link href="/shop">SHOP</Link>
                </li>
                <li className="w-full h-[52px] border-t border-black py-4 hovee text-[#ebebed] text-center">
                  <Link href="/about">ABOUT</Link>
                </li>
                <li className="w-full h-[52px] border-t border-black py-4 hovee text-[#ebebed] text-center">
                  <Link href="/contact">CONTACT</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-[30%] lg:hidden md:hidden flex">
          <div className="w-[50%] h-full bord text-center hove">
            <p className="pt-5 tiny">EN</p>
          </div>
          <div className="w-[50%] h-full">
            <div className="w-full pl-2 h-full hove" onClick={toggleStyle}>
              <div className="h-full w-full flex">
                {!isStyled ? (
                  <PiShoppingCartThin className="w-6 h-6 mt-4 md:h-4 md:w-4 max-md:ml-1 max-md:mt-[0.7rem] ml-[1rem]" />
                ) : (
                  <LiaTimesSolid className="w-6 h-6 md:h-4 md:w-4 max-md:ml-1 md:mt-4 mt-[0.8rem] ml-[1rem]" />
                )}
                <CartIcon />
              </div>
            </div>
            <div
              style={{
                width: isStyled ? "100%" : "0",
                opacity: isStyled ? "1" : "0",
                transition: "width 1.2s ease-in-out",
                animationDelay: "opacity 2s ease-in-out",
              }}
              className="absolute top-[-76vh] right-0 bg-[#ebebeb] h-[75vh] p-2 w-[0%] border overflow-hidden"
            >
              <Do />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: isStyled ? "fixed" : "absolute",
          opacity: isStyled ? "1" : "0",
          height: isStyled ? "100vh" : "0",
          display: isStyled ? "block" : "none",
        }}
        onClick={toggleStyle}
        className="hidden
          top-0 left-0 z-10 w-full bg-[#00000078]"
      ></div>
         <div
        style={{
          position: isStyle ? "fixed" : "absolute",
          opacity: isStyle ? "1" : "0",
          height: isStyle ? "100vh" : "0",
          display: isStyle ? "block" : "none",
        }}
        onClick={toggleStyles}
        className="hidden
          top-0 left-0 z-10 w-full bg-[#00000078]"
      ></div>
    </div>
  );
};

export default Nav;
