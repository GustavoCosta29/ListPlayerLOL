import Player from "../Player";
import "./Team.css";

const Team = (props) => {
  return (
    props.registeredPlayers.length > 0 && (
      <section
        className="team"
        style={{ backgroundColor: props.colorSecondary }}
      >
        <h3 style={{ borderColor: props.colorPrimary }}>{props.name}</h3>
        <div className="registeredPlayer">
          {props.registeredPlayers.map((registeredPlayer) => (
            <div>
              <Player
                key={registeredPlayer.name}
                name={registeredPlayer.name}
                office={registeredPlayer.office}
                image={registeredPlayer.image}
              />
            </div>
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
