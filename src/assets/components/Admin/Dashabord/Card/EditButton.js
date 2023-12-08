import "./CardModal.scss";

const EditButton = () => {
  return (
    <button className="edit-button">
      <div className=" flex justify-center items-center gap-2 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <g clip-path="url(#clip0_374_7111)">
            <path
              d="M8.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V9.75"
              stroke="#69CD66"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.0304 2.26495L6.1204 8.17495C5.8954 8.39995 5.6704 8.84245 5.6254 9.16495L5.3029 11.4224C5.1829 12.2399 5.7604 12.8099 6.5779 12.6974L8.8354 12.3749C9.1504 12.3299 9.5929 12.1049 9.8254 11.8799L15.7354 5.96995C16.7554 4.94995 17.2354 3.76495 15.7354 2.26495C14.2354 0.764945 13.0504 1.24495 12.0304 2.26495Z"
              stroke="#69CD66"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.1816 3.11255C11.4303 3.99565 11.9016 4.8001 12.5504 5.44883C13.1991 6.09757 14.0035 6.56885 14.8866 6.81755"
              stroke="#69CD66"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_374_7111">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span className=" text-[#69cd66]">Edit</span>
      </div>
    </button>
  );
};

export default EditButton;
