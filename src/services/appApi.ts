import axios from "axios"
import { API_URL } from "./authApi"
import { Ad, Bar, PointHistory } from "../utils/models";

export const getName = async (code: string) => {
  const response = await axios.post(`${API_URL}getName`, { code });
  return response.data;
}

export const getPoints = async (code: string) => {
  const response = await axios.post(`${API_URL}getPoints`, { code });
  return response.data;
}
export const getAds = async (): Promise<Ad[]> => {
  const response = await axios.get(`${API_URL}getAds`);
  return response.data;
}

export const getPromotions = async () => {
  const response = await axios.get(`${API_URL}getPromotions`);
  return response.data;
}
// export const getSpecialPromotions = async () => {
//   const response = await axios.get(`${API_URL}getPromotions`);
//   return response.data;
// }

export const getBars = async (): Promise<Bar[]> => {
  const response = await axios.get(`${API_URL}getBar`);
  return response.data;
}

export const getLevel = async (code: string): Promise<string> => {
  const response = await axios.post(`${API_URL}getLevel`, { code });
  return response.data;
}

export const getReceivedPoints = async (code: string): Promise<number> => {
  const response = await axios.post(`${API_URL}receivedPoints`, { code });
  return response.data;
}

export const getPointHistory = async (code: string): Promise<PointHistory[]> => {
  const response = await axios.post(`${API_URL}getPointHistory`, { code });
  return response.data;
}

export const getNotifications = async (code: string) => {
  const response = await axios.post(`${API_URL}getNotifications`, { code });
  return response.data;
};
export const getRewards = async (code: string) => {
  const response = await axios.post(`${API_URL}getRewards`, { code });
  return response.data;
};

export const getCustomer = async (phone: string) => {
  const response = await axios.post(`${API_URL}getCustomer`, { phone });
  return response.data;
};