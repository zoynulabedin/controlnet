import { useState } from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";

import ToolsItem from "../../assets/components/Admin/ToolsItem/ToolsItem";
import CreateVoiceModal from "../../assets/components/Modal/CreateVoice";

const Middleware = () => {
  const [modelOpen, setModelOpen] = useState(false);

  const cardClick = () => {
    setModelOpen(true);
  };

  return (
    <div>
      {/* <a onClick={()=>handleChange()} className=" text-white">Click Middleware</a> */}
      <Card
        sx={{ minmaxWidth: 275 }}
        style={{
          backgroundColor: "#131313",
          padding: "20px",
          height: "100%",
        }}
      >
        <Grid item={3} style={{ maxWidth: "23%" }}>
          <ToolsItem logo={"/tools/middleware.png"} onClick={cardClick} />
        </Grid>
        <CreateVoiceModal open={modelOpen} setOpen={setModelOpen} />
      </Card>
    </div>
  );
};

export default Middleware;
