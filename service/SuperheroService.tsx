import axios from "axios";
import { BASE_URL } from "@/config/config";
import { InfoMessage, NewSuperhero } from "@/config/types";

export const getAllSuperheroes = async (
  setInfoMessage?: (message: InfoMessage) => void
): Promise<any> => {
  try {
    const responce = await axios.get(`${BASE_URL}/catalog`);
    return responce.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.status === 500 || error.code === "ERR_NETWORK") {
        if (setInfoMessage) {
          setInfoMessage({
            type: "error",
            text: "Error getting superheroes!",
          });
        }
      }
    }
  }
};

export const getSuperheroById = async (
  id: string,
  setInfoMessage?: (message: InfoMessage) => void
): Promise<any> => {
  try {
    const response = await axios.get(`${BASE_URL}/catalog/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.status === 500 || error.code === "ERR_NETWORK") {
        if (setInfoMessage) {
          setInfoMessage({
            type: "error",
            text: "Error getting superhero!",
          });
        }
      } else {
        return error.status;
      }
    }
  }
};

export const deleteSuperheroById = async (
  id: string,
  setInfoMessage?: (message: InfoMessage) => void
): Promise<any> => {
  try {
    const responce = await axios.delete(`${BASE_URL}/catalog/${id}`);
    return responce.status;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.status === 500 || error.code === "ERR_NETWORK") {
        if (setInfoMessage) {
          setInfoMessage({
            type: "error",
            text: "Error deleting superhero!",
          });
        }
      } else {
        return error.status;
      }
    }
  }
};

export const updateSuperheroData = async (
  id: string,
  data: {
    nickname?: string;
    real_name?: string;
    origin_description?: string;
    superpowers?: string;
    catch_phrase?: string;
    images?: string[];
  },
  setInfoMessage?: (message: InfoMessage) => void
) => {
  try {
    const responce = await axios.patch(`${BASE_URL}/catalog/${id}`, data);
    return responce.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.status === 500 || error.code === "ERR_NETWORK") {
        if (setInfoMessage) {
          setInfoMessage({
            type: "error",
            text: "Error deleting superhero!",
          });
        }
      } else {
        return error.status;
      }
    }
  }
};

export const createSuperhero = async (
  data: NewSuperhero,
  setInfoMessage?: (message: InfoMessage) => void
): Promise<any> => {
  try {
    const response = await axios.post(`${BASE_URL}/catalog/create`, data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.status === 500 || error.code === "ERR_NETWORK") {
        if (setInfoMessage) {
          setInfoMessage({
            type: "error",
            text: "Error creating superhero!",
          });
        }
      } else {
        return error.status;
      }
    }
  }
};
