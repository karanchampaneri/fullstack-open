import { useState } from "react";

const App = () => {
  // const [persons, setPersons] = useState([
  //   { name: "Arto Hellas", number: "040 - 1234567" },
  // ]);

  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState(""); // for form input element
  const [newNum, setNewNum] = useState("");

  const [searchFilter, setFilter] = useState("");
  // const [show, setShow] = useState(true);

  const addPerson = (event) => {
    event.preventDefault(); //prevent screenrefresh
    const personObject = {
      //create new person object
      name: newName,
      number: newNum,
    };

    // call function to check if personObject Exists in list.
    if (checkDuplicates(personObject)) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      return; // Don't add it
    }
    setPersons(persons.concat(personObject)); //add to list
    setNewName(""); //reset input field
    setNewNum("");
  };

  const checkDuplicates = (newPerson) => {
    return persons.some((person) => person.name === newPerson.name);
    //  The some() method of Array instances returns true if it finds
    //  an element in the array that satisfies the provided
    //  testing function. Otherwise, it returns false.
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value); //update input state with each key input
  };

  const handleNumChange = (event) => {
    console.log(event.target.value);
    setNewNum(event.target.value);
  };

  const handleSearchChange = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  };

  const results = persons.filter((person) =>
    person.name.toLowerCase().includes(searchFilter.toLowerCase()),
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          search:{" "}
          <input value={searchFilter} onChange={handleSearchChange}></input>
        </div>
      </form>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNum} onChange={handleNumChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {results.map((person) => (
          <div key={person.number}>
            {person.name} - {person.number}
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default App;
