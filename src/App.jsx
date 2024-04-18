import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import Hello from "./pages/Hello";
import Goodbye from "./pages/Goodbye";
import User from "./pages/User";

const App = () => {
  return (
    <>
      <p>My app</p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/goodbye" element={<Goodbye />} />
          <Route path="/users/:userId" element={<User />} />
        </Routes>
      </BrowserRouter>
      <p>Footer</p>
    </>
  );
};

export default App;
