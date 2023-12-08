import { Fragment, useState } from "react";
import { Paper, Container, Button } from "@mui/material";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import TextArea from "../TextArea/TextArea";
import PromptButton from "../Button/PromptButton";


const ScriptWindow = ({ settingChange, allData, handleUploadChange, audio_merge, clearImg, check_file }) => {

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
        padding: "20px 20px",
        maxWidth: "100%",
        width: "60%",

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
        }}
      >
        {/* {children} */}
        <div>
          <Tabs id="custom-animation" value="1">
            <TabsHeader className=" bg-blue-gray-800">
              <Tab key={"1"} value={"1"}>
                Script
              </Tab>
              <Tab key={"2"} value={"2"}>
                Audio
              </Tab>
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
            >
              <TabPanel key={"1"} value={"1"}>
                <TextArea
                  title={"Content Generated From AI"}
                  value={""}
                  // defaultValue={allData.needed_data.text}
                  placeholder={"Type your text here..."}
                  name={"text"}
                  change={(name, value) => settingChange(name, value)}
                  type={"text"}
                />
              </TabPanel>
              <TabPanel key={"2"} value={"2"}>
                <PromptButton
                  title={allData.first_audio.title}
                  defaultImgUrl={allData.first_audio.defaultImgUrl}
                  imgUrl={allData.first_audio.imgUrl}
                  id={"first_audio"}
                  fileType={"audio/*"}
                  handleChange={(e, id) => handleUploadChange(e, id)}
                  clearImg={clearImg}
                />
                <PromptButton
                  title={allData.second_audio.title}
                  defaultImgUrl={allData.second_audio.defaultImgUrl}
                  imgUrl={allData.second_audio.imgUrl}
                  id={"second_audio"}
                  fileType={"audio/*"}
                  handleChange={(e, id) => handleUploadChange(e, id)}
                  clearImg={clearImg}
                />
                <p className=" text-red-500">{check_file}</p>
                <button onClick={()=>audio_merge()}>Audio Merge</button>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </div>
      </Paper>
    </Container>
  );
};

export default ScriptWindow;
