import axios from "axios";
import { BASE_URL } from "@/config/config";
import { InfoMessage } from "@/config/types";

export const uploadImages = async (
  id: string,
  images: (File | string)[],
  setInfoMessage?: (message: InfoMessage) => void
) => {
  try {
    const formData = new FormData();

    images.forEach((img) => {
      if (typeof img === "string") {
        formData.append("existingImages", img);
      } else {
        formData.append("newImages", img);
      }
    });

    const response = await axios.put(`${BASE_URL}/catalog/${id}`, formData);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.status === 500 || error.code === "ERR_NETWORK") {
        setInfoMessage?.({
          type: "error",
          text: "Error uploading images!",
        });
      } else {
        return error.status;
      }
    }
  }
};
