import Person from "./Person";

const Persons = ({ persons, searchQuery }) => {
  console.log(persons);
  return (
    <div>
      {persons.length ? (
        persons
          .filter((person) => person.name.toLowerCase().includes(searchQuery))
          .map((person) => <Person key={person.id} person={person} />)
      ) : (
        <p>No persons in phonebook</p>
      )}
    </div>
  );
};

export default Persons;
