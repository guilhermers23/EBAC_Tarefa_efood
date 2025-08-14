import axios from "axios";
const baseURL = "https://ebac-fake-api.vercel.app/api/efood/restaurantes";

export const getAllRestaurant = async () => {
  const response = axios.get(`${baseURL}`);
  return response;
};
