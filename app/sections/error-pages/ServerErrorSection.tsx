"use client";
import React, { FC, useEffect } from "react";
import Button from "@/components/ButtonComponent";

const ServerErrorSection: FC = ({
  error,
}: {
  error?: Error & { digest?: string };
  reset?: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <section>
      <div className="container flex flex-col items-center justify-center space-y-[15px] my-[50px] text-center bg-cream py-[50px] rounded-xl lg:space-y-[30px] lg:my-[70px]">
        <h1 className="text-crimson text-[64px] font-bold leading-none lg:text-[96px]">
          505
        </h1>
        <h2 className="text-navy text-[24px] font-bold lg:text-[32px]">
          Oops! Look likes something going wrong
        </h2>
        <p className="text-navy">
          Server error! We’ll have it figured out in no time.
          <br /> Try to update page:
        </p>
        <Button
          text="Try again"
          background="skyblue"
          tag="button"
          type="reset"
          className="max-w-[150px]"
          onClick={reloadPage}
        />
      </div>
    </section>
  );
};

export default ServerErrorSection;
