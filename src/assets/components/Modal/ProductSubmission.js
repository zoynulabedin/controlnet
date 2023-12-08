import { useEffect, useState, useRef } from "react";
import "./ProductSubmission.scss";
import { isEmpty } from "../../../utility/isEmpty";
import { Spin } from "antd";
import { getModelSrc } from "../../../redux/actions/Submissions";
import ModelView from "../ModelViewer/ModelView";
import MultiUploadButton from "../Product/MultiUploadButton";

import {
  uploadFiles,
  uploadProduct,
} from "../../../redux/actions/uploadActions";
import { detectPrompt } from "../../../redux/actions/ModelActions";

const ProductSubmission = () => {
  const [cash, setCash] = useState([]);
  const [step, setStep] = useState(0);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const req_qa_box = useRef(null);

  useEffect(() => {
    req_qa_box.current.scrollTop = req_qa_box.current.scrollHeight;
    console.log("auto scroll stopped!");
  }, [prompt, step, cash, loading]);

  const send = async () => {
    const sendData = {
      prompt: prompt,
      step: step,
      history: cash,
    };

    try {
      console.log("detect prompt!");
      setLoading(true);
      setPrompt("");
      let res = await detectPrompt(sendData);
      console.log(res);

      let reply = [];
      reply.push({
        role: "user",
        content: {
          type: "text",
          value: prompt,
        },
      });

      if (res.data.step_move === "true") {
        console.log("step", step);
        switch (step) {
          case 0:
            setAllData({
              ...allData,
              current_placeholder: "To generate model prompt ‘Yes’.",
            });
            break;
          case 1:
            let res = await getModelSrc({ keyword: "jordan" });
            console.log(res.data.model_src);
            setAllData({
              ...allData,
              current_placeholder: "To get qr code about the model ‘Yes’.",
              model_src: res.data.model_src,
            });
            break;
          case 2:
            sendServer("*qr_code*");
            break;
          default:
            break;
        }
        reply.push({
          role: "assistant",
          content: {
            type: "step",
            index: step,
          },
        });
        setCash(...cash, {
          role: "assistant",
          content: {
            type: "step",
            index: step,
          },
        });
        setStep(step + 1);
      } else {
        reply.push({
          role: "assistant",
          content: {
            type: "text",
            value: res.data.message,
          },
        });
      }
      setLoading(false);
      setCash([...cash, ...reply]);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const onChange = (e) => {
    console.log(e.target.value);
    setPrompt(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      send();
    }
  };

  const sendServer = async (qrCodeSrc) => {
    const formData = new FormData();
    formData.append("model", "product");
    try {
      if (!isEmpty(allData.multi_images)) {
        allData.multi_images.map((item) => {
          formData.append("file", item.file);
        });
      }

      // if (!isEmpty(allData.qrCodeSrc)){
      //   formData.append("qrCodeSrc",qrCodeSrc);
      // }
      await uploadFiles(formData);
      console.log("Successfully uploaded");
    } catch (err) {
      console.log(err);
    }
  };

  const [allData, setAllData] = useState({
    model: "product",
    model_keyword: "",
    model_src: "",
    current_step_index: 0,
    current_placeholder: "What would you like to do today, AMiGO?",
    multi_images: [],
  });

  const handleMultiUploadChange = async (e, id) => {
    console.log(e);
    console.log(e.target.files[0]);
    if (!isEmpty(e.target.files[0])) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      console.log(file);
      setAllData({
        ...allData,
        current_placeholder: "To generate model prompt ‘Yes’.",
      });

      try {
        // Add Voice
        let new_Data = allData[[id]];
        new_Data.push({ file: file, thumbnail: url });
        setAllData({ ...allData, [id]: new_Data });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const clearImg = async (id, remove_index) => {
    console.log(id);

    if (id === "multi_images" || id === "multi_videos") {
      let new_data = allData[[id]].filter(
        (item, index) => index !== remove_index
      );
      console.log(new_data);
      setAllData({ ...allData, [id]: new_data });
    }
  };

  return (
    <div className=" flex justify-center scrollable-div" ref={req_qa_box}>
      <div className=" w-[600px]">
        {cash.map((item, index) => (
          <div className=" pl-5 pr-5 pb-1 mt-6" key={index}>
            <div>
              {item.role === "user" ? (
                <div className=" flex justify-between">
                  <div style={{ width: "40px" }}>
                    <img src="/avatar/product/user.png" width={"100%"} />
                  </div>
                  <div className="user-prompt">{item.content.value}</div>
                </div>
              ) : item.content.type == "text" ? (
                <div className=" flex justify-between">
                  <div style={{ width: "40px" }}>
                    <img
                      src="/avatar/product/ai.png"
                      width={"100%"}
                      className=" rounded-[20px]"
                    />
                  </div>
                  <div className="user-prompt">{item.content.value}</div>
                </div>
              ) : item.content.index === 0 ? (
                <div className=" flex justify-between gap-3 mt-10">
                  <div style={{ width: "40px" }} className=" flex-none">
                    <img
                      src="/avatar/product/ai.png"
                      width={"100%"}
                      className=" rounded-[20px]"
                    />
                  </div>
                  <div className=" flex-1">
                    <MultiUploadButton
                      headerTitle={
                        isEmpty(allData.multi_images)
                          ? "Sure, upload your images or video."
                          : `You have uploaded ${allData.multi_images.length} images. Shall we proceed?`
                      }
                      title={"Drag and drop images or video here"}
                      fileType={"image/*"}
                      id={"multi_images"}
                      handleChange={handleMultiUploadChange}
                      clearImg={clearImg}
                      defaultImgUrl={"/product/upload.png"}
                      fileList={allData.multi_images}
                    />
                  </div>
                </div>
              ) : item.content.index === 1 ? (
                <div className=" flex justify-between">
                  <div style={{ width: "40px" }} className=" flex-none">
                    <img
                      src="/avatar/product/ai.png"
                      width={"100%"}
                      className=" rounded-[20px]"
                    />
                  </div>
                  <div>
                    <ModelView model_src={allData.model_src} />
                  </div>
                </div>
              ) : (
                <div className=" flex justify-between gap-3 mt-10">
                  <div style={{ width: "40px" }} className=" flex-none">
                    <img
                      src="/avatar/product/ai.png"
                      width={"100%"}
                      className=" rounded-[20px]"
                    />
                  </div>
                  <div>
                    {" "}
                    <div className=" flex justify-center">
                      <img src="/model/qr_code.png" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        {loading ? (
          <div className=" pl-5 pr-5 pb-1 mt-6">
            <div>
              <div className=" flex justify-between">
                <div style={{ width: "40px" }} className=" flex-none rotate">
                  <img
                    src="/avatar/product/ai.png"
                    width={"100%"}
                    className="rounded-[20px]"
                  />
                </div>
                <div></div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div id="userInput" className=" mt-10 relative">
          <input
            id="chat-box"
            type="text"
            name="user_prompt"
            onChange={onChange}
            onKeyDown={handleKeyDown}
            value={prompt}
            placeholder={allData.current_placeholder}
          />
          <div id="chat-btn-grp">
            <img
              className="chat-btn"
              style={{ height: "40px" }}
              src="/product/voice.png"
            />
            <img
              className="chat-btn cursor-pointer"
              id="send"
              src="/product/send.png"
              onClick={() => send()}
            />
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};

export default ProductSubmission;
