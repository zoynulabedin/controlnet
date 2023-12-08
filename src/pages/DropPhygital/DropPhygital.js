import "./DropPhygital.scss";

import { Button, Popover, ConfigProvider } from "antd";
import { useEffect, useRef, useState } from "react";
import MenuContent from "../../assets/components/Menu/MenuContent";

const Card = ({ index, setHeight }) => {
  const ref = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        console.log(entry.contentRect.height);
        setHeight(entry.contentRect.height);
      }
    });

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        resizeObserver.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <img src={`/landing/Amigo LLM Use Case ${index + 1}.png`} />
      <div className="card-title">Amigo LLM Use Case {index + 1}</div>
      <div className="card-subtitle">Amigo LLM Use Cases</div>
    </div>
  );
};

const DropPhygital = () => {
  const numCards = 6;
  const [height, setHeight] = useState(0);

  return (
    <>
      <div className="flex justify-between w-full p-4">
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
      </div>
      <div className=" bg-none bg-transparent flex flex-col justify-center items-center text-start">
        <div>
          <div className="title mt-4">droppPhygital</div>
          <div className="subtitle mt-4">The Operating System for Web3</div>
          <div className=" flex justify-center mt-2">
            <button className="chat-redirect-btn">
              <div className="chat-redirect-btn-text flex justify-start p-2">
                <div>Lets Chat</div>
                <img src="/landing/arrow.png" />
              </div>
            </button>
          </div>

          <div className=" flex justify-center mt-4 gap-5">
            <div>
              <div className=" flex justify-center">
                <img src="/landing/3d Products.png" />
              </div>
              <div className="circle-btn-title">3d Products</div>
            </div>
            <div>
              <div>
                <div className=" flex justify-center">
                  <img src="/landing/Digital Humans.png" />
                </div>
                <div className="circle-btn-title">Digital Humans</div>
              </div>
            </div>
            <div>
              <div className=" flex justify-center">
                <img src="/landing/Microverse.png" />
              </div>
              <div className="circle-btn-title">Microverse</div>
            </div>
            <div>
              <div className=" flex justify-center">
                <img src="/landing/Shoptainment.png" />
              </div>
              <div className="circle-btn-title">Shoptainment</div>
            </div>
            <div>
              <div className=" flex justify-center">
                <img src="/landing/Smart contracts.png" />
              </div>
              <div className="circle-btn-title">Smart contracts</div>
            </div>
            <div>
              <div className=" flex justify-center">
                <img src="/landing/Websites.png" />
              </div>
              <div className="circle-btn-title">Websites</div>
            </div>
            <div>
              <div className=" flex justify-center">
                <img src="/landing/E-commerce.png" />
              </div>
              <div className="circle-btn-title">E-commerce</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {[...Array(numCards)].map((_, index) => (
              <Card key={index} index={index} setHeight={setHeight} />
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
            height: `250%`,
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source src="/product/background.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default DropPhygital;
