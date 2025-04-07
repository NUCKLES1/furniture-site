"use client";
import React from "react";
import { CATEGORIES_QUERYResult, Category } from "../../../sanity.types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Categorys = ({ categories }: { categories: CATEGORIES_QUERYResult }) => {
  const pathname = usePathname();

  return (
    <div className="pt-[8rem] pb-[3rem] lg:ml-[20%] lg:border-l border-black max-md:min-w-40 max-sm:ml-[5%] border-l">
      <div className="w-5 web lg:block lg:pl-10 max-sm:pl-5 text-transparent text-[5rem] mt-2">
        <div className="lg:block text-[25px] text-left mt-2 max-sm:mt-[-4rem] block text-black max-sm:mb-[-3rem] max-sm:pb-[2.5rem] ">
          ALL
        </div>
        {categories?.map((category) => (
          <Link
            key={category?._id}
            href={`/category/${category?.slug?.current}`}
            className={`max-sm:mt-[1rem] hover:text-black leading-10 max-sm:leading-none block max-sm:text-[20px] text-[25px] ${pathname === category?.slug?.current && "webi"}`}
          >
            {category?.title}
            <span
              className={` -bottom-0.5 left-1/2 w-0 h-0.5${pathname === category?.slug?.current && "w-1/2"}`}
            />
            <span
              className={` -bottom-0.5 left-1/2 w-0 h-0.5${pathname === category?.slug?.current && "w-1/2"}`}
            />
          </Link>
        ))}

        {/*  <div className="hider overflow">
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
  */}
      </div>
    </div>
  );
};

export default Categorys;
