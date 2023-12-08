import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import "./ModelModal.scss";
const ModelModal = ({ open, setOpen }) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
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

  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ backdropFilter: "blur(15px)" }}
    >
      <Box sx={style}>
        <div className=" flex justify-start gap-2">
          <div>
            <img src="/model/model-title.png" style={{ width: "40px" }} />
          </div>
          <div>
            <div className="modal-title">Jose Rodriguez</div>
            <div className=" flex justify-start gap-2">
              <div className="modal-subtitle">Jose Rodriguez</div>
              <div className="modal-subtitle">Upload date: 20-11-2023</div>
            </div>
          </div>
        </div>
        <div className="modal-content mt-3">
          <img src="/model/qr_code.png" />
        </div>
      </Box>
    </Modal>
  );
};

export default ModelModal;
