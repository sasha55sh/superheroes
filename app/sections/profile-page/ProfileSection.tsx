"use client";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Superhero } from "@/config/types";
import { Loader } from "@mantine/core";
import { getSuperheroById } from "@/service/SuperheroService";
import Quotes from "@/images/vectors/quotes.svg";
import Lightning from "@/images/vectors/lightning.svg";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ActionsSection from "./ActionsSection";

interface profileProps {
  superheroId: string;
}

const ProfileSection: FC<profileProps> = ({ superheroId }) => {
  const [superhero, setSuperhero] = useState<Superhero | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSuperhero = async () => {
      setIsLoading(true);
      const superheroData: Superhero = await getSuperheroById(superheroId);
      if (superheroData) {
        setSuperhero(superheroData);
      } else {
        setSuperhero(null);
      }
      setIsLoading(false);
    };
    fetchSuperhero();
  }, [superheroId]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh] w-full ">
        <Loader className="animate-spin rounded-full border-[5px] border-burgundy border-b-transparent w-[40px] h-[40px]" />
      </div>
    );
  }

  return (
    <section className="mt-[30px]">
      <ActionsSection
        setSuperhero={setSuperhero}
        superheroId={superheroId}
        superhero={superhero}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <div className="container my-[50px] flex flex-col lg:flex-row lg:space-x-[30px]">
        <div className="w-full mb-[30px] lg:hidden">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            navigation
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
          >
            {superhero?.images?.map((image, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <Image
                  key={index}
                  src={image}
                  alt={`Superhero image ${index + 1}`}
                  height={900}
                  width={900}
                  className="w-[300px] h-[320px] object-fill rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden gap-[20px] lg:grid lg:grid-cols-2 lg:w-1/2">
          {superhero?.images?.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Superhero image ${index + 1}`}
              height={900}
              width={900}
              className="w-[250px] h-[220px] object-fill rounded-xl xl:w-[300px] xl:h-[320px]"
            />
          ))}
        </div>
        <div className="flex flex-col items-center space-y-[15px] lg:w-1/2">
          <h1 className="text-[40px] text-crimson font-bold text-center leading-none">
            {superhero?.nickname ?? "Superhero"} <br className="mini:hidden" />
            <span className="text-[26px] text-skyblue">
              ({superhero?.real_name ?? "Real name"})
            </span>
          </h1>

          <p className="bg-mouseGray/90 py-[10px] px-[20px] text-[22px] font-medium text-cream rounded-xl flex items-center text-center">
            <Image
              src={Quotes}
              alt="Quotes icon"
              className="mr-[10px] mb-[20px]"
            />{" "}
            {superhero?.catch_phrase ?? "It's my catch phrase"}
          </p>

          <div className="flex flex-col items-start w-full py-[2 0px]">
            <p className="text-crimson text-[20px]">Origin & Story</p>
            <p className="text-cream">{superhero?.origin_description}</p>

            <div className="flex flex-wrap justify-center gap-[15px] mt-[30px] lg:justify-start">
              {superhero?.superpowers?.split(",").map((power, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-[10px] bg-crimson/20 p-[10px_15px] rounded-xl whitespace-nowrap"
                >
                  <Image src={Lightning} alt="Lightning icon" />
                  <p className="text-cream">{power}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
