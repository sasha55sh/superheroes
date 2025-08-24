"use client";
import React, { FC, useState, useEffect, createContext } from "react";
import HeroesCollection from "./HeroesCollection";
import { Superhero } from "@/config/types";
import { getAllSuperheroes } from "@/service/SuperheroService";
import Button from "@/components/ButtonComponent";
import { useRouter } from "next/navigation";

export const CardsContext = createContext<Superhero[]>([]);

const CatalogSection: FC = () => {
  const router = useRouter();
  const [cards, setCards] = useState<Superhero[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      setIsLoading(true);
      const data = await getAllSuperheroes();
      if (data?.length) {
        setCards(data);
      } else {
        setCards([]);
      }
      setIsLoading(false);
    };
    fetchCards();
  }, []);

  return (
    <CardsContext.Provider value={cards}>
      <div className="container flex flex-row py-[30px] items-center justify-between">
        <h1 className="text-[28px] text-burgundy font-bold">Catalog</h1>
        <Button
          text="Create new superhero"
          bordered
          icon="plus"
          onClick={() => router.push("/catalog/create")}
        />
      </div>
      <HeroesCollection isLoading={isLoading} />
    </CardsContext.Provider>
  );
};

export default CatalogSection;
