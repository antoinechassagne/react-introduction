import { RouterProvider } from 'react-router';

import router from './router';

const App = () => {
  return (
    <>
      <header>Header</header>
      <RouterProvider router={router} />
      <footer>Footer</footer>
    </>
  )
};

export default App;
