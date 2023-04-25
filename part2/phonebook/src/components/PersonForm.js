import { useState } from "react";

const PersonForm = ({ createPerson }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const newPerson = { name, number };
    console.log(newPerson);
    createPerson(newPerson);
    setName("");
    setNumber("");
  };
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  return (
    <form onSubmit={submitHandler}>
      <div>
        number:
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Enter name"
          name="name"
        />
      </div>
      <div>
        name:{" "}
        <input
          type="text"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
          placeholder="Enter phone number"
          name="phonenumber"
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
