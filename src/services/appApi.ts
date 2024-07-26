import axios from "axios"
import { API_URL } from "./authApi"

export const getName = async (code: string) => {
  const response = await axios.post(`${API_URL}getName`, { code });
  return response.data;
}