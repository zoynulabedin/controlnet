import axios from "axios";
import { apiURL } from "../../config";

export const getSubmissions = () => {
  return axios.post(`${apiURL}/submission/getList`,  {
    headers: { "Content-Type": "application/json" },
  });
};

export const getModelSrc = (sendData) => {
  return axios.post(`${apiURL}/submission/get_model_src`, sendData, {
    headers: { "Content-Type": "application/json" },
  });
};