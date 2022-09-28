import Banner from "./componentes/Banner";
import Form from "./componentes/Form";
import { useState } from "react";
import Team from "./componentes/Team";
import Footer from "./componentes/Footer";

function App() {
  const [registeredPlayers, setRegisteredPlayer] = useState([]);

  const addRegisteredPlayer = (player) => {
    setRegisteredPlayer([...registeredPlayers, player]);
  };

  const teams = [
    {
      name: "Adc",
      colorPrimary: "#82CFFA",
      colorSecondary: "#E8F8FF",
    },
    {
      name: "Suporte",
      colorPrimary: "#A6D157",
      colorSecondary: "#F0F8E2",
    },
    {
      name: "Jungle",
      colorPrimary: "#D86EBF",
      colorSecondary: "#FAE9F5",
    },
    {
      name: "Mid",
      colorPrimary: "#FEBA05",
      colorSecondary: "#FFF5D9",
    },
    {
      name: "Top",
      colorPrimary: "#FF8A29",
      colorSecondary: "#FFEEDF",
    },
  ];

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map((team) => team.name)}
        registerPlayer={(player) => addRegisteredPlayer(player)}
      />
      {teams.map((team) => (
        <Team
          key={team.name}
          name={team.name}
          colorPrimary={team.colorPrimary}
          colorSecondary={team.colorSecondary}
          registeredPlayers={registeredPlayers.filter(
            (player) => player.lane === team.name
          )}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
