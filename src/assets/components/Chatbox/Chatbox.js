import "./Chatbox.scss";
import { Typography } from "@mui/material";

const Chatbox = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 pb-3 text-start" style={{ paddingLeft: "220px", paddingRight: "220px" }}>
                <div className="login-card">
                    <p className="login-card-text p-3">Unleash the power of Web3 with a cutting-edge platform that unleashes the power of Ai/ML.</p>
                </div>
                <div className="login-card">
                    <p className="login-card-text p-3">Unleash the power of Web3 with a cutting-edge platform that unleashes the power of Ai/ML.</p>
                </div>
                <div className="login-card">
                    <p className="login-card-text p-3">Unleash the power of Web3 with a cutting-edge platform that unleashes the power of Ai/ML.</p>
                </div>
                <div className="login-card">
                    <p className="login-card-text p-3">Unleash the power of Web3 with a cutting-edge platform that unleashes the power of Ai/ML.</p>
                </div>
            </div>
            <div className=" flex justify-center pb-10" style={{ paddingLeft: "80px", paddingRight: "80px" }}>
                <input placeholder="Ask me anything..." className="login-chatbox w-5/6 pl-7" />
                <button
                    id="myBtn"
                    className=" ml-[-65px] z-20"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                    <g clip-path="url(#clip0_328_240)">
                    <path d="M19.8449 13.4649C19.4623 12.6724 19.7796 12.3546 20.5834 12.7706L49.1301 27.5429C49.9204 27.9519 49.9192 28.6285 49.1608 29.0363L21.2273 44.0512C20.4538 44.4669 20.0935 44.1383 20.4201 43.323L25.6788 30.1977L41.5245 28.158L25.7415 25.6793L19.8449 13.4649Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_328_240">
                    <rect width="38.3434" height="38.3434" fill="white" transform="translate(28.3457 0.858887) rotate(45.7956)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    {/* <img src="/auth/arrow.png" /> */}
                </button>
            </div>
        </div>
    )
}

export default Chatbox;