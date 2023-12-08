import { Fragment, useState } from "react";

import ImageLoad from "../../assets/components/CreateVideo/ImageLoad";
import ScriptWindow from "../../assets/components/CreateVideo/ScriptWindow";
import { isEmpty } from "../../utility/isEmpty";
import {
  mergeAudioFiles,
  uploadAvatar,
} from "../../redux/actions/VideoActions";
import { D_ID_API_KEY } from "../../config";
import axios from "axios";
import { Spin, notification } from "antd";

const CreateVideo = () => {
  const [allData, setAllData] = useState({
    avatar_url: "/modal/upload_image.png",
    first_audio: {
      headerTitle: "Upload Audio File",
      defaultImgUrl: "/step/upload_audio.png",
      imgUrl: "",
      title: "Load Audio File",
    },
    second_audio: {
      headerTitle: "Upload Audio File",
      defaultImgUrl: "/step/upload_audio.png",
      imgUrl: "",
      title: "Load Audio File",
    },
    video_url: ""
  });
  const [check_file, setCheckFile] = useState("");
  const [loading, setLoading] = useState(false);

  const audio_merge = async () => {

    //Audio Merge&Upload
    let audio_url = "";
    let avatar_url = "";
    let video_url = "";

    setLoading(true);
    if (
      !isEmpty(allData.first_audio.file) &&
      !isEmpty(allData.second_audio.file)
    ) {
      const formData = new FormData();
      formData.append("file", allData.first_audio.file);
      formData.append("file", allData.second_audio.file);

      console.log(allData.first_audio.file);
      console.log(allData.second_audio.file);
      console.log(allData.first_audio.file.type);
      console.log(allData.second_audio.file.type);

      if(allData.first_audio.file.type !== "audio/wav" || allData.second_audio.file.type !== "audio/wav" ){
        console.log("File type is not wav");
        setCheckFile("File is not Wav file");
        setLoading(false);
        return;
      }

      let total_size = allData.first_audio.file.size + allData.second_audio.file.size;
      var sizeInMB = total_size / (1024*1024);
      if(sizeInMB > 15) {
        console.log("File size is exceed 15MB");
        setCheckFile("File size is exceed 15MB");
        setLoading(false);
        return;
      }

      try {
        const res = await mergeAudioFiles(formData);
        console.log(res);
        audio_url = res.data.message;
      } catch (err) {
        console.log(err);
        setLoading(false);
        return;
      }
    }else{
      setLoading(false);
      return;
    }

    //Avatar Upload
    if (!isEmpty(allData.avatar_file)) {
      const formData = new FormData();
      formData.append("avatar_file", allData.avatar_file);
      try {
        const res = await uploadAvatar(formData);
        console.log(res);
        avatar_url = res.data.message;
      } catch (err) {
        console.log(err);
      }
    }else{
      setLoading(false);
      return;
    }
    // setLoading(false);
    // return;

    console.log("api_key", process.env.REACT_APP_D_ID_API_KEY);
    console.log("audio_url", audio_url);
    console.log("avatar_url", avatar_url);
    //Video Create
    const url = "https://api.d-id.com/talks";
    const headers = {
      Authorization: `Basic ${process.env.REACT_APP_D_ID_API_KEY}`,
      "Content-Type": "application/json",
    };

    const payload = {
      script: {
        type: "audio",
        subtitle: "false",
        audio_url: audio_url,
      },
      config: {
        fluent: "false",
        pad_audio: "0.0",
      },
      source_url: avatar_url,
    };
    try {
      let response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload),
      });

      console.log("response", response);
      if (response.status === 201) {
        const data = await response.json();
        console.log("data", data);
        const id = data.id;
        let status = "created";
        while (status === "created") {
          try {
            const getResponse = await fetch(`${url}/${id}`, {
              method: "GET",
              headers: headers,
            });
            console.log("getResponse", getResponse);
            if (getResponse.status === 200) {
              const responseData = await getResponse.json();
              console.log("responseData", responseData);
              //status = responseData.status;
              if (responseData.status === "done") {
                status = "done";
                video_url = responseData.result_url;
              } else {
                await new Promise((r) => setTimeout(r, 10000));
              }
            } else {
              status = "error";
              video_url = "error";
            }
          } catch (error) {
            console.log(error);
            status = "error";
            video_url = "error";
          }
        }
      } else {
        video_url = "error";
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
    console.log("video_url", video_url);
    setAllData({ ...allData, video_url: video_url  });
  };

  const settingChange = async (name, value) => {};
  const handleUploadChange = async (e, id) => {
    const file = e.target.files[0];
    if (isEmpty(file)) return;

    if (id === "first_audio") {
      setAllData({
        ...allData,
        first_audio: {
          headerTitle: "Attached File",
          title: file.name,
          imgUrl: "/step/attached_audio.png",
          defaultImgUrl: "/step/upload_audio.png",
          file,
        },
      });
    } else {
      setAllData({
        ...allData,
        second_audio: {
          headerTitle: "Attached File",
          title: file.name,
          imgUrl: "/step/attached_audio.png",
          defaultImgUrl: "/step/upload_audio.png",
          file,
        },
      });
    }
  };

  const handleAvatarChange = async (e, id) => {
    if (isEmpty(e.target.files[0])) return;

    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setAllData({ ...allData, avatar_url: url, avatar_file: file });
    console.log(file);
  };

  const clearImg = (id) => {
    console.log(id);

    if (id === "first_audio") {
      setAllData({
        ...allData,
        first_audio: {
          headerTitle: "",
          defaultImgUrl: "/step/upload_audio.png",
          imgUrl: "",
          title: "Load Audio File",
        },
      });
    }
    if (id === "second_audio") {
      setAllData({
        ...allData,
        second_audio: {
          headerTitle: "",
          defaultImgUrl: "/step/upload_audio.png",
          imgUrl: "",
          title: "Load Audio File",
        },
      });
    }
  };

  return (
    <Spin spinning={loading} >
      <div className=" grid grid-cols-1 lg:grid-cols-2 p-5">
        <div>
          <div className=" flex justify-center">
            <ImageLoad avatar_url={allData.avatar_url} />
          </div>
          <div>
            {" "}
            <input
              type="file"
              accept={"image/*"}
              id={"avatar"}
              onChange={(e) => handleAvatarChange(e, "avatar")}
            />
          </div>
        </div>
        <div className=" bg-grey">
          <ScriptWindow
            settingChange={settingChange}
            allData={allData}
            handleUploadChange={handleUploadChange}
            audio_merge={audio_merge}
            clearImg={clearImg}
            check_file={check_file}
          />
        </div>
      </div>
      {!isEmpty(allData.video_url)&& allData.video_url !== "error"?<a href={allData.video_url} target="_blank">download video</a>:<></>}
    </Spin>
  );
};

export default CreateVideo;
