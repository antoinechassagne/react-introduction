import { Link, useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();

  return (
    <>
      <h1>{userId}</h1>
      <Link to="/">Back to home</Link>
    </>
  );
};

export default User;
