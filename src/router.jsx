import { createBrowserRouter } from 'react-router';

import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  }, {
    path: 'about',
    element: <About />,
  }, {
    path: '/users/:userId',
    element: <User />,
  }
]);

export default router;
