import { Card } from "@mui/material";
import "./ToolsItem.scss";
import { useState } from "react";

const ToolsItem = ({ onClick, logo, title }) => {
  const [isActive, setIsActive] = useState(false);

  const handleCardClick = () => {
    setIsActive(!isActive);
    onClick(); // Call the onClick function passed as a prop
  };
  return (
    <Card
      className={`aiitem__card ${isActive ? "toolsItem-active" : ""}`}
      onClick={handleCardClick}
    >
      <button
        onClick={onClick}
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
        className=" item-title"
      >
        <img src={logo} alt="" />
        {title}
      </button>
    </Card>
  );
};

export default ToolsItem;
