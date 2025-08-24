import React, { FC } from "react";
import Link from "next/link";

const HeaderComponent: FC<{ className?: string }> = ({ className }) => {
  return (
    <header
      className={`${className} p-[15px] text-cream bg-cream/10 text-[24px] font-bold`}
    >
      <Link href="/">
        <p>SUPERHEROES DB</p>
      </Link>
    </header>
  );
};

export default HeaderComponent;
