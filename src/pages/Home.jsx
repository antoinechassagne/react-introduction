import { usePersons } from "../contexts/Persons";
import PersonsList from "../components/PersonsList";
import AddPersonForm from "../components/AddPersonForm";

const Home = () => {
  const { persons, addPerson } = usePersons();

  return (
    <>
      <h2>Persons list</h2>
      <PersonsList persons={persons} />
      <AddPersonForm onSubmit={addPerson} />
    </>
  );
}

export default Home;