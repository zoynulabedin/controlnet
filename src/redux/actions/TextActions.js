import axios from "axios";
import { apiURL } from "../../config";

export const generateContent = (sendData) => {
  return axios.post(`${apiURL}/generate_text`, sendData, {
    headers: { "Content-Type": "application/json" },
  });
};
