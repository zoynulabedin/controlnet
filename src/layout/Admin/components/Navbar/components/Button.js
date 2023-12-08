const Button = ({ title, svgUrl, onclick, addClass }) => {
    return (
      <div className="max-lg:w-full">
        <button
          className={`navbar-btn ${addClass} `}
          onClick={onclick}
          style={{ width: "100%" }}
        >
          <div className=" flex justify-center items-center gap-[10px]">
            <img
              className="max-w-full overflow-hidden max-h-full"
              alt=""
              src={svgUrl}
            />
            <span
              style={{
                fontSize: 16,
                fontFamily: "Inter",
                fontWeight: "400",
                // color: "#ffffff99",
                top: "46px",
              }}
            >
              {title}
            </span>
          </div>
        </button>
      </div>
    );
  };
  
  export default Button;
  