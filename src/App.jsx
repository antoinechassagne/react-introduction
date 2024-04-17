import { useState, useEffect } from 'react';

import Title from './components/Title';
import PersonsList from './components/PersonsList';
import AddPersonForm from './components/AddPersonForm';

const App = () => {
  const [persons, setPersons] = useState([
    { id: crypto.randomUUID(), name: 'Alice' }
  ]);

  useEffect(() => {
    console.log('State persons: ', persons);
  }, [persons]);

  const addPerson = (form) => {
    const person = { id: crypto.randomUUID(), ...form };
    setPersons([...persons, person]);
  }

  return (
    <div>
      <Title>Persons list</Title>
      <PersonsList persons={persons} />
      <AddPersonForm onSubmit={addPerson} />
    </div>
  )
}

export default App;
