import { Link, useParams } from 'react-router';

const User = () => {
  const { userId } = useParams();

  return (
    <>
      <h1>Utilisateur {userId}</h1>
      <Link to="/">Retourner sur l'accueil</Link>
    </>
  );
};

export default User;
