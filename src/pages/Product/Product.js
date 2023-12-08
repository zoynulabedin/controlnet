
import MenuContent from "../../assets/components/Menu/MenuContent";
import ProductSubmission from "../../assets/components/Modal/ProductSubmission";
import "./Product.scss";

import { Button, Popover, ConfigProvider } from "antd";

export const Divider = () => (
  <div
    style={{
      borderTop: "1px solid #ffffff26",
      width: "100%",
      marginBottom: "16px",
      marginTop: "16px",
    }}
  />
);

const Product = () => {
  return (
    <>
      <section className=" absolute flex justify-between w-full p-4">
        <img src="/auth/logo.png" />
        <div className=" flex justify-center items-center gap-2">
          <div>
            <button className="header-plus p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 10V20"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 15H20"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <Popover
            placement="bottomRight"
            content={<MenuContent />}
            colorBgElevated={"#ffffff"}
            overlayClassName="black-background-popover"
          >
            <button className="header-plus p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M4.16699 15H25.8337"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.16699 7.77832H25.8337"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.16699 22.2227H25.8337"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </Popover>
        </div>
      </section>
      <div className=" bg-none bg-transparent h-screen flex flex-col justify-center items-center text-start">
        <div>
          <ProductSubmission />
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
      </div>
    </>
  );
};

export default Product;
