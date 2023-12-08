import { Fragment, useState } from "react";
import { Paper, Container, Button } from "@mui/material";

import { isEmpty } from "../../../utility/isEmpty";
import { TRAIN_LLM, UPLOAD_AUDIO } from "../Modal/Info_Description";
import InfomationModal from "../Modal/InfomationModal";

const ModelUploadBtn = ({
  id,
  handleChange,
  clearImg,
  headerTitle,
  title,
  defaultImgUrl,
  imgUrl,
  name,
  fileType,
}) => {
  const [infomationOpen, setInfomationOpen] = useState(false);
  const [description, setDescription] = useState([]);

  const get_infomation = (type) => {
    let str = [];
    switch (type) {
      case "train_llm":
        str = TRAIN_LLM;
        break;
      case "upload_audio":
        str = UPLOAD_AUDIO;
        break;
      default:
        break;
    }
    console.log(str);
    setDescription(str);
    setInfomationOpen(true);
  };

  return (
    <div>
      <InfomationModal
        infomationOpen={infomationOpen}
        setInfomationOpen={setInfomationOpen}
        text={description}
      />

      <p className="upload-btn-subtitle mb-3">{headerTitle}</p>
      <Container
        maxWidth="xl"
        style={{
          borderRadius: "10px",
          borderColor: "#ffffff59",
          backgroundColor: "#ffffff0d",
          borderWidth: "1.5px",
          borderStyle: "dashed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px 50px",
          maxWidth: "100%",
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        {/* infomation */}
        <div
          className=" absolute top-3 right-3 cursor-pointer"
          onClick={() => get_infomation(name)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M15 2.5C8.09644 2.49999 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5Z"
              stroke="white"
              stroke-opacity="0.8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 20L15 15"
              stroke="white"
              stroke-opacity="0.8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 10L14.99 10"
              stroke="white"
              stroke-opacity="0.8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <Paper
          elevation={3}
          style={{
            padding: "0px",
            textAlign: "center",
            background: "transparent",
            position: "relative",
            boxShadow: "none",
          }}
        >
          {/* {children} */}
          <input
            type="file"
            accept={fileType}
            id={id}
            style={{ display: "none", maxWidth: "100%", width: "100%" }}
            onChange={(e) => handleChange(e, id)}
          />
          {isEmpty(imgUrl) && (
            <label htmlFor={id}>
              <Button
                variant="contained"
                component="span"
                style={{
                  background: "transparent",
                  color: "white",
                  boxShadow: "none",
                  textTransform: "none",
                }}
                // startIcon={<AiOutlinePlusCircle />}
              >
                <div>
                  <div className=" flex justify-center">
                    <img src={defaultImgUrl} style={{ width: "100px" }} />
                  </div>
                  <div className="upload-btn-title">{title}</div>
                </div>
              </Button>
            </label>
          )}
          {!isEmpty(imgUrl) && (
            <div>
              <div className=" flex justify-center">
                <div className=" relative w-[100px]">
                  <img
                    src={imgUrl}
                    alt="Preview"
                    style={{ width: "100%", height: "auto", maxWidth: "100%" }}
                  />
                  <img
                    src="/submission/multiupload-remove.png"
                    className=" top-0 right-0 absolute z-[5] cursor-pointer"
                    onClick={() => clearImg(id, 0)}
                  />
                </div>
              </div>

              <div className="upload-btn-title">{title}</div>
            </div>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default ModelUploadBtn;
