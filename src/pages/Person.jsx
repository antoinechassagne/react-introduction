import { Link, useParams } from 'react-router';
import { usePersons } from '../contexts/Persons';
import Title from '../components/Title';

const Person = () => {
  const { personId } = useParams();
  const { persons } = usePersons();

  const person = persons.find((person) => person.id === personId);

  if (!person) {
    return <p>Person not found.</p>;
  }

  return (
    <>
      <h2>{person.name}</h2>
      <p>ID: {person.id}</p>
      <Link to="/">Back to home</Link>
    </>
  );
}

export default Person;