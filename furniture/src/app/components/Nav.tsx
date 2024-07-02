import React from "react";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";

const Nav = () => {
  return (
    <div className="w-[98%] fixed ml-[1%] mt-3 max-sm:bottom-5 bg-[#ebebeb] text-center h-[52px] flex border">
      <ul className="w-[30%] h-full tiny flex max-sm:hidden relative">
        <div className="show block w-[33%]">
          <li className="w-full h-full pt-5 hove bord text-center">SHOP </li>
          <div className="hider overflow">
            <ul className="border bg-[#231f20]">
              <li className="w-full h-[52px] pt-5 text-[#ebebed] hovee text-center">
                TABLE
              </li>
              <li className="w-full h-[52px] pt-5 hovee text-[#ebebed] text-center">
                SEAT
              </li>
              <li className="w-full h-[52px] pt-5 hovee text-[#ebebed] text-center">
                STORAGE
              </li>
              <li className="w-full h-[52px] pt-5 hovee text-[#ebebed] text-center">
                ACCESSORIES
              </li>
              <li className="w-full h-[52px] pt-5 hovee text-[#ebebed] text-center">
                FRAGS
              </li>
            </ul>
          </div>
        </div>
        <li className="w-[33%] h-full pt-5 hove bord text-center">ABOUT</li>
        <li className="w-[33%] h-full pt-5 hove bord text-center">JOURNAL</li>
      </ul>
      <div className="w-[40%] text-center max-sm:hidden bord">
        <p className="pt-3">nuckles daan</p>
      </div>
      <div className="w-[30%] max-sm:hidden flex">
        <p className="w-[55%] h-full pt-5 tiny hove bord text-center">
          PROFESSIONAL
        </p>
        <div className="w-[15%] h-full bord text-center hove">
          <p className="pt-5 tiny">EN</p>
        </div>
        <div className="w-[15%] h-full bord hove">
          <CiSearch className="w-6 h-6 md:h-4 md:w-4 max-md:ml-1 md:mt-4 mt-[0.8rem] ml-[1rem]" />
        </div>
        <div className="w-[15%] h-full hove">
          <PiShoppingCartThin className="w-6 h-6 md:h-4 md:w-4 max-md:ml-1 md:mt-4 mt-[0.8rem] ml-[1rem]" />
        </div>
      </div>

      <ul className="w-[30%] h-full lg:hidden md:hidden tiny flex relative">
        <div className="w-[50%] text-center bord">
          <p className="pt-2 text-3xl text-[#231f20] font-bold">nb</p>
        </div>
        <div className="w-[15%] max-sm:w-[50%] h-full bord hove">
          <CiSearch className="w-6 h-6 md:h-4 md:w-4 max-md:ml-4 md:mt-4 mt-[0.8rem]" />
        </div>
      </ul>
      <div className="show block lg:hidden md:hidden w-[40%]">
        <p className="w-full h-full pt-5 hove bord text-center">nb </p>
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
  );
};

export default Nav;
