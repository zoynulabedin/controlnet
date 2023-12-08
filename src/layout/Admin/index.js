import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const Admin = () => {
    return (
        <div className=" w-full">
            <Navbar />
            <div className=" pl-4 pr-4 w-full">
                <Outlet />
            </div>
        </div>
    )
}

export default Admin;