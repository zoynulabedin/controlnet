import { Link, useLocation } from "react-router-dom";
import { menu } from "./helper";
import "./navbar.scss";
import Button from "./components/Button";

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className=" flex justify-start pl-4 pr-4 pt-4 items-center gap-7">
      <img src="/auth/logo.png" />
      <div className="navbar-btn-list">
        {menu.map((item) => (
          <Link to={item.url}>
            <Button
              title={item.title}
              svgUrl={item.img}
              addClass={
                location.pathname.includes(item.key) ? "navbar-btn-active" : ""
              }
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
