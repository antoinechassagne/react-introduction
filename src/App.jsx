import { useState, useEffect } from 'react';

import { ThemeProvider } from './contexts/Theme';
import Title from './components/Title';
import PersonsList from './components/PersonsList';
import AddPersonForm from './components/AddPersonForm';
import ThemeToggler from './components/ThemeToggler';
import Page from './components/Page';

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
    <ThemeProvider>
      <Page>
        <header>
          <Title>Persons list</Title>
          <ThemeToggler />
        </header>
        <PersonsList persons={persons} />
        <AddPersonForm onSubmit={addPerson} />
      </Page>
    </ThemeProvider>
  )
}

export default App;
