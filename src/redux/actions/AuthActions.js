import axios from "axios";
import { apiURL } from "../../config";

export const signin = (user_info) => {
  return axios.post(`${apiURL}/auth/signin`, user_info, {
    headers: { "Content-Type": "application/json" },
  });
};

export const signup = (user_info) => {
  return axios.post(`${apiURL}/auth/signup`, user_info, {
    headers: { "Content-Type": "application/json" },
  });
};
