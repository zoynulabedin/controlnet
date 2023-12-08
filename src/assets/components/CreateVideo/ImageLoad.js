import { Fragment, useState } from "react";
import { Paper, Container, Button } from "@mui/material";
import CreateVideo from "../../../pages/CreateVideo/createVideo";
import { isEmpty } from "../../../utility/isEmpty";

const ImageLoad = ({ avatar_url }) => {

  return (
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
        padding: "50px 20px",
        maxWidth: "100%",
        width: "60%",
        height: "50%",
        position: "relative",
      }}
    >
      <Paper
        elevation={3}
        style={{
          padding: "0px",
          width: "100%",
          textAlign: "center",
          background: "transparent",
          position: "relative",
          boxShadow: "none",
          display:"flex",
          justifyContent: "center"
        }}
      >
        {/* {children} */}
        <img src={avatar_url} width={"300px"} />
      </Paper>
    </Container>
  );
};

export default ImageLoad;
