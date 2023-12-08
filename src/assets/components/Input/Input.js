import "./Input.scss";

const Input = ({ title, width = "100%", placeholder, name, change, defaultValue, type, value}) => {
  return (
    <div style={{ width: { width }, paddingTop: "10px", textAlign: "left", color: "white" }}>
      <div className="input-title">{title}</div>
      <div style={{ marginTop: "15px" }}>
        <input
          className="input-content"
          placeholder={placeholder}
          name={name}
          type={type}
          onChange={change}
          defaultValue={defaultValue}
          value={value}
        />
      </div>
    </div>
  );
};

export default Input;
