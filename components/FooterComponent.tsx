import React, { FC } from "react";

const Footer: FC<{ className?: string }> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${className} text-cream bg-cream/10 p-[15px] text-center`}
    >
      Superheroes Database © {currentYear} by Oleksandra Shapovaliuk. All rights
      reserved
    </footer>
  );
};

export default Footer;
