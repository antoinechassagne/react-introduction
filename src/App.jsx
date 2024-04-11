import { useState, useEffect } from "react";

import Title from "./components/Title";
import PersonsList from "./components/PersonsList";
import Button from "./components/Button";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Alice" }]);
  const [newName, setNewName] = useState("");

  useEffect(() => {
    console.log("State persons: ", persons);
  }, [persons]);

  return (
    <div>
      <Title>Persons list</Title>
      <PersonsList persons={persons} />
      <input type="text" onChange={(e) => setNewName(e.target.value)}/>
      <Button onClick={() => setPersons([...persons, { name: newName }])}>
        Add person
      </Button>
    </div>
  )
}

export default App;
