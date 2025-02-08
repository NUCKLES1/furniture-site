import React from "react";
import { motion } from "framer-motion";

const NoProducts = ({
  selectedTab,
  className,
}: {
  selectedTab: string;
  className?: string;
}) => {
  return (
    <div className={"flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-[80%] mt-10"}>
      <motion.div
      initial={{opacity:0,y:-20}}
      animate={{opacity:1,y:0}}
      transition={{ duration: 0.5 }}>
        <p className="text-[1.5rem] font-bold">No Product Available</p>
      </motion.div>
      <motion.p className="text-gray-400"
       initial={{opacity:0}}
       animate={{opacity:1}}
       transition={{ delay:0.2, duration: 0.5 }}>
        We&apos;re sorry, but there are no product matching on {""}
        <span className="text-base text-black font-semibold">
          {selectedTab}
        </span>
         criteria at the moment.
      </motion.p>
      <motion.div className="text-blue-400"
       animate={{scale:[1,1.1,1]}}
       transition={{repeat:Infinity, duration:1.5}}
      >
        <span>We&apos;re restocking shortly</span>
      </motion.div>
      <motion.p className="text-gray-400"
       initial={{opacity:0}}
       animate={{opacity:1}}
       transition={{ delay:0.4, duration: 0.5 }}>
        please check back later or explore our other product categories.
      </motion.p>
    </div>
  );
};

export default NoProducts;
