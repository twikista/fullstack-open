import { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
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

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => setPersons(response.data));
  }, []);

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
