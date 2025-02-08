import React from "react";
import { getTablesData } from "@/lib/getData";
import { TableData } from "../../../types";
import ProductCard from "./ProductCard";
import Tablecard from "./Tablecard";
export const revalidate = 0;

const Table = async () => {
  const tables: TableData[] = await getTablesData();
  return (
    <div className="w-full mt-12 flex ml-1 max-md:h-[45vh] max-md:w-[98%] max-sm:ml-0 max-sm:block max-sm:h-auto h-[60vh]">
      {tables?.map((item) => <Tablecard item={item} key={item?._id} />)}
    </div>
  );
};

export default Table;