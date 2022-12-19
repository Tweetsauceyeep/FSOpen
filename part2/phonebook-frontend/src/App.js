import {useState, useEffect} from 'react';
import PersonForm from './components/PersonForm';
import NumbersList from './components/NumbersList';
import axios from 'axios'

// remember to never define components in other components
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response.data)
        setPersons(response.data)
      })
  },[])

  //check if object exists in the array
  //nah this shit dont work TODO
  //const handleObjCheck = (array, personObj) => {
  //  console.log('test');
  //};

  // handle the value of input form
  const handlePersonChange = event => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleSearchChange = event => {
    console.log(search);
    setSearch(event.target.value);
  };

  // handles pushing value of form into the array
  const addPerson = event => {
    event.preventDefault();
    console.log(persons.length);
    const person = {
      name: newName,
      id: persons.length + 1,
      number: newNumber,
    };
    setPersons(persons.concat(person));
    setNewName('');
    setNewNumber('');
  };


  return (
    <div>
      <h2>Phonebook:</h2>
      <form>
        Filter:
        <input onChange={handleSearchChange} />
      </form>
      <h2>Add a New:</h2>
      <PersonForm
        search={search}
        handlePersonChange={handlePersonChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <NumbersList persons={persons} search={search} />
    </div>
  );
};

export default App;
