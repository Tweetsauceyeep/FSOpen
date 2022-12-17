import {useState} from 'react';

const App = () => {
  const [persons, setPersons] = useState([{name: 'Arto Hellas'}]);
  const [newName, setNewName] = useState('');

  const addPerson = event => {
    event.preventDefault();
    const person = {
      name: newName,
    };
    if (persons.includes(person)) {
      alert(`${person.name} is already in the list`);
      console.log("nah breh already in it")
      setNewName('');
    } else {
      console.log("penis")
      setPersons(persons.concat(person));
      setNewName('');
    }
  };

  const handlePersonChange = event => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <div>debug: {newName}</div>

      <h2>Phonebook</h2>
      <form onChange={handlePersonChange} onSubmit={addPerson}>
        <div>
          name: <input value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => (
          <div>{person.name}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
