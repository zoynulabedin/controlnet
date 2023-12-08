import { Fragment, useState } from "react";
import { Paper, Container, Button } from "@mui/material";
// import { AiOutlinePlusCircle } from "react-icons/ai";
// import { IoMdRemoveCircleOutline } from "react-icons/io";

import { isEmpty } from "../../../utility/isEmpty";
import "./SelectModel.scss";
import InfomationModal from "../Modal/InfomationModal";
import { DIGITAL_TWIN, PRODUCT } from "../Modal/Info_Description";
import Input from "../Input/Input";

const SelectModel = ({ headerTitle , defaultImgUrl, name, clickedName, handleClick }) => {

  const [infomationOpen, setInfomationOpen] = useState(false);
  const [description, setDescription] = useState([]);
  const [bgColor, setBgColor] = useState("");

  const get_infomation = (type) => {
    let str = [];
    switch(type){
      case "avatar":
        str = DIGITAL_TWIN;
        break;
      case "product":
        str = PRODUCT;
        break;
      default:
        break;
    }
    console.log(str);
    setDescription(str)
    setInfomationOpen(true);
  }

  return (
    <div>
      <InfomationModal infomationOpen={infomationOpen} setInfomationOpen={setInfomationOpen} text={description} />

      <div className="upload-btn-subtitle mb-3">{headerTitle}</div>
      <div
        className={clickedName !== name?"model-border-gradient": "model-border-gradient-active"}
        onClick={() => handleClick(name)}
      >
      {/* infomation */}
      <div className=" absolute top-3 right-3 cursor-pointer" onClick={()=>get_infomation(name)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M15 2.5C8.09644 2.49999 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5Z" stroke="white" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15 20L15 15" stroke="white" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15 10L14.99 10" stroke="white" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      {/* {children} */}
      <div className=" flex justify-center"><img src={defaultImgUrl} style={{ width: "100%" }} /></div>
    </div>
    </div>

  )
}

export default SelectModel;