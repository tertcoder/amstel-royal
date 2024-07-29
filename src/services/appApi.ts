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
export const getNotificationsNumber = async (code: string) => {
  const response = await axios.post(`${API_URL}getNotificationsNumber`, { code });
  return response.data;
};
export const getRewards = async (code: string, type: number) => {
  const response = await axios.post(`${API_URL}getRewards`, { code, type });
  return response.data;
};
export const claimReward = async (idReward: number, idBar: number, code: string) => {
  const response = await axios.post(`${API_URL}claimReward`, { idReward, idBar, code });
  return response.data;
};

export const getCustomer = async (phone: string) => {
  const response = await axios.post(`${API_URL}getCustomer`, { phone });
  return response.data;
};
export const verifyPassword = async (password: string, code: string) => {
  const response = await axios.post(`${API_URL}verifyPassword`, { password, code });
  return response.data;
}
export const sendPointAgent = async (invoice: File | null, codeSender: string, codeReceiver: string, points: number, type: number, qty: number | null) => {

  const api1 = `${API_URL}sendPointsAgent`
  const api2 = `${API_URL}sendPoints`;
  const response = await axios.post(type === 1 ? api1 : api2, {
    invoice,
    codeSender,
    codeReceiver,
    points,
    type,
    qty
  }

  );

  return response.data;
}
export const sendPoint = async (codeSender: string, codeReceiver: string, points: number, type: number) => {

  const response = await axios.post(`${API_URL}sendPoints`, {
    codeSender,
    codeReceiver,
    points,
    type,
  }

  );
  return response.data;
}