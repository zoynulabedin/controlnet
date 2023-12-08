import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { Divider, Switch } from "antd";
import { useState } from "react";

//scss
import "./GenerateModel.scss";
import "./InfomationModal.scss";
import { isEmpty } from "../../../utility/isEmpty";
const InfomationModal = ({infomationOpen, setInfomationOpen, text}) => {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } }; 
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "40%",
        // bgcolor: "background.paper",
        backgroundColor: "#131313",
        border: "2px solid #000",
        borderRadius: "10px",
        p: 4,
      };

    const handleClose = () => setInfomationOpen(false);

    return (
        <Modal
        open={infomationOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ backdropFilter: "blur(15px)" }}
        >
          <Box sx={style}>
          <div className=" absolute top-6 right-6 cursor-pointer" onClick={() => setInfomationOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <g opacity="0.15" filter="url(#filter0_b_366_697)">
                        <circle cx="16" cy="16" r="16" fill="white"/>
                    </g>
                    <path d="M20.4802 12.1602L12.1602 20.4802" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    <path d="M20.4805 20.4802L12.1605 12.1602" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    <defs>
                        <filter id="filter0_b_366_697" x="-4" y="-4" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_366_697"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_366_697" result="shape"/>
                        </filter>
                    </defs>
                </svg>
            </div>
            <Typography id="modal-modal-title" variant="h6" component="h2" className=" signup-modal-title text-white">
                Infomation
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Divider style={{ backgroundColor: "#ffffff1a" }} />
            
              {!isEmpty(text) ? text.map(item => <p className=" infomation-text mt-5">{item}</p>) : <></>}
            </Typography>
          </Box>
        </Modal>
    )
}

export default InfomationModal;