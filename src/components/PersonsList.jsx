const PersonsList = ({ persons }) => {
  if (!persons.length) {
    return <p>Aucune personne trouvée.</p>;
  }
  return (
    <ul>
      {persons.map((person, index) => (
        <li key={index}>{person.name}</li>
      ))}
    </ul>
  );
}

export default PersonsList;