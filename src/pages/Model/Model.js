import { useEffect } from "react";
import ModelCard from "../../assets/components/Model/ModelCard";
import "./Model.scss";
import { getModels } from "../../redux/actions/ModelActions";
import { useState } from "react";
import MenuContent from "../../assets/components/Menu/MenuContent";
import { Popover } from "antd";

const Model = () => {
  const [list, setList] = useState([]);
  const [videoHeight, setVideoHeight] = useState("130%");

  useEffect(() => {
    const fetchModels = async () => {
      let res = await getModels({ model: "product" });
      console.log(res);

      if (res.data.length > 15) {
        // You can adjust the number here based on your requirements
        setVideoHeight(`${res.data.length * 10}%`); // Adjust the multiplier for your item's height here
      }

      setList(res.data);
    };
    fetchModels();
  }, []);

  return (
    <div className=" p-4">
      <section className=" flex justify-between w-full">
        <img src="/auth/logo.png" />
        <div className=" flex justify-center items-center gap-2">
          <div>
            <button className="header-plus p-1">
              <img src="/header/plus.svg" />
            </button>
          </div>
          <Popover
            placement="bottomRight"
            content={<MenuContent />}
            colorBgElevated={"#ffffff"}
            overlayClassName="black-background-popover"
          >
            <button className="header-plus p-1">
              <img src="/header/menu.svg" />
            </button>
          </Popover>
        </div>
      </section>
      <div className=" bg-none bg-transparent text-start mt-3">
        <p className="my-project">My Projects</p>
        <div className=" mt-3">
          <div className=" grid grid-cols-5 gap-3">
            {list.map((item, index) => (
              <ModelCard />
            ))}
          </div>
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
            height: videoHeight,
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source src="/product/background.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Model;
