import "./ListSuspend.css";

const ListSuspend = (props) => {
  return (
    <div className="listsuspend">
      <label>{props.label}</label>
      <select>
        {props.items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListSuspend;
