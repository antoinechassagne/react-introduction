import { Link } from 'react-router';
import Button from './Button';

const PersonsList = ({ persons, onDelete }) => {
  if (!persons.length) {
    return <p>Aucune personne trouvée.</p>;
  }
  return (
    <ul>
      {persons.map((person, index) => (
        <li key={index}>
          <Link to={`/persons/${person.id}`}>
            {person.name}
          </Link>
          <Button onClick={() => onDelete(person.id)} className="trash">
            🗑️
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default PersonsList;