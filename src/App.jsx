import { useState, useEffect } from 'react';

import Title from './components/Title';
import PersonsList from './components/PersonsList';
import PersonNameInput from './components/PersonNameInput';
import Button from './components/Button';

const App = () => {
  const [persons, setPersons] = useState([
    { id: crypto.randomUUID(), name: 'Alice' }
  ]);
  const [newName, setNewName] = useState('');

  useEffect(() => {
    console.log('State persons: ', persons);
  }, [persons]);

  const addPerson = () => {
    const person = { id: crypto.randomUUID(), name: newName };
    setPersons([...persons, person]);
  }

  return (
    <div>
      <Title>Persons list</Title>
      <PersonsList persons={persons} />
      <PersonNameInput onChange={(e) => setNewName(e.target.value)} />
      <Button onClick={addPerson}>
        Add person
      </Button>
    </div>
  )
}

export default App;
