import axios from "axios";
import { apiURL, ELEVEN_LABS_API_KEY } from "../../config";

export const addVoice = (sendData) => {
  return axios.post(`${apiURL}/add_voice`, sendData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const getVoices = (sendData) => {
  return axios.post(`${apiURL}/get_voices`, sendData, {
    headers: { "Content-Type": "application/json" },
  });
};

export const generateVoice = (sendData) => {
  return axios.post(`${apiURL}/generate_voice`, sendData, {
    headers: { "Content-Type": "application/json" },
  });
};

// Function to convert text to audio using ElevenLabs API
export const convertTextToAudio = async (sendData) => {
  // Set the API key for ElevenLabs API
  const apiKey = ELEVEN_LABS_API_KEY;

  // ID of voice to be used for speech
  const voiceId = sendData.voice_id;

  // API request options
  const apiRequestOptions = {
    method: "POST",
    url: `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
    headers: {
      accept: "audio/mpeg",
      "content-type": "application/json",
      "xi-api-key": apiKey,
    },
    data: {
      text: sendData.text,
      model_id: sendData.model_id,
      setting:{
        stability: sendData.stability,
        similarity_boost: sendData.similarity_boost,
        style: sendData.style
      }
    },
    responseType: "arraybuffer", // To receive binary data in response
  };

  // Sending the API request and waiting for response
  const apiResponse = await axios.request(apiRequestOptions);

  // Return the binary audio data received from API
  return apiResponse.data;
};
