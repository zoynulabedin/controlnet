import { useState } from "react";
import "../../components/Model/ModelCard.scss";
import ModelModal from "./ModelModal";
export const Divider = () => (
  <div
    style={{
      borderTop: "1px solid #ffffff26",
      width: "100%",
      marginBottom: "16px",
      marginTop: "16px",
    }}
  />
);

const ModelCard = () => {

   const [open, setOpen] = useState(false);

  const modalClick = () => {
    setOpen(true);
  };


  return (
    <>
      <div className="model-card p-3" onClick={() => modalClick()}>
        <div className=" flex justify-between items-center">
          <div className=" flex justify-start items-center gap-2">
            <img src="/model/model-title.png" />
            <div className="model-header-title">3d Product</div>
          </div>
          <div>
            <img src="/model/model-setting.png" />
          </div>
        </div>
        <Divider />
        <div className="model-content p-2">
          <div className=" flex justify-between items-center">
            <div className="model-content-title">3d model for sneaker</div>
            <img src="/model/model-content-avatar.png" />
          </div>
          <div className="modal-content-date">08 Nov, 2023</div>
          <Divider />
          <img src="/model/main.png" />
          <Divider />
          <div className=" flex justify-between items-center">
            <div className=" flex justify-start items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <circle cx="6" cy="6" r="6" fill="#3ABE29" />
              </svg>
              <div className="model-content-status">Uploaded</div>
            </div>
            <div className=" bg-[#ffffff1a] p-2 flex justify-start gap-1 rounded">
              <img src="/model/messages.png" />
              <div className="model-content-view">12</div>
            </div>
          </div>
        </div>
      </div>
      <ModelModal open={open}setOpen={setOpen} />
    </>
  );
};

export default ModelCard;
