import { useState } from "react";
import "./Select.scss";

const Select = ({ title, width = "100%", name, value, options, change }) => {
  //   const [state, setState] = useState('select');

  const onChange = (e) => {
    // console.log(e.target.value);
    // setState(e.target.value);
    change(name, e.target.value);
  };
  return (
    <div className="select" style={{ width: { width } }}>
      <div className="select-title">{title}</div>
      <select
        value={value}
        onChange={(e) => onChange(e)}
        className="select-content"
      >
        <option value={"none"} className="select-option" key={"none"}>
          Select Item
        </option>
        {options.map((option) => (
          <option
            value={option.value}
            className="select-option"
            key={option.value}
          >
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
