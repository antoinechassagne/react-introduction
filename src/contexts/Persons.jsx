import { createContext, useState, useContext, useEffect } from 'react';

export const PersonsContext = createContext({ theme: 'light' });
export const usePersons = () => useContext(PersonsContext);

export const PersonsProvider = ({ children }) => {
  const [persons, setPersons] = useState([
    { id: crypto.randomUUID(), name: 'Alice' }
  ]);

  const addPerson = (form) => {
    const person = { id: crypto.randomUUID(), ...form };
    setPersons([...persons, person]);
  }

  useEffect(() => {
    console.log('State persons: ', persons);
  }, [persons]);

  return (
    <PersonsContext.Provider value={{ persons, addPerson }}>
      {children}
    </PersonsContext.Provider>
  );
}