import { Link } from 'react-router';

const PersonsList = ({ persons }) => {
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
        </li>
      ))}
    </ul>
  );
}

export default PersonsList;