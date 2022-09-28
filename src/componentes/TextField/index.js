import "./TextField.css";

const TextField = (props) => {
  const handleChange = (e) => {
    props.handle(e.target.value);
  };

  return (
    <div className="textfield">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={handleChange}
        required={props.required}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextField;
