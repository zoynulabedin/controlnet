import "./TextArea.scss";

const TextArea = ({ title, width = "100%", placeholder, name, change, defaultValue, type, value}) => {

  const onChange = (e) => {
    change(name, e.target.value);
  }

  return (
    <div style={{ width: { width }, paddingTop: "10px", textAlign: "left", color: "white" }}>
      <div className="textarea-title">{title}</div>
      <div style={{ marginTop: "15px" }}>
        <textarea
          className="textarea-content"
          placeholder={placeholder}
          name={name}
          type={type}
          onChange={(e) => onChange(e)}
        // defaultValue={defaultValue}
          value={value}
          style={{ height: "200px" }}
        />
      </div>
    </div>
  );
};

export default TextArea;
