
import { Typography } from "@mui/material";
import "./DashboardCard.scss";
import { isEmpty } from "../../../utility/isEmpty";

const DashboardCard = ({ className = "shoptainment-video", title = "Shoptainment Video", subTitle = "Generative", height = "50%", backgroundImage, logo, viewAssets, handleClick, plusLink }) => {
    return (
        <div className="p-2" style={{ height: height }}>
            <div className={`${className} h-full flex flex-col justify-between cursor-pointer`} style={{ backgroundImage: backgroundImage }} onClick={() => handleClick()}>
                <div className=" flex justify-between items-start">
                    <div>
                        <div className=" hidden md:flex">
                            <img src={logo} className=" m-6"  />
                        </div>
                    </div>
                    {
                       !isEmpty(plusLink)?<a className="plus-circle cursor-pointer" target="_blank" href={plusLink}>
                       <img src="/dashboard/plus-circle.png" className="plus-circle-responsive" style={{ width: "46px" }}></img>
                        </a>:<div className="plus-circle cursor-pointer" target="_blank">
                        <img src="/dashboard/plus-circle.png" className="plus-circle-responsive" style={{ width: "46px" }}></img>
                    </div>
                    }
                    {/* <a className="plus-circle cursor-pointer" target="_blank" href={"#"}>
                        <img src="/dashboard/plus-circle.png" className="plus-circle-responsive" style={{ width: "46px" }}></img>
                    </a> */}
                </div>

                <div className=" text-start pl-4 pb-4">
                  <div className="card-title"> {title} </div>
                  <div className="card-subtitle">
                    <div className=" flex items-center">
                        {subTitle}
                        {viewAssets === "1"?
                        <>
                         <button className=" ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                                <g filter="url(#filter0_b_328_407)">
                                <circle cx="19" cy="19" r="19" fill="white" fill-opacity="0.1"/>
                                <circle cx="19" cy="19" r="18.6" stroke="white" stroke-width="0.8"/>
                                </g>
                                <path d="M20.561 13.5713L19.5085 14.6648L22.9272 18.2243H10.8574V19.7754H22.9272L19.5011 23.335L20.561 24.4284L25.786 18.9999L20.561 13.5713Z" fill="white"/>
                                <defs>
                                <filter id="filter0_b_328_407" x="-20" y="-20" width="78" height="78" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="10"/>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_328_407"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_328_407" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                         </button>
                        </>:<></> }
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardCard;