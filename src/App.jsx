import { BrowserRouter, Routes, Route } from 'react-router';

import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';

const App = () => {
  return (
    <>
      <header>Header</header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/:userId" element={<User />} />
        </Routes>
      </BrowserRouter>
      <footer>Footer</footer>
    </>
  );
};

export default App;
