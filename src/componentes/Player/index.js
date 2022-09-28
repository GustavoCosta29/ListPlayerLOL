import "./Player.css";

const Player = (props, backgroundColorPrimary) => {
  return (
    <div className="player">
      <div className="header" style={{ backgroundColor: props.colorPrimary }}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className="footerPlayer">
        <h4>{props.name}</h4>
        <h5>{props.office}</h5>
      </div>
    </div>
  );
};

export default Player;
