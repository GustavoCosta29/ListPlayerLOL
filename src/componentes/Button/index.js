import "./Button.css";

const Button = (props) => {
  return (
    <button className="button" required={props.required}>
      {props.children}
    </button>
  );
};

export default Button;
