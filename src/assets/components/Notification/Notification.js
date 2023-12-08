import "./Notification.scss";
import { Divider } from "antd";

const Notification = ({ setNotiOpen }) => {
    return (
        <div>
            <div className="flex justify-center">
                <div className=" flex-1 p-2">
                    <div className=" flex flex-col">
                        <div className=" flex justify-start">
                            <div className="notification-drawer-title">Notification</div>
                        </div>
                    </div>
                </div>
                <div className=" absolute top-6 right-6 cursor-pointer" onClick={() => setNotiOpen(false)}>
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
            <div className="flex justify-center notification p-3 gap-3">
                <div className=" flex-none ">
                    <div className=" flex flex-col justify-center">
                        <img src="/dashboard/black.png" />
                    </div>
                </div>
                <div className=" flex-1">
                    <div className=" flex flex-col">
                        <div className=" flex justify-between">
                            <p className="notification-title">Notification</p>
                            <p className="notification-time">12-10-2023</p>
                        </div>
                        <div className="notification-content">Success! your 3D Asset is ready and sent to your hub. Visit My Hub</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification;