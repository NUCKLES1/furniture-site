import React from "react";
import Image from "next/image";
import pic from "../components/images/next.svg";
import dc1 from "../components/images/dc1.png";
import dc2 from "../components/images/dc2.png";
import dc3 from "../components/images/dc3.png";
import dc4 from "../components/images/dc4.png";
import ProductCard from "./ProductCard";
import List from "./List";
import ProductGrid from "./ProductGrid";


const Section2  = () => {
   

  return (
    <div className="w-full h-[100vh] pt-40 max-sm:h-auto bg-[#ebebeb]">
      <div className="w-[98%] max-sm:w-[98%] ml-[1%] flex  justify-between max-sm:block">
        <p className="text-7xl bold max-sm:text-[7rem] text-[#231f20]">SHOP</p>
        <p className="text-[#231f20] tiny pt-14 relative max-sm:top-[2rem] mt-4 max-sm:text-[0.8rem] max-sm:pl-2 underline">
          VISIT SHOP
        </p>
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
