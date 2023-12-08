import { Typography, Grid, useScrollTrigger, Container } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { Divider, Switch, Spin } from "antd";
import { Stepper } from "react-form-stepper";
//components
import Input from "../Input/Input";
import Button from "../Button/Button";
import UploadButton from "../Button/UploadButton";
import { useEffect, useState } from "react";

//scss
import "../Input/Input.scss";
import "./GenerateModel.scss";
import { isEmpty } from "../../../utility/isEmpty";
import SelectModel from "../CreateVoice/SelectModel";
import TextArea from "../TextArea/TextArea";
import Select from "../Select/Select";
import {
  addVoice,
  convertTextToAudio,
  generateVoice,
  getVoices,
} from "../../../redux/actions/VoiceActions";
import Accordion from "../Accordion/Accordion";
import { generateContent } from "../../../redux/actions/TextActions";
const CreateVoiceModal = ({ open, setOpen }) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    // bgcolor: "background.paper",
    backgroundColor: "#131313",
    border: "2px solid #000",
    borderRadius: "10px",
    p: 5,
  };

  // State variable to store URL of the audio source
  const [sourceUrl, setSourceUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [allData, setAllData] = useState({
    model: "bloom",
    step_index: 0,
    step_title: "Select LLM",
    project_name: "",
    project_description: "",
    audio_data: {
      headerTitle: "Upload Audio",
      defaultImgUrl: "/step/upload_audio.png",
      title: "Upload your Audio to generate PVC...",
    },
    preset_voices: [
      { value: "option23425", text: "Select an Option235" },
      { value: "option5235", text: "Select an Option5235" },
      { value: "option23432", text: "Select an Option23432" },
    ],
    elevenLabs_models: [
      { value: "eleven_monolingual_v1", text: "Eleven Monolingual V1" },
      { value: "eleven_multilingual_v2", text: "Eleven Multilingual V2" },
    ],
    needed_data: {
      voice_id: "none",
      model_id: "none",
      stability: 50,
      similarity_boost: 75,
      style: 0,
      text: "",
    },
  });

  const handleClose = () => setOpen(false);
  const next = () => {
    let step_title = "";
    switch (allData.step_index + 1) {
      case 1:
        step_title = "Upload Audio or Select Preset";
        break;
      case 2:
        step_title = "Generate AI Voice";
      default:
        break;
    }
    setAllData({
      ...allData,
      step_title: step_title,
      step_index: allData.step_index + 1,
    });
  };
  const previous = () => {
    let step_title = "";
    switch (allData.step_index - 1) {
      case 1:
        step_title = "Upload Audio or Select Preset";
        break;
      case 0:
        step_title = "Select LLM";
      default:
        break;
    }
    setAllData({
      ...allData,
      step_title: step_title,
      step_index: allData.step_index - 1,
    });
  };

  const handleUploadChange = async (e, id) => {
    if (isEmpty(e.target.files[0])) return;

    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    console.log(file);

    try {
      if (
        isEmpty(allData.project_name) ||
        isEmpty(allData.project_description)
      ) {
        return;
      }

      // Loading Start
      setLoading(true);

      // Add Voice
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", allData.project_name);
      formData.append("description", allData.project_description);
      const res = await addVoice(formData);

      // fetchVoices();

      // Set State to Attached
      setLoading(false);
      const audio_data = {
        headerTitle: "Attached Audio Files",
        title: file.name,
        defaultImgUrl: "/step/attached_audio.png",
      };
      let preset_voices = await fetchVoices();
      setAllData({
        ...allData,
        audio_data: audio_data,
        preset_voices: preset_voices,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const modelClick = (name) => {
    console.log(name);
    setAllData({ ...allData, model: name });
  };

  const inputChanges = (e) => {
    let key = e.target.name;
    let value = e.target.value;

    console.log(key);
    console.log(value);
    setAllData({ ...allData, [key]: value });
  };

  const generateText = async () => {
    console.log(allData.prompt);
    console.log(allData.model);

    if (!isEmpty(allData.prompt) && !isEmpty(allData.model)) {
      setLoading(true);
      const res = await generateContent({
        prompt: allData.prompt,
        model_name: allData.model,
      });
      let new_needed_data = allData.needed_data;
      new_needed_data.text = res.data.message;
      setAllData({ ...allData, needed_data: new_needed_data });
      setLoading(false);
    }
  };

  const generateClick = async () => {
    //Frontend Part

    try {
      if (
        allData.needed_data.voice_id !== "none" &&
        allData.needed_data.model_id !== "none"
      ) {
        setLoading(true);
        setSourceUrl(null);
        const audioData = await convertTextToAudio(allData.needed_data);
        // Create a new Blob object from the fetched audio data with matching MIME type
        const audioBlob = new Blob([audioData], { type: "audio/mpeg" });

        // Create a URL for the audio blob
        const blobUrl = URL.createObjectURL(audioBlob);

        // Update the sourceUrl state variable with the generated URL for the audio blob
        setSourceUrl(blobUrl);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchVoices = async () => {
    try {
      const res = await getVoices();
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const settingChange = (name, value) => {
    let new_data = allData.needed_data;
    new_data[[name]] = value;
    console.log(name);
    console.log(value);
    // console.log(new_data);
    // setAllData(new_data);
    setAllData({ ...allData, needed_data: new_data });
  };

  useEffect(() => {
    const fetchPresetVoices = async () => {
      let preset_voices = await fetchVoices();
      console.log(preset_voices);
      setAllData({ ...allData, preset_voices: preset_voices });
    };

    fetchPresetVoices();
  }, []);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ backdropFilter: "blur(15px)" }}
    >
      <Box sx={style}>
        <Spin spinning={loading}>
          <div
            className=" absolute top-0 right-0 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <g opacity="0.15" filter="url(#filter0_b_366_697)">
                <circle cx="16" cy="16" r="16" fill="white" />
              </g>
              <path
                d="M20.4802 12.1602L12.1602 20.4802"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M20.4805 20.4802L12.1605 12.1602"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
              <defs>
                <filter
                  id="filter0_b_366_697"
                  x="-4"
                  y="-4"
                  width="40"
                  height="40"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_366_697"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_366_697"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className=" signup-modal-title text-white modal-title"
          >
            {allData.step_title}
          </div>
          <div id="modal-modal-description" sx={{ mt: 2 }}>
            <Divider style={{ backgroundColor: "#ffffff1a" }} />
            <Stepper
              steps={[{ label: "" }, { label: "" }, { label: "" }]}
              activeStep={allData.step_index}
              styleConfig={{
                inactiveBgColor: "#404040",
                completedBgColor: "#404040",
                size: "50px",
              }}
            />
            <div className=" relative">
              {allData.step_index === 0 ? (
                <>
                  <div className=" grid grid-cols-1 lg:grid-cols-2 pl-10 pt-10 pr-10 gap-2">
                    <SelectModel
                      headerTitle={"ChatGPT4"}
                      defaultImgUrl={"/createVoice/bloom.png"}
                      name={"bloom"}
                      clickedName={allData.model}
                      handleClick={(item) => modelClick(item)}
                    />
                    <SelectModel
                      headerTitle={"Bloom Large Language Model"}
                      defaultImgUrl={"/createVoice/openai.png"}
                      name={"gpt"}
                      clickedName={allData.model}
                      handleClick={(item) => modelClick(item)}
                    />
                    <div
                      className=" absolute top-[40%] right-1 cursor-pointer"
                      onClick={() => next()}
                    >
                      <img src="/svg/step_next.svg" width={"30"} />
                    </div>
                  </div>
                  <div>
                    <Input
                      title={"Project Name"}
                      placeholder={"Enter Project Name"}
                      change={inputChanges}
                      name={"project_name"}
                      value={allData.project_name}
                      defaultValue={""}
                      type={"text"}
                    />
                    <Input
                      title={"Project Description"}
                      placeholder={"Enter Project Description"}
                      change={inputChanges}
                      name={"project_description"}
                      value={allData.project_description}
                      defaultValue={allData.project_description}
                      type={"text"}
                    />
                  </div>
                </>
              ) : allData.step_index === 1 ? (
                <div className="pl-20 pr-20 relative">
                  {/* Previous Icon */}
                  <div
                    className=" absolute top-[50%] left-1 cursor-pointer"
                    onClick={() => previous()}
                  >
                    <img src="/svg/step_previous.svg" width={"30"} />
                  </div>
                  <UploadButton
                    headerTitle={allData.audio_data.headerTitle}
                    title={allData.audio_data.title}
                    id={"upload_audio"}
                    handleChange={handleUploadChange}
                    defaultImgUrl={allData.audio_data.defaultImgUrl}
                  />
                  {/* Next Icon */}
                  <div
                    className=" absolute top-[50%] right-1 cursor-pointer"
                    onClick={() => next()}
                  >
                    <img src="/svg/step_next.svg" width={"30"} />
                  </div>
                </div>
              ) : allData.step_index === 2 ? (
                <div className=" p-10">
                  {/* Previous Icon */}
                  <div
                    className=" absolute top-[0%] left-1 cursor-pointer"
                    onClick={() => previous()}
                  >
                    <img src="/svg/step_previous.svg" width={"30"} />
                  </div>

                  <Grid container spacing={2}>
                    <Grid item xs={5}>
                      <div className=" flex flex-col gap-3">
                        <Select
                          title={"Preset Voice Selected"}
                          value={allData.needed_data.voice_id}
                          name={"voice_id"}
                          change={(name, value) => settingChange(name, value)}
                          options={allData.preset_voices}
                        />
                        <Select
                          title={"ElevenLabs Langauge Model"}
                          value={allData.needed_data.model_id}
                          name={"model_id"}
                          change={(name, value) => settingChange(name, value)}
                          options={allData.elevenLabs_models}
                        />
                        <Accordion
                          title={"Voice Settings"}
                          value={allData.needed_data}
                          change={(name, value) => settingChange(name, value)}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={7}>
                      <div>
                        <p className="selected-model-text">
                          AI Text Model Selected
                        </p>
                        <Grid container spacing={1}>
                          <Grid item xs={3}>
                            <img
                              src={
                                allData.model === "bloom"
                                  ? "/createVoice/bloom.png"
                                  : "/createVoice/openai.png"
                              }
                              className=" w-[150px] rounded-lg"
                            />
                          </Grid>
                          <Grid item xs={8} className=" flex items-center">
                            <div className=" flex items-center justify-between w-full relative">
                              <input
                                className="input-content text-white"
                                placeholder={"Type AI Prompt"}
                                name={"prompt"}
                                onChange={inputChanges}
                                defaultValue={""}
                              />
                              <button
                                className=" absolute right-[10px] z-10 text-white"
                                onClick={() => generateText()}
                              >
                                <img src="/svg/arrow.svg" />
                              </button>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                      <TextArea
                        title={"Content Generated From AI"}
                        value={allData.needed_data.text}
                        // defaultValue={allData.needed_data.text}
                        placeholder={
                          "Barger is a type of electric toothbrush that has become increasingly popular over the years. Electric toothbrushes are designed to provide a more thorough clean than manual toothbrushes, and they have been shown to remove more plaque and reduce the risk of gum disease. Barger toothbrushes, in particular, are known for their powerful cleaning ability and innovative features."
                        }
                        name={"text"}
                        change={(name, value) => settingChange(name, value)}
                        type={"text"}
                      />
                      <div className=" flex justify-center">
                        {sourceUrl && (
                          <audio autoPlay controls>
                            <source src={sourceUrl} type="audio/mpeg" />
                          </audio>
                        )}
                      </div>
                      <div className=" flex justify-center mt-5">
                        <button
                          style={{ width: "30%", padding: "10px" }}
                          className=" linear-voice-btn"
                          onClick={() => generateClick()}
                        >
                          <p className=" linear-voice-btn-title">Generate</p>
                        </button>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </Spin>
      </Box>
    </Modal>
  );
};

export default CreateVoiceModal;
