
import React from "react";
import List from "./List";
import Link from "next/link";


const Section2  = () => {

  return (
    <div className="w-full h-[100vh] pt-40 max-sm:h-auto bg-[#ebebeb]">
      <div className="w-[98%] max-sm:w-[98%] ml-[1%] flex  justify-between max-sm:block">
        <p className="text-7xl bold max-sm:text-[7rem] text-[#231f20]">SHOP</p>
        <Link href={"/shop"}>
        <button className="text-[#231f20] tiny pt-14 relative max-sm:top-[2rem] mt-4 max-sm:text-[0.8rem] max-sm:pl-2 underline">
          VISIT SHOP
        </button>
        </Link>
        <p className="text-7xl max-sm:text-[7rem] bold text-[#231f20] max-sm:mt-[-110px]">
          NOW
        </p>
      </div>
      {/*<ProductGrid /*/}
      <List />
    </div>
  );
};

export default Section2;
