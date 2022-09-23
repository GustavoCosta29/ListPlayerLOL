import "./Form.css";
import TextField from "../TextField";
import ListSuspend from "../ListSuspend";
import Button from "../Button";
import { useState } from "react";

const Form = (props) => {
  const save = (e) => {
    e.preventDefault();
    props.registerPlayer({
      name,
      office,
      image,
      lane,
    });
  };

  const [name, setName] = useState("");
  const [office, setOffice] = useState("");
  const [image, setImage] = useState("");
  const [lane, setLane] = useState("");

  return (
    <section onSubmit={save} className="form">
      <form>
        <h2>Fill in the form to create your player card</h2>
        <TextField
          value={name}
          handle={(name) => setName(name)}
          required={true}
          label="Name"
          placeholder="Enter your name here"
        />
        <TextField
          value={office}
          handle={(office) => setOffice(office)}
          required={true}
          label="Office"
          placeholder="Enter your position here"
        />
        <TextField
          value={image}
          handle={(image) => setImage(image)}
          label="Image"
          placeholder="provide the address of the image"
        />
        <ListSuspend
          value={lane}
          handle={(lane) => setLane(lane)}
          required={true}
          label="Lane"
          items={props.teams}
        />
        <Button>Create Card</Button>
      </form>
    </section>
  );
};

export default Form;
