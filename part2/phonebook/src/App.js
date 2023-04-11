import { useState } from "react";
import PersonForm from "./PersonForm";
import Filter from "./Filter";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);
  console.log(persons);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!newName) return;
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const newperson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    setPersons(persons.concat(newperson));
    setNewName("");
    setNewNumber("");
  };
  const nameHandler = (e) => {
    setNewName(e.target.value);
  };
  const phoneNumberHandler = (e) => {
    setNewNumber(e.target.value);
  };

  const searchHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchHandler={searchHandler} searchQuery={searchQuery} />

      <h3>Add a new person</h3>
      <PersonForm
        submitHandler={submitHandler}
        nameHandler={nameHandler}
        newName={newName}
        phoneNumberHandler={phoneNumberHandler}
        newNumber={newNumber}
      />

      <h3>Numbers</h3>
      <Persons persons={persons} searchQuery={searchQuery} />
    </div>
  );
};

export default App;
