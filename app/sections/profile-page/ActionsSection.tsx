"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ButtonComponent";
import Image from "next/image";
import Edit from "@/images/vectors/edit.svg";
import { Superhero } from "@/config/types";
import { deleteSuperheroById } from "@/service/SuperheroService";
import { useAlert } from "@/hooks/useAlert";
import DeleteModal from "@/components/profile-page/DeleteModalComponent";
import EditModal from "@/components/profile-page/EditModalComponent";
const ActionsSection = ({
  superhero,
  setSuperhero,
  isLoading,
  superheroId,
  setIsLoading,
}: {
  superhero: Superhero | null;
  isLoading: boolean;
  superheroId: string;
  setIsLoading: any;
  setSuperhero: any;
}) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const { setInfoMessage } = useAlert();
  const router = useRouter();

  const handleDelete = async () => {
    setIsLoading(true);
    const status = await deleteSuperheroById(superheroId, setInfoMessage);
    if (status === 200) {
      router.push("/catalog");
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col space-y-[15px] mx-[15px] mini:flex-row mini:justify-between mini:space-y-0">
      <Button
        icon="back"
        text="Back to catalog"
        className="max-w-[250px]"
        tag="a"
        href="/catalog"
        background="cream"
        bordered
      />
      <div className="flex space-x-[10px] justify-end">
        <EditModal
          setIsLoading={setIsLoading}
          superhero={superhero}
          isLoading={isLoading}
          openModal={openEditModal}
          setOpenModal={setOpenEditModal}
          setSuperhero={setSuperhero}
        />

        <button
          className="bg-skyblue p-[15px] rounded-xl hover:bg-skyblue/70"
          onClick={() => setOpenEditModal(true)}
        >
          <Image src={Edit} alt="Edit icon" aria-label="Edit button" />
        </button>

        <DeleteModal
          isLoading={isLoading}
          openModal={openDeleteModal}
          superheroNickname={superhero!.nickname}
          handleDelete={handleDelete}
          setOpenModal={setOpenDeleteModal}
        />
        <Button
          icon="delete"
          background="burgundy"
          text="Delete"
          onClick={() => setOpenDeleteModal(true)}
        />
      </div>
    </div>
  );
};

export default ActionsSection;
