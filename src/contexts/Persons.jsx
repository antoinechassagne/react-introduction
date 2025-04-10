import { createContext, useState, useContext, useEffect } from 'react';
import { readPersons, writePersons } from '../services/db';

export const PersonsContext = createContext({ theme: 'light' });
export const usePersons = () => useContext(PersonsContext);

export const PersonsProvider = ({ children }) => {
  const [persons, setPersons] = useState(readPersons);

  const addPerson = (form) => {
    const person = { id: crypto.randomUUID(), ...form };
    setPersons([...persons, person]);
    writePersons([...persons, person]);
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