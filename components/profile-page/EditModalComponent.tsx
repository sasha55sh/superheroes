import React, { useEffect, useState } from "react";
import { Superhero } from "@/config/types";
import { useAlert } from "@/hooks/useAlert";
import { FileWithPath } from "@mantine/dropzone";
import { useForm, hasLength } from "@mantine/form";
import { Modal, ModalBody, ModalHeader } from "flowbite-react";
import ImagesUpload from "./ImagesUploadComponent";
import Input from "@/components/InputComponent";
import Button from "../ButtonComponent";
import { uploadImages } from "@/service/ImagesService";
import { updateSuperheroData } from "@/service/SuperheroService";

interface DeleteModalProps {
  superhero: Superhero | null;
  setSuperhero: any;
  openModal: boolean;
  setOpenModal: any;
  setIsLoading: any;
}

const EditModal = ({
  openModal,
  setOpenModal,
  superhero,
  setSuperhero,
  setIsLoading,
}: DeleteModalProps) => {
  const [heroImages, setHeroImages] = useState<string[]>([]);
  const [newFiles, setNewFiles] = useState<FileWithPath[]>([]);
  const [error, setError] = useState<string>("");
  const { setInfoMessage } = useAlert();

  useEffect(() => {
    if (superhero) {
      form.setValues({
        nickname: superhero.nickname || "",
        real_name: superhero.real_name || "",
        origin_description: superhero.origin_description || "",
        superpowers: superhero.superpowers || "",
        catch_phrase: superhero.catch_phrase || "",
      });
      setHeroImages(superhero.images || []);
    }
  }, [superhero]);

  const form = useForm({
    initialValues: {
      nickname: "",
      real_name: "",
      origin_description: "",
      superpowers: "",
      catch_phrase: "",
    },
    validate: {
      nickname: hasLength({ min: 2, max: 30 }, "Incorect length!"),
      real_name: hasLength({ min: 2, max: 30 }, "Incorect length!"),
      origin_description: hasLength({ min: 2, max: 1000 }, "Incorect length!"),
      superpowers: hasLength({ min: 2, max: 300 }, "Incorect length!"),
      catch_phrase: hasLength({ min: 2, max: 100 }, "Incorect length!"),
    },
  });

  const handleUpdate = async () => {
    if (heroImages.length + newFiles.length !== 4) {
      setError("Superhero must have exactly 4 images!");
      return;
    }

    setIsLoading(true);

    const values = form.values;
    const updateData: Partial<Superhero> = {};

    if (values.nickname.trim() !== superhero?.nickname) {
      updateData.nickname = values.nickname.trim();
    }
    if (values.real_name.trim() !== superhero?.real_name) {
      updateData.real_name = values.real_name.trim();
    }
    if (values.origin_description.trim() !== superhero?.origin_description) {
      updateData.origin_description = values.origin_description.trim();
    }
    if (values.superpowers.trim() !== superhero?.superpowers) {
      updateData.superpowers = values.superpowers.trim();
    }
    if (values.catch_phrase.trim() !== superhero?.catch_phrase) {
      updateData.catch_phrase = values.catch_phrase.trim();
    }

    const updatedHero = await updateSuperheroData(
      superhero!._id!,
      updateData,
      setInfoMessage
    );

    if (updatedHero) {
      const updatedWithImages = await uploadImages(
        superhero!._id!,
        [...heroImages, ...newFiles],
        setInfoMessage
      );

      setSuperhero(updatedWithImages);
      setOpenModal(false);
    }

    setIsLoading(false);
  };

  return (
    <Modal
      show={openModal}
      size="5xl"
      popup
      position="center"
      onClose={() => setOpenModal(false)}
    >
      <ModalHeader className="bg-gray-700" />
      <ModalBody className="bg-gray-700 resize-none no-scrollbar">
        <form
          onSubmit={form.onSubmit(handleUpdate)}
          className="text-center py-[30px] flex flex-col space-y-[20px] "
        >
          <h1 className="text-cream text-[32px] font-bold">Superhero data</h1>
          <p className="text-skyblue text-[22px]">
            Do you want to change something?
          </p>

          <ImagesUpload
            heroImages={heroImages}
            setHeroImages={setHeroImages}
            newFiles={newFiles}
            setNewFiles={setNewFiles}
          />

          {error && <p className="text-crimson font-medium">{error}</p>}

          <div className="w-full flex flex-col space-y-[20px] sm:flex-row sm:space-y-0 sm:space-x-[20px]">
            <Input
              inputType="input"
              placeholder="Enter new nickname"
              required
              {...form.getInputProps("nickname")}
              fullWidth
              background="mouseGray"
            />

            <Input
              inputType="input"
              placeholder="Enter new real name"
              required
              {...form.getInputProps("real_name")}
              fullWidth
              background="mouseGray"
            />
          </div>

          <Input
            inputType="input"
            placeholder="Enter new catch phrase"
            required
            {...form.getInputProps("catch_phrase")}
            fullWidth
            background="mouseGray"
          />

          <Input
            inputType="input"
            placeholder="Enter new superpowers (separate by , )"
            required
            {...form.getInputProps("superpowers")}
            fullWidth
            background="mouseGray"
          />

          <Input
            inputType="textarea"
            placeholder="Enter new description"
            required
            {...form.getInputProps("origin_description")}
            fullWidth
            className="h-[200px] resize-none no-scrollbar"
            background="mouseGray"
          />

          <div className="w-full flex flex-col justify-center space-y-[20px] sm:flex-row sm:space-y-0 sm:space-x-[20px]">
            <Button
              text="Clear all data"
              background="burgundy"
              onClick={() => form.reset()}
              className="max-w-[300px]"
              fullWidth
            />

            <Button
              text="Save changes"
              type="submit"
              background="skyblue"
              fullWidth
              className="max-w-[300px]"
            />
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default EditModal;
