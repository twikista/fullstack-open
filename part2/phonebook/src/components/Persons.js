import Person from "./Person";

const Persons = ({ persons, searchQuery, deleteHandler }) => {
  console.log(persons);
  return (
    <div>
      {persons.length ? (
        persons
          .filter((person) =>
            person.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((person) => (
            <Person
              key={person.id}
              person={person}
              deleteHandler={() => deleteHandler(person.id)}
            />
          ))
      ) : (
        <p>No persons in phonebook</p>
      )}
    </div>
  );
};

export default Persons;
