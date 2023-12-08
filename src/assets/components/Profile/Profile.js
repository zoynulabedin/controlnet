import { Divider, Progress } from "antd";
import "./Profile.scss";
import Button from "../Button/Button";

const Profile = ({ setProfileOpen }) => {

    const cashout = () => {

    }

    return (
        <div>
            <div className="flex justify-center p-2 gap-3">
                <div className=" flex-none">
                    <img src="/dashboard/avatar.png" style={{ borderRadius: "50%" }} />
                </div>
                <div className=" flex-1">
                    <div className=" flex flex-col">
                        <div className=" flex justify-start">
                            <div className="notification-title">Notification</div>
                        </div>
                        <div className="notification-content">Project Manager</div>
                        <div className="profile-mail">ronniefieg@ministryofculture.sa</div>
                    </div>
                </div>
                <div className=" absolute top-6 right-6 cursor-pointer" onClick={() => setProfileOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <g opacity="0.15" filter="url(#filter0_b_366_697)">
                            <circle cx="16" cy="16" r="16" fill="white"/>
                        </g>
                        <path d="M20.4802 12.1602L12.1602 20.4802" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        <path d="M20.4805 20.4802L12.1605 12.1602" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        <defs>
                            <filter id="filter0_b_366_697" x="-4" y="-4" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_366_697"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_366_697" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
            <Divider style={{ backgroundColor: "#ffffff33" }} />
            <div className="flex justify-center gap-3">
                <div className=" flex-none">
                    <img src="/dashboard/black.png" style={{ borderRadius: "10px" }} />
                </div>
                <div className=" flex-1">
                    <div className=" flex flex-col">
                        <div className=" flex justify-start">
                            <p className="product-name">Jacket 3d Model</p>
                        </div>
                        <Progress percent={50} showInfo={false} strokeColor={"#ffffffe6"} trailColor={"#ffffff4d"} />
                        <p className="product-status">About 2 hour left</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-3">
                <div className=" flex-none">
                    <img src="/dashboard/black.png" style={{ borderRadius: "10px" }} />
                </div>
                <div className=" flex-1">
                    <div className=" flex flex-col">
                        <div className=" flex justify-start">
                            <p className="product-name">Digital Twin Avatar</p>
                        </div>
                        <Progress percent={0} showInfo={false} strokeColor={"#ffffffe6"} trailColor={"#ffffff4d"} />
                        <p className="product-status">Waiting</p>
                    </div>
                </div>
            </div>
            <Divider style={{ backgroundColor: "#ffffff33" }} />
            <div className="flex justify-center gap-3">
                <div className=" flex-none">
                    <img src="/dashboard/avatar.png" style={{ borderRadius: "10px" }} />
                </div>
                <div className=" flex-1">
                    <div className=" flex flex-col gap-2">
                        <div className=" flex justify-start">
                            <p className="product-name">Wallet Balance</p>
                        </div>
                        <p className="product-status"><span className="product-name mr-1">300</span>Credits</p>
                    </div>
                </div>
            </div>
            <Button title={"Cashout or Redeem"} change={cashout} className={" text-[20px] text-black"} />
            <div className=" flex justify-start gap-2 p-3 items-center mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10" stroke="#B8B8B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z" stroke="#B8B8B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.9965 16H16.0054" stroke="#B8B8B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.9955 16H12.0045" stroke="#B8B8B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.99451 16H8.00349" stroke="#B8B8B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className="profile-setting-text">Change Password</span>
            </div>
            <div className=" flex justify-start gap-2 p-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12.1596 10.87C12.0596 10.86 11.9396 10.86 11.8296 10.87C9.44957 10.79 7.55957 8.84 7.55957 6.44C7.55957 3.99 9.53957 2 11.9996 2C14.4496 2 16.4396 3.99 16.4396 6.44C16.4296 8.84 14.5396 10.79 12.1596 10.87Z" stroke="white" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.15973 14.56C4.73973 16.18 4.73973 18.82 7.15973 20.43C9.90973 22.27 14.4197 22.27 17.1697 20.43C19.5897 18.81 19.5897 16.17 17.1697 14.56C14.4297 12.73 9.91973 12.73 7.15973 14.56Z" stroke="white" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
                <span className="profile-setting-text">Account Settings</span>
            </div>
            <div className=" flex justify-start gap-2 p-3 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12.0196 2.91016C8.7096 2.91016 6.0196 5.60016 6.0196 8.91016V11.8002C6.0196 12.4102 5.7596 13.3402 5.4496 13.8602L4.2996 15.7702C3.5896 16.9502 4.0796 18.2602 5.3796 18.7002C9.6896 20.1402 14.3396 20.1402 18.6496 18.7002C19.8596 18.3002 20.3896 16.8702 19.7296 15.7702L18.5796 13.8602C18.2796 13.3402 18.0196 12.4102 18.0196 11.8002V8.91016C18.0196 5.61016 15.3196 2.91016 12.0196 2.91016Z" stroke="#CECECE" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                    <path d="M13.8699 3.20043C13.5599 3.11043 13.2399 3.04043 12.9099 3.00043C11.9499 2.88043 11.0299 2.95043 10.1699 3.20043C10.4599 2.46043 11.1799 1.94043 12.0199 1.94043C12.8599 1.94043 13.5799 2.46043 13.8699 3.20043Z" stroke="#CECECE" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.0195 19.0596C15.0195 20.7096 13.6695 22.0596 12.0195 22.0596C11.1995 22.0596 10.4395 21.7196 9.89953 21.1796C9.35953 20.6396 9.01953 19.8796 9.01953 19.0596" stroke="#CECECE" stroke-width="1.5" stroke-miterlimit="10"/>
                </svg>
                <span className="profile-setting-text">Notification Settings</span>
            </div>
            <div className=" flex justify-start gap-2 p-3 items-center text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15.0996 16.44C14.7896 20.04 12.9396 21.51 8.88961 21.51L8.75961 21.51C4.28961 21.51 2.49961 19.72 2.49961 15.25L2.49961 8.73998C2.49961 4.26998 4.28961 2.47998 8.75961 2.47998L8.88961 2.47998C12.9096 2.47998 14.7596 3.92998 15.0896 7.46998" stroke="#FF3432" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.99988 12L20.3799 12" stroke="#FF3432" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.15 15.3499L21.5 11.9999L18.15 8.6499" stroke="#FF3432" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className="profile-setting-text" style={{ color: "#FF3432" }}>Log out</span>
            </div>
        </div>
    )
}

export default Profile;