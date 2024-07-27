import axios from "axios";

export const API_URL = 'https://seesternconsulting.com/royal/ajax.php?token=b5178d23b8ad8ffb9a711fef4da57b9b&action=';

export const loginApi = async (identifier: string, password: string) => {
  const response = await axios.post(`${API_URL}login`, {
    code: identifier,
    password: password
  });

  return response.data;
}

export const signupApi = async (Fname: string, Lname: string, phone: string, password: string, type: number) => {
  const response = await axios.post(`${API_URL}saveCustomer`, {
    Fname,
    Lname,
    phone,
    password,
    type
  });

  return response.data;
}

export const logoutApi = async (id: number) => {
  const response = await axios.post(`${API_URL}logout`, { id });
  return response.data;
}

export const forgotPassword = async (phone: string, password: string) => {
  const response = await axios.post(`${API_URL}forgetPassword`, { phone, password });
  return response.data;
}