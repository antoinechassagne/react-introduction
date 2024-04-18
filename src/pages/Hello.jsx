import { Link } from "react-router-dom";

const Hello = () => {
  return (
    <>
      <h1>Hello world !</h1>
      <Link to="/goodbye">Goodbye</Link>
    </>
  );
};

export default Hello;
