import axios from "axios";

const API_URL = 'https://seesternconsulting.com/royal/ajax.php?token=b5178d23b8ad8ffb9a711fef4da57b9b&action=';

export const login = async (identifier: string, password: string) => {
  const response = await axios.post(`${API_URL}login`, {
    code: identifier,
    password: password
  });

  return response.data;
}

export const signup = async (Fname: string, Lname: string, email: string, phone: string, password: string, type: string) => {
  const response = await axios.post(`${API_URL}saveCustomer`, {
    Fname,
    Lname,
    email,
    phone,
    password,
    type
  });

  return response.data;
}