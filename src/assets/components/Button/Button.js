import "./Button.scss";
import { Typography } from "@mui/material";

const Button = ({ title, svgUrl, width = "100%", className, change}) => {
  return (
    <button
      style={{ width: width, padding: "10px" }}
      className={ className?` ${className} btn-content`:"btn-content"}
      onClick={change}
    >
      <div className=" flex justify-center gap-2">
        <img src={svgUrl} alt="" className="" />
        {title}
      </div>
    </button>
  );
};

export default Button;
