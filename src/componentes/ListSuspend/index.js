import "./ListSuspend.css";

const ListSuspend = (props) => {
  return (
    <div className="listsuspend">
      <label>{props.label}</label>
      <select
        onChange={(e) => props.handle(e.target.value)}
        value={props.value}
        required={props.required}
      >
        {props.items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListSuspend;
