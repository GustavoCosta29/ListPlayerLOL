import Banner from "./componentes/Banner";
import Form from "./componentes/Form";
import { useState } from "react";

function App() {
  const [registeredPlayers, setRegisteredPlayer] = useState([]);

  const addRegisteredPlayer = (player) => {
    setRegisteredPlayer([...registeredPlayers, player]);
    console.log(player);
  };

  return (
    <div className="App">
      <Banner />
      <Form registerPlayer={(player) => addRegisteredPlayer(player)} />
    </div>
  );
}

export default App;
