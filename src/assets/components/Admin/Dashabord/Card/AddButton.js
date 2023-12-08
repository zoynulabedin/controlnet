import "./CardModal.scss";

const AddButton = () => {
  return (
    <button className="add-button flex-none">
      <div className=" flex justify-center items-center gap-2 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22Z"
            fill="black"
            fill-opacity="0.1"
          />
          <path
            d="M11.002 6.41589V15.5826"
            stroke="black"
            stroke-width="1.75"
            stroke-linecap="round"
          />
          <path
            d="M15.4492 10.9993H6.54495"
            stroke="black"
            stroke-width="1.75"
            stroke-linecap="round"
          />
        </svg>
        <span className="add-button-text">Add</span>
      </div>
    </button>
  );
};

export default AddButton;
