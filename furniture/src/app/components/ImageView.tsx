"use client";
import React, { useState } from "react";
import {
  internalGroqTypeReferenceTo,
  SanityImageCrop,
  SanityImageHotspot,
} from "../../../sanity.types";
import { motion, AnimatePresence } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface Props {
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
}
const ImageView = ({ images = [] }: Props) => {
  const [active, setActive] = useState(images[0]);
  return (
    <div className="w-full lg:hidden md:w-1/2 space-y-2 md:space-y-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={active?._key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full mb-4 max-h-[45vh] min-h-[45vh] overflow-hidden"
        >
          <Image
            src={urlFor(active).url()}
            alt="productImage"
            width={700}
            height={700}
            priority
            className="w-full h-96 max-h-[550px] min-h-[500px] object-cover group-hover:scale-110 rounded-md"
          />
        </motion.div>
      </AnimatePresence>
      <div className="grid grid-cols-6 ml-4 gap-2 h-16 md:h-28">
        {images?.map((image) => (
          <button
            onClick={() => setActive(image)}
            key={image?._key}
            className={`border rounded-md overflow-hidden ${active?._key === image?._key ? "ring-1 ring-black" : ""}`}
          >
            <Image
              src={urlFor(image).url()}
              alt="productimage"
              width={100}
              height={100}
              className="w-full h-auto object-contain"
            />
          </button>
        ))}
      </div>

      <div className="flex max-sm:hidden flex-row h-full overflow-x-hidden w-full">
        {images?.map((image) => (
          <div key={image?._key} className="">
            <Image
              src={urlFor(image).url()}
              alt="productimage"
              width={1800}
              height={800}
              className="w-[80rem] h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageView;
