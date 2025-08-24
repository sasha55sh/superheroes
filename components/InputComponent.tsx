import React, { ChangeEvent, FC } from "react";
import { text } from "stream/consumers";

interface InputProps {
  className?: string;
  placeholder?: string;
  inputType: "input" | "textarea";
  type?: "text";
  background?: "transparent" | "white" | "mouseGray";
  bordered?: boolean;
  fullWidth?: boolean;
  error?: string | null;
  required?: boolean;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const InputComponent: FC<InputProps> = ({
  className,
  placeholder,
  inputType,
  type = "text",
  background = "transparent",

  bordered = false,
  fullWidth,
  error,
  required,
  value,
  onChange,
}) => {
  const widthClass = fullWidth ? "w-[100%]" : "";
  const finalBackground = bordered ? "transparent" : background;
  const backgroundClass =
    finalBackground === "white"
      ? "bg-white"
      : finalBackground === "mouseGray"
      ? "bg-mouseGray/30"
      : "bg-transparent";
  const borderClass = bordered
    ? "border-[2px] border-navy border-solid"
    : finalBackground === "white"
    ? "border-[2px] border-transparent border-solid"
    : finalBackground === "mouseGray"
    ? "border-[2px] border-transparent border-solid"
    : "";
  const textClass =
    finalBackground === "white"
      ? "text-navy/90"
      : finalBackground === "mouseGray"
      ? "text-cream"
      : bordered
      ? "text-navy"
      : "";

  const inputContent = () => {
    if (inputType === "input") {
      return (
        <div className={`${className} flex flex-col w-full`}>
          <input
            className={`${className} ${textClass} ${backgroundClass} ${borderClass} ${widthClass} py-[16px] px-[30px] rounded-full placeholder-skyblue focus:ring-0 focus:border-transparent`}
            type={type}
            placeholder={placeholder}
            value={value}
            required={required}
            onChange={onChange}
          />

          {error && (
            <p className="text-[14px] p-[10px] text-crimson">{error}</p>
          )}
        </div>
      );
    } else if (inputType === "textarea") {
      return (
        <>
          <textarea
            placeholder={placeholder}
            required={required}
            value={value}
            onChange={onChange}
            className={`${className} ${backgroundClass} ${borderClass} ${widthClass} ${textClass} py-[16px] px-[30px] resize-none h-[150px] rounded-[40px] placeholder-skyblue focus:ring-0 focus:border-transparent resize-none no-scrollbar`}
          />
          {error && (
            <p className="text-[14px] p-[10px] text-crimson">{error}</p>
          )}
        </>
      );
    } else {
      return null;
    }
  };
  return <>{inputContent()}</>;
};

export default InputComponent;
