import React, { FC } from "react";

const ProductSceleton: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[310px] gap-[10px] bg-skyblue/60 p-[10px] rounded-md">
      <div className="animate-pulse w-full h-[300px] rounded-xl bg-cream/30 mb-[8px]"></div>
      <div className="animate-pulse h-[12px] w-2/3 bg-gray-300 rounded-xl"></div>
      <div className="animate-pulse h-[16px] w-1/3 bg-gray-300 rounded-xl"></div>
    </div>
  );
};

export default ProductSceleton;
