import "./Player.css";

const Player = (props) => {
  return (
    <div className="player">
      <div className="header">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="footer">
        <h4>{props.name}</h4>
        <h5>{props.office}</h5>
      </div>
    </div>
  );
};

export default Player;
