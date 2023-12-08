import { Fragment, useState } from "react";
import { Paper, Container, Button } from "@mui/material";
// import { AiOutlinePlusCircle } from "react-icons/ai";
// import { IoMdRemoveCircleOutline } from "react-icons/io";

import { isEmpty } from "../../../utility/isEmpty";
import "./UploadButton.scss";
import { UPLOAD_AUDIO, UPLOAD_IMAGE, UPLOAD_VIDEO } from "../Modal/Info_Description";
import InfomationModal from "../Modal/InfomationModal";

const UploadButton = ({ id, handleChange, headerTitle , title, clearImg, imgUrl, defaultImgUrl, height="65%", name }) => {

    const [infomationOpen, setInfomationOpen] = useState(false);
    const [description, setDescription] = useState([]);

    const get_infomation = (type) => {
        let str = [];
        switch(type){
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
        setDescription(str)
        setInfomationOpen(true);
    }

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
                padding: "150px 50px",
                maxWidth: "100%",
                width: "100%",
                height: height,
                position: "relative"
                }}
            >

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
                accept="audio/*"
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
                    textTransform: "none"
                    }}
                    // startIcon={<AiOutlinePlusCircle />}
                >
                    <div>
                        <div className=" flex justify-center"><img src={defaultImgUrl} /></div>
                        <div className="upload-btn-title mt-2">{title}</div>
                    </div>
                </Button>
                </label>
            )}
            <div>
                {!isEmpty(imgUrl) && (
                <>
                    <img
                    src={imgUrl}
                    alt="Preview"
                    style={{ width: "100%", height: "auto", maxWidth: "100%" }}
                    />
                    <Button
                    variant="outlined"
                    color="error"
                    onClick={() => clearImg(id)}
                    //   startIcon={<IoMdRemoveCircleOutline />}
                    style={{
                        position: "absolute",
                        top: "0",
                        right: "0",
                        border: "none",
                        boxShadow: "none",
                    }}
                    ></Button>
                </>
                )}
            </div>
            </Paper>
        </Container>
        </Fragment>

    )
}

export default UploadButton;