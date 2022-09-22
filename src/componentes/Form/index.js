import "./Form.css";
import TextField from "../TextField";
import ListSuspend from "../ListSuspend";
import Button from "../Button";

const Form = () => {
  const save = (e) => {
    e.preventDefault();
    alert("Form saved successfully");
  };

  return (
    <section onSubmit={save} className="form">
      <form>
        <h2>Fill in the form to create your player card</h2>
        <TextField
          required={true}
          label="Name"
          placeholder="Enter your name here"
        />
        <TextField
          required={true}
          label="Office"
          placeholder="Enter your position here"
        />
        <TextField
          label="Image"
          placeholder="provide the address of the image"
        />
        <ListSuspend
          required={true}
          label="Lane"
          items={["ADC", "Top", "Jungle", "Suporte", "Mid"]}
        />
        <Button>Create Card</Button>
      </form>
    </section>
  );
};

export default Form;
