import { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import personService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const createPerson = (newPerson) => {
    const { name, number } = newPerson;
    if (!name) return;

    const personExists = persons.find((i) => i.name === name);
    if (personExists) {
      const { id, name } = personExists;
      const confirm = window.confirm(
        `${name} is already added to phonebook, replace the old number with a new one?`
      );
      if (confirm) {
        const updatedPerson = { ...personExists, number: number };
        personService
          .update(id, updatedPerson)
          .then((returnedPerson) => {
            setPersons(persons.map((i) => (i.id !== id ? i : returnedPerson)));
            setSuccessMessage(`${returnedPerson.name} updated`);
            setTimeout(() => setSuccessMessage(null), 5000);
          })
          .catch((error) => {
            setErrorMessage(
              `information of ${updatedPerson.name} has already been removed from server`
            );
            setTimeout(() => setErrorMessage(null), 5000);
            setPersons(persons.filter((i) => i.id !== id));
          });

        return;
      }
    }

    personService.create(newPerson).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setSuccessMessage(`${newPerson.name} added`);
      setTimeout(() => setSuccessMessage(null), 5000);
    });
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
      <Notification
        message={successMessage ? successMessage : errorMessage}
        type={successMessage ? "success" : "error"}
      />
      <Filter setQuery={setSearchQuery} searchQuery={searchQuery} />

      <h3>Add a new person</h3>
      <PersonForm createPerson={createPerson} />
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
