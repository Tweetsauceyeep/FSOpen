import {useState, useEffect} from 'react';
import PersonForm from './components/PersonForm';
import NumbersList from './components/NumbersList';
import NumService from './services/numbers';
import axios from 'axios';

// remember to never define components in other components
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    NumService.getAll().then(initialNotes => {
      console.log(initialNotes);
      setPersons(initialNotes);
    });
  }, []);

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
      //id: persons.length + 1,
      number: newNumber,
    };
    const existingPeople = persons.map(person => person.name);

    if (existingPeople.includes(newName)) {
      const msg = `${newName} is already in the contacts list, replace old number wit da new one?`;
      const confirmation = window.confirm(msg);
      if (confirmation) {
        updateName(person);
        setNewName('');
        setNewNumber('');
      }
    } else {
      NumService.create(person).then(returnedNum => {
        setPersons(persons.concat(returnedNum));
        setNewName('');
        setNewNumber('');
      });
    }
  };

  const deletePerson = person => {
    console.log(`this da id: ${person.id}`);
    // ok like idk how this even works, but i think it does?????
    if (window.confirm(`delete: ${person.name}"`)) {
      NumService.deleteNum(person.id).then(
        setPersons(persons.filter(people => people.id !== person.id)),
      );
      console.log(`deleted ${person.name}`);
    }
    //setPersons(persons.filter(people => people.id !== id))
  };


  // man this shtuff was copy pasted why does this even work
  // i copied it by hand and it DIDNT WORK BRUHHHHH :3
   const updateName = (nameObject) => {
    const updatePerson = persons.find(p => p.name === nameObject.name)
    const updateId = updatePerson.id
    NumService
    .update(updateId, nameObject)
    .then(returnedPerson =>
      setPersons(persons.map(person => person.id !== updateId ? person : returnedPerson))
    )
    .catch(error => {
      console.log(error)
      setPersons(persons.filter(p => p.id !== updateId))
    })
  }

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
      <NumbersList
        persons={persons}
        search={search}
        deletePerson={deletePerson}
      />
    </div>
  );
};

export default App;
