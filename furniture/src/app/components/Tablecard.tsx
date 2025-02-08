import React from "react";
import { TableData } from "../../../types";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { MdStar } from "react-icons/md";
import FormattedPrice from "./FormattedPrice";

const Tablecard = ({ item }: { item: TableData }) => {
  return (
    <div
      key={item?._id}
      className="w-[24%] max-sm:w-[96%] max-sm:ml-3 max-sm:h-[25rem]
       h-full ima overflow-hidden ml-2 max-sm:mt-2 bg-[#e3e3e3]"
    >
      <div className="text-left pt-4 pl-2 text-[#231f20] cont">
        <p className="liney">{item?.title}</p>
        <p className="text-[12px] mt-1">{item?.description}</p>
      </div>

      <Link href={`/product/${item?.slug?.current}`}>
        <Image
          src={urlFor(item?.image)?.url()}
          alt={item?._type}
          width={200}
          height={200}
          className="mt-8 max-md:mt-[-2rem] max-sm:mt-16 cale ml-10 max-sm:ml-[24%] hover:scale-105 max-md:ml-0"
        />
      </Link>
      <div className="flex mt-2 conti ml-2">
        <p className="text-[10px] mt-8">
          <FormattedPrice amount={item?.price} />
        </p>
        <p className="ml-2 text-[10px] mt-8">{item?.brand}</p>
      </div>
    </div>
  );
};

export default Tablecard;
