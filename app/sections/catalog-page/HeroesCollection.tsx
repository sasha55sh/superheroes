"use client";
import React, { useState, useContext } from "react";
import { Pagination } from "flowbite-react";
import { CardProps } from "@/config/types";
import CardSceleton from "./CardSceleton";
import { CardsContext } from "./CatalogSection";
import CardComponent from "@/components/catalog-page/CardComponent";

const HeroesCollection = ({ isLoading }: { isLoading: boolean }) => {
  const allCards = useContext(CardsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 5;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = allCards.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(allCards.length / cardsPerPage);
  return (
    <section className="container my-[30px]">
      <div className="grid gap-[20px] grid-cols-1 justify-center place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isLoading
          ? Array.from({ length: 5 }, (_, index) => (
              <CardSceleton key={index} />
            ))
          : currentCards.map((card: CardProps) => (
              <CardComponent
                key={card._id}
                _id={card._id}
                nickname={card.nickname}
                images={[card.images[0]]}
              />
            ))}
      </div>

      {!isLoading && totalPages > 1 && (
        <div className="flex justify-center mt-6">
          <Pagination
            layout="navigation"
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
            showIcons
          />
        </div>
      )}
    </section>
  );
};

export default HeroesCollection;
