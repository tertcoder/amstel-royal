import axios from "axios"
import { API_URL } from "./authApi"

export const getName = async (code: string) => {
  const response = await axios.post(`${API_URL}getName`, { code });
  return response.data;
}

export const getPoints = async (code: string) => {
  const response = await axios.post(`${API_URL}getPoints`, { code });
  return response.data;
}
export const getAds = async () => {
  const response = await axios.get(`${API_URL}getAds`);
  return response.data;
}

export const getPromotions = async () => {
  const response = await axios.get(`${API_URL}getPromotions`);
  return response.data;
}