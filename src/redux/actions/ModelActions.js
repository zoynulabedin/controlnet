import axios from "axios";
import { apiURL } from "../../config";

export const getModels = (sendData) => {
  return axios.post(`${apiURL}/model/get_list`, sendData, {
    headers: { "Content-Type": "application/json" },
  });
};

export const detectPrompt = (sendData) => {
  return axios.post(`${apiURL}/detect_prompt`, sendData, {
    headers: { "Content-Type": "application/json" },
  });
}