import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState(""); // for form input element

  const addPerson = (event) => {
    event.preventDefault(); //prevent screenrefresh
    const personObject = {
      //create new person object
      name: newName,
    };

    // call function to check if personObject Exists in list.
    if (checkDuplicates(personObject)) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      return; // Don't add it
    }
    setPersons(persons.concat(personObject)); //add to list
    setNewName(""); //reset input field
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <div key={persons.indexOf(person)}>{person.name}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
