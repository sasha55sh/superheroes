"use client";
import React, { FC } from "react";
import Image from "next/image";
import { Card } from "flowbite-react";
import { CardProps } from "@/config/types";
import Button from "../ButtonComponent";

const CardComponent: FC<CardProps & { className?: string }> = ({
  className,
  _id,
  images,
  nickname,
}) => {
  return (
    <Card
      className={`${className} max-w-sm relative dark:bg-white border border-skyblue/10 shadow-none`}
      renderImage={() => (
        <Image
          src={images[0]}
          width={385}
          height={385}
          alt="Hero image"
          priority
          className="h-[380px] rounded-t-lg object-cover"
        />
      )}
    >
      <a href={`/catalog/${_id}`} className="flex flex-col space-y-[20px]">
        <h5 className="text-[22px] text-navy font-bold leading-none">
          {nickname}
        </h5>
        <Button text="Show more" background="burgundy" icon="further" />
      </a>
    </Card>
  );
};

export default CardComponent;
