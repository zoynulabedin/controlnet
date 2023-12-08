import { useState } from "react";
import GenerateModel from "../../assets/components/Modal/GenerateModel";
import DashboardCard from "../../assets/components/Card/DashboardCard";

import { Drawer } from "antd";
import "../../assets/css/dashboard.css";
import Notification from "../../assets/components/Notification/Notification";
import Profile from "../../assets/components/Profile/Profile";
import InfomationModal from "../../assets/components/Modal/InfomationModal";

const Dashboard = () => {
  const [modelOpen, setModelOpen] = useState(false);
  const [notiOpen, setNotiOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleChange = async (actionType) => {
    switch (actionType) {
      case "extended_reality":
        console.log("!!!");
        setModelOpen(true);
        break;
      default:
        break;
    }
  };

  const notiClose = () => {
    setNotiOpen(false);
  };

  const profileClose = () => {
    setProfileOpen(false);
  };

  return (
    <div
      className=" pt-[80px] pl-[120px] pr-[120px] pb-[80px]"
      style={{ height: "100vh" }}
    >
      <div className=" absolute top-3 right-3">
        <div>
          <button onClick={() => setNotiOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.0196 2.91016C8.7096 2.91016 6.0196 5.60016 6.0196 8.91016V11.8002C6.0196 12.4102 5.7596 13.3402 5.4496 13.8602L4.2996 15.7702C3.5896 16.9502 4.0796 18.2602 5.3796 18.7002C9.6896 20.1402 14.3396 20.1402 18.6496 18.7002C19.8596 18.3002 20.3896 16.8702 19.7296 15.7702L18.5796 13.8602C18.2796 13.3402 18.0196 12.4102 18.0196 11.8002V8.91016C18.0196 5.61016 15.3196 2.91016 12.0196 2.91016Z"
                stroke="#CECECE"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M13.8699 3.20043C13.5599 3.11043 13.2399 3.04043 12.9099 3.00043C11.9499 2.88043 11.0299 2.95043 10.1699 3.20043C10.4599 2.46043 11.1799 1.94043 12.0199 1.94043C12.8599 1.94043 13.5799 2.46043 13.8699 3.20043Z"
                stroke="#CECECE"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.0195 19.0596C15.0195 20.7096 13.6695 22.0596 12.0195 22.0596C11.1995 22.0596 10.4395 21.7196 9.89953 21.1796C9.35953 20.6396 9.01953 19.8796 9.01953 19.0596"
                stroke="#CECECE"
                stroke-width="1.5"
                stroke-miterlimit="10"
              />
            </svg>
          </button>
        </div>
        <div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                stroke="white"
                stroke-opacity="0.9"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.99902 12.8804V11.1204C1.99902 10.0804 2.84902 9.22043 3.89902 9.22043C5.70902 9.22043 6.44902 7.94042 5.53902 6.37042C5.01902 5.47042 5.32902 4.30042 6.23902 3.78042L7.96902 2.79042C8.75902 2.32042 9.77902 2.60042 10.249 3.39042L10.359 3.58042C11.259 5.15042 12.739 5.15042 13.649 3.58042L13.759 3.39042C14.229 2.60042 15.249 2.32042 16.039 2.79042L17.769 3.78042C18.679 4.30042 18.989 5.47042 18.469 6.37042C17.559 7.94042 18.299 9.22043 20.109 9.22043C21.149 9.22043 22.009 10.0704 22.009 11.1204V12.8804C22.009 13.9204 21.159 14.7804 20.109 14.7804C18.299 14.7804 17.559 16.0604 18.469 17.6304C18.989 18.5404 18.679 19.7004 17.769 20.2204L16.039 21.2104C15.249 21.6804 14.229 21.4004 13.759 20.6104L13.649 20.4204C12.749 18.8504 11.269 18.8504 10.359 20.4204L10.249 20.6104C9.77902 21.4004 8.75902 21.6804 7.96902 21.2104L6.23902 20.2204C5.32902 19.7004 5.01902 18.5304 5.53902 17.6304C6.44902 16.0604 5.70902 14.7804 3.89902 14.7804C2.84902 14.7804 1.99902 13.9204 1.99902 12.8804Z"
                stroke="white"
                stroke-opacity="0.9"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Notification Drawer */}
      <Drawer
        placement="right"
        onClose={notiClose}
        open={notiOpen}
        style={{ backgroundColor: "#141414", color: "red" }}
        width={"500"}
        closable={false}
      >
        <Notification setNotiOpen={setNotiOpen} />
      </Drawer>

      {/* Profile Drawer */}
      <Drawer
        placement="left"
        onClose={profileClose}
        open={profileOpen}
        style={{ backgroundColor: "#141414", color: "red" }}
        width={"500"}
        closable={false}
      >
        <Profile setProfileOpen={setProfileOpen} />
      </Drawer>

      <div className=" grid grid-cols-1 lg:grid-cols-2 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            {/* <DashboardCard /> */}
            <div className="p-2 flex flex-col gap-8" style={{ height: "50%" }}>
              <div className="flex justify-center">
                <div>
                  <img
                    src="/auth/logo.png"
                    style={{ width: "144px", height: "90px" }}
                  />
                </div>
              </div>
              <div
                className={`profile-card flex flex-col justify-around p-4 cursor-pointer flex-1`}
                onClick={() => setProfileOpen(true)}
              >
                <div className="min-[780px]:flex justify-center profile-card-title">
                  ControlNet
                </div>
                <div className=" flex justify-start gap-3">
                  <img src="/dashboard/avatar.png" />
                  <div className=" text-start">
                    <div className="profile-card-name">Ronnie Fieg</div>
                    <div className="profile-card-position">CEO</div>
                  </div>
                  <img
                    className=" mt-1"
                    src="/dashboard/verify.png"
                    style={{ width: "25px", height: "25px" }}
                  />
                </div>
                <div className="hidden min-[1530px]:flex mt-4">
                  <div className="profile-card-wallet ml-2 w-full flex flex-col justify-center gap-1">
                    <div className=" profile-card-wallet-title mt-2">
                      Wallet Balance
                    </div>
                    <div className=" profile-card-wallet-credit">
                      300 CREDITS
                    </div>
                  </div>
                </div>
                <div className="hidden min-[1530px]:flex mt-[-80px] ml-[0px]"><img src="/dashboard/drop_coin.png" /></div>
              </div>
            </div>
            <DashboardCard
              className="knowledge-hub"
              title={"Microverse"}
              subTitle={"Text-to-Metaverse"}
              logo={"/auth/logo.png"}
              viewAssets={"1"}
              handleClick={() => handleChange("hub")}
              plusLink={""}
            />
          </div>
          <div>
            <DashboardCard
              className="shoptainment-video"
              title={"Shopatainment"}
              subTitle={"Text-to-Interative Video"}
              handleClick={() => handleChange("shoptainment_video")}
              plusLink={""}
            />
            <DashboardCard
              className="extended-reality"
              title={"Extended Reality"}
              subTitle={"Text-to-3D"}
              handleClick={() => handleChange("extended_reality")}
              plusLink={""}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <DashboardCard
              className="smart-contracts"
              title={"Tokenize"}
              subTitle={"Text-to-Smart Contract"}
              handleClick={() => handleChange("smart_contract")}
              plusLink={""}
            />
            <DashboardCard
              className="website"
              title={"Website Builder"}
              subTitle={"Text-to-Website"}
              handleClick={() => handleChange("website")}
              plusLink={""}
            />
          </div>
          <div>
            <DashboardCard
              className="ecommerce"
              height={"40%"}
              title={"eCommerce"}
              subTitle={"Text-to-Shop"}
              handleClick={() => handleChange("ecommerce")}
              plusLink={""}
            />
            <DashboardCard
              className="hangout"
              height={"60%"}
              title={"Hangout At The Lab"}
              subTitle={"Click to Explore"}
              handleClick={() => handleChange("hangout")}
              plusLink={"https://dropplabs-a06482916aca.herokuapp.com/"}
            />
          </div>
        </div>
      </div>
      {/* <button onClick={() => handleChange("extended_reality")} className=" text-white">Generate Reality</button> */}
      <GenerateModel open={modelOpen} setOpen={setModelOpen} />
      {/* <InfomationModal infomationOpen={modelOpen} setInfomationOpen={setModelOpen} /> */}
    </div>
  );
};

export default Dashboard;
