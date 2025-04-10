import { BrowserRouter, Routes, Route } from 'react-router';

import { ThemeProvider } from './contexts/Theme';
import { PersonsProvider } from './contexts/Persons';
import Title from './components/Title';
import ThemeToggler from './components/ThemeToggler';
import Page from './components/Page';
import Home from './pages/Home';
import Person from './pages/Person';

const App = () => {
  return (
    <ThemeProvider>
      <PersonsProvider>
        <Page>
          <header>
            <Title>Persons manager</Title>
            <ThemeToggler />
          </header>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/persons/:personId" element={<Person />} />
            </Routes>
          </BrowserRouter>
        </Page>
      </PersonsProvider>
    </ThemeProvider >
  )
}

export default App;
