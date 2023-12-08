import axios from "axios";
import { apiURL, ELEVEN_LABS_API_KEY } from "../../config";

export const uploadFiles = (sendData) => {
  return axios.post(`${apiURL}/upload`, sendData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const uploadProduct = (sendData) => {
  return axios.post(`${apiURL}/upload/product`, sendData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const uploadModel = (sendData) => {
  return axios.post(`${apiURL}/upload/model`, sendData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
