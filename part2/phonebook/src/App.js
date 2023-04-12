import { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import personService from "./services/persons";

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

    const personExists = persons.find((i) => i.name === newName);
    if (personExists) {
      const { id, name } = personExists;
      const confirm = window.confirm(
        `${name} is already added to phonebook, replace the old number with a new one?`
      );
      if (confirm) {
        const updatedPerson = { ...personExists, number: newNumber };
        personService.update(id, updatedPerson).then((returnedPerson) => {
          setPersons(persons.map((i) => (i.id !== id ? i : returnedPerson)));
          setNewName("");
          setNewNumber("");
        });
        return;
      }
    }

    const newPerson = {
      name: newName,
      number: newNumber,
    };
    personService.create(newPerson).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
    });
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
    personService.getAll().then((allPersons) => setPersons(allPersons));
  }, []);

  const deleteHandler = (id) => {
    const personToRemove = persons.find((i) => i.id === id);
    const confirm = window.confirm(`Delete ${personToRemove.name}?`);
    if (confirm) {
      personService.remove(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
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
      <Persons
        persons={persons}
        searchQuery={searchQuery}
        deleteHandler={deleteHandler}
      />
    </div>
  );
};

export default App;
