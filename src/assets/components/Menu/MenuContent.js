import { Link } from "react-router-dom";

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

const MenuContent = () => {
  return (
    <div className=" text-white p-3 w-[350px]">
      <div className=" flex justify-start gap-2 items-center">
        <div>
          <img src="/avatar/product/user.png" width={"53px"} />
        </div>
        <div>
          <div className=" flex justify-start gap-1 items-center">
            <div className="menu-name">Jose Rodriguez</div>
            <div>
              <img src="/dashboard/verify.png" />
            </div>
          </div>
          <div className="menu-role">Business Expert</div>
        </div>
      </div>
      <Divider />
      <div className=" flex justify-start items-center gap-2">
        <div>
          <img src="/dashboard/drop_coin.png" width={"45px"} />
        </div>
        <div>
          <div className="menu-wallet-text">Wallet Balance</div>
          <div className="menu-wallet-credit">300 CREDITS</div>
        </div>
      </div>
      <Divider />
      <div className=" flex flex-col gap-3">
        <div className="menu-step">Pages</div>
        <div>
          <Link to={"/model/"} className="menu-text">
            Home
          </Link>
        </div>
        <div>
          <Link className="menu-text">About Us</Link>
        </div>
        <div>
          <Link className="menu-text">Contact Us</Link>
        </div>
      </div>
      <Divider />
      <div className=" flex flex-col gap-3">
        <div className="menu-step">Previous chats</div>
        <div className=" flex justify-start items-center gap-2">
          <img src="/product/menu-icon.png" />
          <Link to={"/model/"} className="menu-text">
            The Byzantine Empire: A Legacy...
          </Link>
        </div>
        <div className=" flex justify-start items-center gap-2">
          <img src="/product/menu-icon.png" />
          <Link className="menu-text">Simple greeting</Link>
        </div>
      </div>
    </div>
  );
};

export default MenuContent;
