export const writePersons = (persons) => {
  localStorage.setItem('persons', JSON.stringify(persons));
}

export const readPersons = () => {
  const persons = localStorage.getItem('persons');
  return persons
    ? JSON.parse(persons)
    : [{ id: crypto.randomUUID(), name: 'Alice' }];
}