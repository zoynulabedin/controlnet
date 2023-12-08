import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Divider, Switch, Spin } from "antd";
import { Stepper } from "react-form-stepper";
import { Typography } from "@mui/material";
import { isEmpty } from "../../../../../utility/isEmpty";

import "./CardModal.scss";
import EditButton from "./EditButton";
import AddButton from "./AddButton";

const CardModal = ({ open, setOpen, data }) => {
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

  const handleClose = () => setOpen(false);
  // console.log(data.attachment.image);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ backdropFilter: "blur(15px)" }}
    >
      <Box sx={style}>
        {!isEmpty(data) ? (
          data.model === "avatar" ? (
            <div className="submission-card ">
              {" "}
              <div className=" flex justify-between">
                <div className=" flex justify-start items-center gap-3">
                  <div>
                    <img src="/submission/modal/modal-title-image.png" />
                  </div>
                  <div>
                    <p className="modal-header-text">{data.project_name}</p>
                    <span className="modal-header-subtext">Jennifer Perez</span>
                    <span className="modal-header-subtext">Order# 432sd53</span>
                  </div>
                </div>
              </div>
              <Divider style={{ backgroundColor: "#ffffff1a" }} />
              <div className=" flex justify-between">
                <div className=" w-[70%]">
                  <div className=" p-3 bg-[#242424] rounded-xl flex flex-col gap-3">
                    <div className=" flex justify-between">
                      <div className=" flex justify-start items-center gap-3 ">
                        <img src="/submission/modal/attachment-image.png" />
                        <span className=" modal-card-attachment-title">
                          Attachment
                        </span>
                      </div>
                      <div>
                        <EditButton />
                      </div>
                    </div>
                    <div>
                      {!isEmpty(data.attachment) ? (
                        data.attachment.image.map((item) => (
                          <img
                            src={item}
                            width={"100%"}
                            style={{ height: "200px" }}
                            className=" mt-4 rounded"
                          />
                        ))
                      ) : (
                        <></>
                      )}
                    </div>
                    <div>
                      <audio controls>
                        <source
                          src={data.attachment.audio[0]}
                          type="audio/mpeg"
                        />
                      </audio>
                    </div>
                    <div>
                      <a href={data.attachment.video[0]} target="_blank">
                        {data.attachment.video[0]}
                      </a>
                    </div>
                    <div>
                      <a href={data.attachment.document[0]} target="_blank">
                        {data.attachment.document[0]}
                      </a>
                    </div>
                    <div className=" flex">
                      <AddButton />
                    </div>
                  </div>
                </div>
                <div className=" w-[25%] flex flex-col gap-2">
                  <div className="add-to-card-text">Add to card</div>
                  <button className="add-to-card-btn rounded-xl p-3">
                    <div className=" flex justify-start items-center">
                      <img src="/submission/modal/svg/tags.svg" />
                      <div className="add-to-card-btn-text">Tags</div>
                    </div>
                  </button>
                  <button className="add-to-card-btn rounded-xl p-3">
                    <div className=" flex justify-start items-center">
                      <img src="/submission/modal/svg/checklist.svg" />
                      <div className="add-to-card-btn-text">Checklist</div>
                    </div>
                  </button>
                  <button className="add-to-card-btn rounded-xl p-3">
                    <div className=" flex justify-start items-center">
                      <img src="/submission/modal/svg/dates.svg" />
                      <div className="add-to-card-btn-text">Dates</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="submission-card ">
              {" "}
              <div className=" flex justify-between">
                <div className=" flex justify-start items-center gap-3">
                  <div>
                    <img src="/submission/modal/modal-title-image.png" />
                  </div>
                  <div>
                    <p className="modal-header-text">{data.project_name}</p>
                    <span className="modal-header-subtext">Jennifer Perez</span>
                    <span className="modal-header-subtext">Order# 432sd53</span>
                  </div>
                </div>
              </div>
              <Divider style={{ backgroundColor: "#ffffff1a" }} />
              <div className=" flex justify-between">
                <div className=" w-[70%]">
                  <div className=" p-3 bg-[#242424] rounded-xl flex flex-col gap-3">
                    <div className=" flex justify-between">
                      <div className=" flex justify-start items-center gap-3 ">
                        <img src="/submission/modal/attachment-image.png" />
                        <span className=" modal-card-attachment-title">
                          Attachment
                        </span>
                      </div>
                      <div>
                        <EditButton />
                      </div>
                    </div>
                    <div>
                      {!isEmpty(data.attachment) ? (
                        data.attachment.image.map((item) => (
                          <img
                            src={item}
                            width={"100%"}
                            style={{ height: "200px" }}
                            className=" mt-4 rounded"
                          />
                        ))
                      ) : (
                        <></>
                      )}
                    </div>
                    <div>
                      <a href={data.attachment.video[0]} target="_blank">
                        {data.attachment.video[0]}
                      </a>
                    </div>
                    <div className=" text-white">
                      <p>Experience Type: {data.experience_type}</p>
                      <p>Product Link: {data.product_link}</p>
                      <p>Animation Prompt: {data.animation_prompt}</p>
                    </div>
                    <div className=" flex">
                      <AddButton />
                    </div>
                  </div>
                </div>
                <div className=" w-[25%] flex flex-col gap-2">
                  <div className="add-to-card-text">Add to card</div>
                  <button className="add-to-card-btn rounded-xl p-3">
                    <div className=" flex justify-start items-center">
                      <img src="/submission/modal/svg/tags.svg" />
                      <div className="add-to-card-btn-text">Tags</div>
                    </div>
                  </button>
                  <button className="add-to-card-btn rounded-xl p-3">
                    <div className=" flex justify-start items-center">
                      <img src="/submission/modal/svg/checklist.svg" />
                      <div className="add-to-card-btn-text">Checklist</div>
                    </div>
                  </button>
                  <button className="add-to-card-btn rounded-xl p-3">
                    <div className=" flex justify-start items-center">
                      <img src="/submission/modal/svg/dates.svg" />
                      <div className="add-to-card-btn-text">Dates</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )
        ) : (
          <></>
        )}
      </Box>
    </Modal>
  );
};

export default CardModal;
