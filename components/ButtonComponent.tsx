import React, { FC } from "react";
import Image from "next/image";

import Back from "@/images/vectors/back-arrow.svg";
import Further from "@/images/vectors/right-arrow.svg";
import Plus from "@/images/vectors/plus.svg";
import Delete from "@/images/vectors/delete.svg";

interface ButtonProps {
  className?: string;
  text: string;
  background?: "burgundy" | "skyblue" | "transparent" | "cream";
  fullWidth?: boolean;
  onClick?: () => void | string | undefined | Promise<void> | Promise<boolean>;
  href?: string;
  type?: "button" | "reset" | "submit";
  bordered?: boolean;
  tag?: "a" | "button";
  icon?: "back" | "further" | "plus" | "delete";
  disabled?: boolean;
}

const ButtonComponent: FC<ButtonProps> = ({
  className,
  text,
  background = "burgundy",
  fullWidth = false,
  onClick,
  href,
  type = "button",
  bordered,
  tag = "button",
  icon,
  disabled,
}) => {
  const Tag = tag;
  const finalBackground = bordered ? "transparent" : background;
  const backgroundClass =
    finalBackground === "burgundy"
      ? "bg-burgundy"
      : finalBackground === "skyblue"
      ? "bg-skyblue"
      : "bg-transparent";
  const textClass =
    finalBackground === "burgundy"
      ? "text-cream"
      : finalBackground === "skyblue"
      ? "text-cream"
      : bordered
      ? "text-cream"
      : "";
  const borderClass = bordered ? "border border-cream border-solid" : "";
  const widthClass = fullWidth ? "w-[100%]" : "";
  const hoverClass =
    finalBackground === "burgundy"
      ? "hover:bg-burgundy/70 duration-300"
      : finalBackground === "skyblue"
      ? "hover:bg-skyblue/70 duration-300"
      : bordered
      ? "hover:bg-cream/20 transition-colors duration-300"
      : "";

  const renderIcon = () => {
    if (icon === "back") {
      return (
        <Image
          src={Back}
          alt="Back arrow"
          width={20}
          height={20}
          className="ml-[8px] inline-block"
        />
      );
    }
    if (icon === "further") {
      return (
        <Image
          src={Further}
          alt="Further arrow"
          width={20}
          height={20}
          className="ml-[8px] inline-block"
        />
      );
    }
    if (icon === "plus") {
      return (
        <Image
          src={Plus}
          alt="Plus icon"
          width={20}
          height={20}
          className="ml-[8px] inline-block"
        />
      );
    }
    if (icon === "delete") {
      return (
        <Image
          src={Delete}
          alt="Delete icon"
          width={20}
          height={20}
          className="ml-[8px] inline-block"
        />
      );
    }
  };
  return (
    <>
      <Tag
        className={`${className} ${backgroundClass} ${borderClass} ${textClass} ${widthClass} ${hoverClass} py-[12px] px-[24px] rounded-xl flex items-center justify-center group`}
        onClick={onClick}
        type={type}
        href={href}
        disabled={disabled}
      >
        {text}
        {renderIcon()}
      </Tag>
    </>
  );
};

export default ButtonComponent;
