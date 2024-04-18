import { Link } from "react-router-dom";

const Hello = () => {
  return (
    <>
      <h1>Hello world !</h1>
      <Link to="/goodbye">Goodbye</Link>
      <Link to="/user/test">Test user</Link>
    </>
  );
};

export default Hello;
