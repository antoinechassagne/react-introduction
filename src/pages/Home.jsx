import { Link } from 'react-router';

const Home = () => {
  return (
    <>
      <h1>Bienvenue !</h1>
      <nav>
        <Link to="/about">A propos</Link>
        <Link to="/users/test">Utilisateur test</Link>
      </nav>
    </>
  );
};

export default Home;
