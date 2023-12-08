import { useState } from "react";

import "../../App.css";
import "../../assets/css/auth.css";
import "../../assets/components/Modal/GenerateModel.scss";
import Button from "../../assets/components/Button/Button";
import Input from "../../assets/components/Input/Input";

import { Typography, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Checkbox from '@mui/material/Checkbox';

import { Divider } from "antd";
import { signin } from "../../redux/actions/AuthActions";
import { Link } from "react-router-dom";

const SignInPage = () => {

  const [open, setOpen] = useState(false);
  const [user_info, setUserInfo] = useState({});

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }; 

  const inputChanges = (e) => {
    let key = e.target.name;
    let value = e.target.value;

    console.log(key);
    console.log(value);

    setUserInfo({...user_info, [key]: value});
  }

  const login = async (e) => {
    console.log(user_info);
    try{
       let user = await signin(user_info);
       console.log(user);
    }catch(err){
        console.log(err);
    }
  }

  return (
    <>
      <div className=" text-black">
        {/* <div className=" p-4">
          <img src="/auth/logo.png" style={{ display: "flex" }} className="logo-responsive "></img>
        </div> */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ height: "100vh" }}>
            <div style={{ backgroundImage: "url(/auth/man.png)", backgroundSize: "contain", backgroundPosition: "bottom center", backgroundRepeat: "no-repeat" }} className="text-white flex flex-col justify-between">
              {/* <img src="/auth/man.png" className=" object-contain" style={{ maxHeight: 'calc(100vh - 138px)'}}></img> */}
                <div className=" p-5">
                  <img src="/auth/logo.png" className="logo-responsive "></img>
                </div>
            </div>
            <div className="flex flex-col text-start gap-x-10 justify-end">
              <div className=" flex justify-start ml-2 mb-20">
                <div className=" login-wrapper gap-10">
                  <p className="login-title">
                      Welcome To droppPhygital...
                  </p>
                  <p className="login-description pt-10">
                    Unleash the power of Web3 with a cutting-edge platform that unleashes the power of Ai/ML automation delivering an immersive experience like never before.
                  </p>
                  <Input title={"Email Address"} placeholder={"r@kith.com"} name={"email"} change={inputChanges} defaultValue={""} type={"text"} />
                  <Input title={"Password"} placeholder={"*******"} name={"password"} change={inputChanges} defaultValue={""} type={"password"} />
                  <Button title={"Sign In"} change={login} className={"mt-10 text-[20px]"} />
                  <p className="not-have-account pt-5 gap-3">
                    <span>Don't have an account?</span>
                    <Link to={"/signUp"}>
                      <a onClick={() => setOpen(true)} className="to-sign-up cursor-pointer ml-2">Sign Up</a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignInPage;