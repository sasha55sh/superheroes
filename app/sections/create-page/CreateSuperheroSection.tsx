"use client";
import React, { FC, useState, useEffect } from "react";
import Button from "@/components/ButtonComponent";
import { NewSuperhero } from "@/config/types";
import Input from "@/components/InputComponent";
import { useForm, hasLength } from "@mantine/form";
import ImagesUpload from "@/components/profile-page/ImagesUploadComponent";
import { FileWithPath } from "@mantine/dropzone";
import { uploadImages } from "@/service/ImagesService";
import {
  createSuperhero,
  updateSuperheroData,
} from "@/service/SuperheroService";

const CreateSuperheroSection: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [superheroImages, setSuperheroImages] = useState<FileWithPath[]>([]);
  const [error, setError] = useState<string>("");

  const form = useForm<NewSuperhero>({
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

  useEffect(() => {
    const localValues = localStorage.getItem("superheroData");
    if (localValues) {
      form.setValues(JSON.parse(localValues));
    }
  }, []);

  useEffect(() => {
    const values = form.values;
    if (Object.values(values).some((v) => v !== "")) {
      localStorage.setItem("superheroData", JSON.stringify(values));
    }
  }, [form.values]);

  const handleCreate = async () => {
   //невстигла коректно реалізувати
  };

  return (
    <section>
      <Button
        icon="back"
        text="Back to catalog"
        tag="a"
        href="/catalog"
        background="cream"
        bordered
        className="max-w-[250px] m-[30px_15px]"
      />
      <div className="container flex flex-col space-y-[20px] my-[30px]">
        <form
          onSubmit={form.onSubmit(handleCreate)}
          className="text-center flex flex-col space-y-[20px] "
        >
          <h1 className="text-crimson text-[32px] font-bold">
            Add new superhero
          </h1>
          <p className="text-skyblue text-[22px]">
            Do you want to add new superhero?
          </p>
          <ImagesUpload
            newFiles={superheroImages}
            setNewFiles={setSuperheroImages}
          />

          <div className="w-full flex flex-col space-y-[20px] sm:flex-row sm:space-y-0 sm:space-x-[20px]">
            <Input
              inputType="input"
              placeholder="Enter nickname"
              required
              {...form.getInputProps("nickname")}
              fullWidth
              background="mouseGray"
            />

            <Input
              inputType="input"
              placeholder="Enter real name"
              required
              {...form.getInputProps("real_name")}
              fullWidth
              background="mouseGray"
            />
          </div>
          <Input
            inputType="input"
            placeholder="Enter catch phrase"
            required
            {...form.getInputProps("catch_phrase")}
            fullWidth
            background="mouseGray"
          />

          <Input
            inputType="input"
            placeholder="Enter superpowers (separate by , )"
            required
            {...form.getInputProps("superpowers")}
            fullWidth
            background="mouseGray"
          />

          <Input
            inputType="textarea"
            placeholder="Enter description"
            required
            {...form.getInputProps("origin_description")}
            fullWidth
            className="h-[200px] resize-none no-scrollbar"
            background="mouseGray"
          />

          <div className="w-full flex flex-col items-center space-y-[20px] sm:flex-row sm:space-y-0 sm:space-x-[20px] sm:justify-center">
            <Button
              text="Clear all data"
              background="burgundy"
              onClick={() => {
                form.reset();
                localStorage.removeItem("superheroData");
              }}
              className="max-w-[300px]"
              fullWidth
            />

            <Button
              text="Create new superhero"
              type="submit"
              background="skyblue"
              fullWidth
              className="max-w-[300px]"
            />
          </div>
        </form>
      </div>
    </section>
  );
};
export default CreateSuperheroSection;
