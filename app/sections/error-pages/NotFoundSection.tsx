import React, { FC } from "react";
import Button from "@/components/ButtonComponent";

const NotFoundSection: FC = () => {
  return (
    <section>
      <div className="container flex flex-col items-center justify-center space-y-[15px] my-[50px] text-center bg-cream py-[50px] rounded-xl lg:space-y-[30px] lg:my-[70px]">
        <h1 className="text-crimson text-[64px] font-bold leading-none lg:text-[96px]">
          404
        </h1>
        <h2 className="text-navy text-[24px] font-bold lg:text-[32px]">
          Oops! Look likes something going wrong
        </h2>
        <p className="text-navy">
          Page cannot be found! We’ll have it figured out in no time.
          <br /> Menwhile, cheek out these fresh ideas:
        </p>
        <Button
          text="Go to catalog"
          background="skyblue"
          href="/catalog"
          tag="a"
          className="max-w-[150px]"
        />
      </div>
    </section>
  );
};

export default NotFoundSection;
