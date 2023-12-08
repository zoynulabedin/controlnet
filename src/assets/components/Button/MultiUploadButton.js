import { Fragment, useState } from "react";
import { Paper, Container, Button } from "@mui/material";
// import { AiOutlinePlusCircle } from "react-icons/ai";
// import { IoMdRemoveCircleOutline } from "react-icons/io";

import { isEmpty } from "../../../utility/isEmpty";
import "./UploadButton.scss";
import {
  UPLOAD_AUDIO,
  UPLOAD_IMAGE,
  UPLOAD_VIDEO,
} from "../Modal/Info_Description";
import InfomationModal from "../Modal/InfomationModal";

const MultiUploadButton = ({
  id,
  handleChange,
  headerTitle,
  fileType,
  title,
  clearImg,
  imgUrl,
  defaultImgUrl,
  height = "100%",
  name,
  fileList,
}) => {
  const [infomationOpen, setInfomationOpen] = useState(false);
  const [description, setDescription] = useState([]);

  const get_infomation = (type) => {
    let str = [];
    switch (type) {
      case "image":
        str = UPLOAD_IMAGE;
        break;
      case "video":
        str = UPLOAD_VIDEO;
        break;
      default:
        break;
    }
    console.log(str);
    setDescription(str);
    setInfomationOpen(true);
  };

  return (
    <Fragment>
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
          padding: "80px 20px",
          maxWidth: "100%",
          width: "100%",
          height: height,
          position: "relative",
        }}
      >
        <Paper
          elevation={3}
          style={{
            padding: "0px",
            width: "100%",
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
                  <img src={defaultImgUrl} />
                </div>
                <div className="upload-btn-title mt-2">{title}</div>
              </div>
            </Button>
          </label>
          <div className="flex flex-wrap w-full justify-start gap-3">
            {fileList.map((item, index) => (
              <div className=" relative">
                {id === "multi_images" ? (
                  <img
                    key={index} // Adding a 'key' to every child in a list is a widely adopted convention when working with lists of elements coming from an Array.map() call
                    src={item.thumbnail} // Assuming 'item' contains the URL for each image file
                    alt={`Preview-${index}`} // set alt text for each image
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "5px",  
                    }}
                  />
                ) : (
                  <video
                    key={index} // Adding a 'key' to every child in a list is a widely adopted convention when working with lists of elements coming from an Array.map() call
                    src={item.thumbnail} // Assuming 'item' contains the URL for each image file
                    autoPlay
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "5px",
                    }}
                  />
                )}
                <img
                  src="/submission/multiupload-remove.png"
                  className=" top-0 right-0 absolute z-[5] cursor-pointer"
                  onClick={() => clearImg(id, index)}
                />
              </div>
            ))}
          </div>
        </Paper>
      </Container>
    </Fragment>
  );
};

export default MultiUploadButton;
