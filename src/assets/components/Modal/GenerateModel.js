import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Divider, Switch, Spin } from "antd";
import { Stepper } from "react-form-stepper";
import { Typography } from "@mui/material";

//custom components
import Input from "../Input/Input";
import Button from "../Button/Button";
import UploadButton from "../Button/UploadButton";
import GenerateButton from "../Button/GenerateButton";
import PromptButton from "../Button/PromptButton";
import MultiUploadButton from "../Button/MultiUploadButton";

import Select from "../Select/Select";
import TextArea from "../TextArea/TextArea";
import { isEmpty } from "../../../utility/isEmpty";

//scss
import "./GenerateModel.scss";
import {
  uploadAvatarFiles,
  uploadFiles,
  uploadProductFiles,
} from "../../../redux/actions/uploadActions";
import ModelViewer from "../ModelViewer/ModelView";
import { getModelSrc } from "../../../redux/actions/Submissions";
import ProductSubmission from "./ProductSubmission";

const GenerateModel = ({ open, setOpen }) => {
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

  const [uploading, setUploading] = useState(false);
  const [generate_ready, setGenerateReady] = useState(false);
  const [allData, setAllData] = useState({
    model: "avatar",
    project_name: "",
    model_keyword: "",
    model_src: "",
    step_index: 0,
    step_title: "Generate Your 3d Model",
    multi_images: [],
    multi_videos: [],
    train_llm: {
      headerTitle: "Upload Document",
      defaultImgUrl: "/step/train_LLM.png",
      imgUrl: "",
      title: "Train your LLM",
    },
    audio_pvc: {
      headerTitle: "Upload Audio",
      defaultImgUrl: "/step/upload_audio.png",
      imgUrl: "",
      title: "Upload your Audio to generate PVC...",
    },
    experience_type: "",
    product_link: "",
    animation_prompt: "",
  });

  const handleClose = () => setOpen(false);
  const next = () => {
    let step_title = "";
    switch (allData.step_index + 1) {
      case 1:
        step_title = "Upload Assets";
        break;
      case 2:
        if (allData.model === "avatar") {
          step_title = "XR Avatar Prompts";
        } else {
          step_title = "XR Product Prompts";
        }
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
        step_title = "Upload Assets";
        break;
      case 0:
        step_title = "Generate Your 3d Model";
      default:
        break;
    }
    setAllData({
      ...allData,
      step_title: step_title,
      step_index: allData.step_index - 1,
    });
  };

  const modelClick = (name) => {
    console.log(name);
    setAllData({ ...allData, model: name });
  };

  const settingChange = (name, value) => {
    setAllData({ ...allData, [name]: value });
  };

  const inputChanges = (e) => {
    let key = e.target.name;
    let value = e.target.value;

    console.log(key);
    console.log(value);

    setAllData({ ...allData, [key]: value });
  };

  const handleMultiUploadChange = async (e, id) => {
    console.log(e);
    console.log(e.target.files[0]);
    if (!isEmpty(e.target.files[0])) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      console.log(file);

      try {
        // Add Voice
        let new_Data = allData[[id]];
        new_Data.push({ file: file, thumbnail: url });
        setAllData({ ...allData, [id]: new_Data });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleUploadChange = async (e, id) => {
    const file = e.target.files[0];
    if (isEmpty(file)) return;

    if (id === "train_llm") {
      setAllData({
        ...allData,
        train_llm: {
          headerTitle: "Upload Document",
          title: file.name,
          imgUrl: "/step/attached_pdf.png",
          defaultImgUrl: "/step/train_LLM.png",
          file,
        },
      });
    } else {
      setAllData({
        ...allData,
        audio_pvc: {
          headerTitle: "Upload Audio",
          title: file.name,
          imgUrl: "/step/attached_audio.png",
          defaultImgUrl: "/step/upload_audio.png",
          file,
        },
      });
    }
  };

  const clearImg = async (id, remove_index) => {
    console.log(id);

    if (id === "multi_images" || id === "multi_videos") {
      let new_data = allData[[id]].filter(
        (item, index) => index !== remove_index
      );
      console.log(new_data);
      setAllData({ ...allData, [id]: new_data });
    }
    if (id === "train_llm") {
      setAllData({
        ...allData,
        train_llm: {
          headerTitle: "",
          defaultImgUrl: "/step/train_LLM.png",
          imgUrl: "",
          title: "Train your LLM",
        },
      });
    }
    if (id === "audio_pvc") {
      setAllData({
        ...allData,
        audio_pvc: {
          headerTitle: "",
          defaultImgUrl: "/step/upload_audio.png",
          imgUrl: "",
          title: "Upload your Audio to generate PVC...",
        },
      });
    }
  };

  const generateClick = async () => {
    try {
      setUploading(true);

      console.log(allData);
      // setUploading(false);
      // return;

      const formData = new FormData();
      formData.append("project_name", allData.project_name);
      formData.append("model", allData.model);

      if (!isEmpty(allData.multi_images)) {
        allData.multi_images.map((item) => {
          formData.append("file", item.file);
        });
      }

      if (!isEmpty(allData.multi_videos)) {
        allData.multi_videos.map((item) => {
          formData.append("file", item.file);
        });
      }

      switch (allData.model) {
        case "avatar":
          if (!isEmpty(allData.train_llm.file)) {
            formData.append("file", allData.train_llm.file);
          }

          if (!isEmpty(allData.audio_pvc.file)) {
            formData.append("file", allData.audio_pvc.file);
          }
          break;
        case "product":
          if (!isEmpty(allData.experience_type)) {
            console.log(allData.experience_type);
            formData.append("experience_type", allData.experience_type);
          }
          if (!isEmpty(allData.product_link)) {
            formData.append("product_link", allData.product_link);
          }
          if (!isEmpty(allData.animation_prompt)) {
            formData.append("animation_prompt", allData.animation_prompt);
          }
          break;
        default:
          break;
        // console.log(allData.train_llm.file);
        // console.log(allData.audio_pvc.file);
        // console.log(allData.multi_images);
        // console.log(allData.multi_videos);
      }

      await uploadFiles(formData);
      console.log(`File uploaded successfully `);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("AD");
      console.log(allData.step_index);
      console.log(allData.model);
      if (allData.step_index === 2 && allData.model === "product") {
        try {
          console.log(allData.model_keyword);
          let res = await getModelSrc({ keyword: allData.model_keyword });
          console.log(res.data.model_src);
          setAllData({ ...allData, model_src: res.data.model_src });
        } catch (e) {
          console.log(e);
        }
      }
    };

    fetchData();
  }, [allData.step_index]);

  useEffect(() => {
    if (
      !isEmpty(allData.train_llm.file) &&
      !isEmpty(allData.audio_pvc.file) &&
      !isEmpty(allData.multi_videos) &&
      !isEmpty(allData.multi_images)
    ) {
      setGenerateReady(true);
    }
  }, [
    allData.multi_videos,
    allData.multi_images,
    allData.train_llm.file,
    allData.audio_pvc.file,
  ]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ backdropFilter: "blur(15px)" }}
    >
      <Box sx={style}>
        <Spin spinning={uploading}>
          <div
            className=" absolute top-6 right-6 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <img src="/svg/circle-end.svg" />
          </div>
          <p
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className=" signup-modal-title text-white modal-title"
          >
            {allData.step_title}
          </p>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Divider style={{ backgroundColor: "#ffffff1a" }} />
            {generate_ready ? (
              <div className=" flex justify-center mt-5">
                <button
                  style={{ width: "30%", padding: "10px" }}
                  className=" linear-voice-btn"
                  onClick={() => generateClick()}
                >
                  <p className=" linear-voice-btn-title">Generate</p>
                </button>
              </div>
            ) : allData.model === "avatar" ? (
              <Stepper
                steps={[{ label: "" }, { label: "" }, { label: "" }]}
                activeStep={allData.step_index}
                styleConfig={{
                  inactiveBgColor: "#404040",
                  completedBgColor: "#404040",
                  size: "50px",
                }}
              />
            ) : (
              <></>
            )}

            <div>
              {allData.step_index === 0 ? (
                <>
                  <div className=" pl-10">
                    <div className=" grid grid-cols-1 lg:grid-cols-2">
                      <div className=" flex justify-start">
                        <div className=" w-[400px]">
                          <Input
                            title={"Project Name"}
                            placeholder={"Enter Project Name"}
                            change={inputChanges}
                            name={"project_name"}
                            value={allData.project_name}
                            defaultValue={""}
                            type={"text"}
                            width={"40%"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" grid grid-cols-1 lg:grid-cols-2 p-10 gap-6 relative">
                    <GenerateButton
                      headerTitle={"Generate Your Digital Twin"}
                      defaultImgUrl={"/step/avatar.png"}
                      name={"avatar"}
                      clickedName={allData.model}
                      handleClick={(item) => modelClick(item)}
                    />
                    <GenerateButton
                      headerTitle={"Generate 3D Product"}
                      defaultImgUrl={"/step/product.png"}
                      name={"product"}
                      clickedName={allData.model}
                      handleClick={(item) => modelClick(item)}
                    />
                    {/* Previous Icon */}
                    {allData.step_index !== 0 && (
                      <div
                        className=" absolute top-[50%] left-1 cursor-pointer"
                        onClick={() => previous()}
                      >
                        <img src="/svg/step_previous.svg" width={"30"} />
                      </div>
                    )}
                    {/* Next Icon */}
                    {allData.step_index !== 2 && (
                      <div
                        className=" absolute top-[50%] right-1 cursor-pointer"
                        onClick={() => next()}
                      >
                        <img src="/svg/step_next.svg" width={"30"} />
                      </div>
                    )}
                  </div>
                </>
              ) : allData.step_index === 1 ? (
                allData.model === "avatar" ? (
                  <div className=" grid grid-cols-1 lg:grid-cols-2 p-10 gap-5 relative">
                    <div>
                      <MultiUploadButton
                        headerTitle={""}
                        title={"Upload images"}
                        fileType={"image/*"}
                        id={"multi_images"}
                        handleChange={handleMultiUploadChange}
                        clearImg={clearImg}
                        defaultImgUrl={"/modal/upload_image.png"}
                        fileList={allData.multi_images}
                      />
                    </div>
                    <div>
                      <MultiUploadButton
                        headerTitle={""}
                        title={"Upload video"}
                        fileType={"video/*"}
                        id={"multi_videos"}
                        handleChange={handleMultiUploadChange}
                        clearImg={clearImg}
                        defaultImgUrl={"/modal/upload_video.png"}
                        fileList={allData.multi_videos}
                      />
                    </div>

                    {/* Previous Icon */}
                    <div
                      className=" absolute top-[50%] left-1 cursor-pointer"
                      onClick={() => previous()}
                    >
                      <img src="/svg/step_previous.svg" width={"30"} />
                    </div>
                    {/* Next Icon */}
                    <div
                      className=" absolute top-[50%] right-1 cursor-pointer"
                      onClick={() => next()}
                    >
                      <img src="/svg/step_next.svg" width={"30"} />
                    </div>
                  </div>
                ) : (
                  <ProductSubmission />
                )
              ) : allData.step_index === 2 ? (
                allData.model === "avatar" ? (
                  <div className=" grid grid-cols-1 lg:grid-cols-2 p-12 gap-5 relative">
                    <PromptButton
                      title={allData.train_llm.title}
                      defaultImgUrl={allData.train_llm.defaultImgUrl}
                      imgUrl={allData.train_llm.imgUrl}
                      id={"train_llm"}
                      fileType={"application/pdf"}
                      handleChange={(e, id) => handleUploadChange(e, id)}
                      clearImg={clearImg}
                    />
                    <PromptButton
                      title={allData.audio_pvc.title}
                      defaultImgUrl={allData.audio_pvc.defaultImgUrl}
                      imgUrl={allData.audio_pvc.imgUrl}
                      id={"audio_pvc"}
                      fileType={"audio/*"}
                      handleChange={(e, id) => handleUploadChange(e, id)}
                      clearImg={clearImg}
                    />

                    {/* Previous Icon */}
                    <div
                      className=" absolute top-[50%] left-1 cursor-pointer"
                      onClick={() => previous()}
                    >
                      <img src="/svg/step_previous.svg" width={"30"} />
                    </div>
                  </div>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
            </div>
            {allData.step_index === 2 && allData.model === "product" ? (
              <div className=" grid grid-cols-1 lg:grid-cols-2 p-12 gap-2 relative">
                <div>
                  <Select
                    title={"Experience Type:"}
                    placeholder={"Select"}
                    name={"experience_type"}
                    change={(name, value) => settingChange(name, value)}
                    options={[{ value: "AR", text: "Experience Type (AR)" }]}
                    value={allData.experience_type}
                  />
                  <Input
                    title={"Product Link:"}
                    placeholder={"www.expample.com/product123"}
                    name={"product_link"}
                    change={inputChanges}
                    defaultValue={""}
                    value={allData.product_link}
                    type={"text"}
                  />
                  <TextArea
                    title={"Animation Prompt:"}
                    placeholder={"40 character limit"}
                    name={"animation_prompt"}
                    change={(name, value) => settingChange(name, value)}
                    value={allData.animation_prompt}
                    type={"text"}
                  />
                </div>
                <div>
                  {/* <UploadButton
                    headerTitle={""}
                    title={""}
                    id={"hero"}
                    defaultImgUrl={"/modal/upload_image.png"}
                    height={"95%"}
                  /> */}
                  <div className=" flex justify-center items-center">
                    <ModelViewer model_src={allData.model_src} />
                  </div>
                  <div className=" flex justify-center items-center">
                    <button
                      style={{ width: "30%", padding: "10px" }}
                      className=" linear-voice-btn"
                      onClick={() => generateClick()}
                    >
                      <p className="product-submit-btn-title">Generate</p>
                    </button>
                  </div>
                </div>
                {/* Previous Icon */}
                <div
                  className=" absolute top-[50%] left-1 cursor-pointer"
                  onClick={() => previous()}
                >
                  <img src="/svg/step_previous.svg" width={"30"} />
                </div>
              </div>
            ) : (
              <></>
            )}
          </Typography>
        </Spin>
      </Box>
    </Modal>
  );
};

export default GenerateModel;
