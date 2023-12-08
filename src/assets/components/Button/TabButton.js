import "./TabButton.scss";
import { Typography } from "@mui/material";

const TabButton = ({ title, svgUrl, width = "100%", index, step_index, change}) => {

  return (
    <button
      style={{ width: width, padding: "10px" }}
      className={ step_index === index?"tab-button-active":"tab-button"}
      onClick={change}
    >
      <div className=" flex justify-center gap-2">
        <img src={svgUrl} alt="" className="" />
        <Typography className={ step_index === index ? "tab-button-title-active":"tab-button-title" }>{title}</Typography>
      </div>
    </button>
  );
};

export default TabButton;
