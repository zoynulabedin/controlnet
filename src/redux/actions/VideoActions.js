import axios from "axios";
import { apiURL, ELEVEN_LABS_API_KEY } from "../../config";

export const mergeAudioFiles = (sendData) => {
  return axios.post(`${apiURL}/merge_audioFiles`, sendData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const uploadAvatar = (sendData) => {
  return axios.post(`${apiURL}/upload_avatar`, sendData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
