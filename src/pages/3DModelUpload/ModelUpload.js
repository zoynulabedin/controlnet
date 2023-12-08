import { useState } from "react";
//import Button from "../../assets/components/Button/Button";
import Input from "../../assets/components/Input/Input";
import ModelTag from "../../assets/components/Model/ModelTag";
import ModelUploadBtn from "../../assets/components/Model/ModelUploadBtn";
import { isEmpty } from "../../utility/isEmpty";
import filled from "@material-tailwind/react/theme/components/timeline/timelineIconColors/filled";
import { uploadModel } from "../../redux/actions/uploadActions";
import { Spin, Button } from "antd";
const ModelUpload = () => {
  const [tags, setTags] = useState(["Tag 2", "Tag 3"]);
  const [loading, setLoading] = useState(false);

  const [allData, setAllData] = useState({
    model_name: "",
    title: "Upload 3D Model File",
    defaultImgUrl: "",
    imgUrl: "",
  });

  const clearImg = async (id, remove_index) => {
    if (id === "model") {
      setAllData({ ...allData, defaultImgUrl: "" });
    }
  };
  const handleUploadChange = (e, id) => {
    const file = e.target.files[0];
    if (isEmpty(file)) return;

    if (id === "model") {
      setAllData({
        ...allData,
        defaultImgUrl: "/step/upload_audio.png",
        file: file,
      });
    }
  };

  const inputChanges = (e) => {
    let key = e.target.name;
    let value = e.target.value;

    setAllData({ ...allData, model_name: value });
  };

  const Submit = async () => {
    setLoading(true);
    let newData = allData;
    newData["tags"] = tags;
    console.log(newData);

    const formData = new FormData();
    if (!isEmpty(newData.model_name)) {
      formData.append("model_name", newData.model_name);
    }
    if (!isEmpty(newData.defaultImgUrl)) {
      formData.append("file", newData.file);
    }
    if (!isEmpty(tags)) {
      formData.append("tags", tags);
    }
    try {
      await uploadModel(formData);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div className=" p-9">
      <>
        <ModelTag tags={tags} setTags={setTags} />
        <ModelUploadBtn
          title={allData.title}
          defaultImgUrl={allData.defaultImgUrl}
          imgUrl={allData.imgUrl}
          id={"model"}
          fileType={"*/*"}
          handleChange={(e, id) => handleUploadChange(e, id)}
          clearImg={clearImg}
        />
        <Input
          title={"Model_Name"}
          placeholder={"Jacket 3D Model"}
          name={"model_name"}
          change={inputChanges}
          defaultValue={""}
          type={"text"}
        />
        {/* <Button
            title={"Submit"}
            change={Submit}
            className={"mt-10 text-[20px]"}
          /> */}
        <div className=" flex justify-center mt-5">
          <Button
            size="large"
            style={{ backgroundColor: "grey", width: "300px" }}
            loading={loading}
            onClick={() => Submit()}
          >
            Upload
          </Button>
        </div>

        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source src="/product/background.mp4" type="video/mp4" />
        </video>
      </>
    </div>
  );
};

export default ModelUpload;
