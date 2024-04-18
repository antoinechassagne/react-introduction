import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hello from "./pages/Hello";
import Goodbye from "./pages/Goodbye";

const App = () => {
  return (
    <>
      <p>My app</p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="goodbye" element={<Goodbye />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
