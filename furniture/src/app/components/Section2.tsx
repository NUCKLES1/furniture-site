import React from "react";
import List from "./List";
import ProductGrid from "./ProductGrid";
import { getAllCategories } from "@/sanity/helper/query";
import Categorys from "../components/Categorys";


const Section2  = async () => {
   
   const categories = await getAllCategories();

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
      <Categorys categories={categories}/>
       
     
    </div>
  );
};

export default Section2;
