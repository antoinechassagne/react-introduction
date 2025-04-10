import useSWR from 'swr';
import { getPersons } from './services/api';
import PersonsList from './components/PersonsList';

const App = () => {
  const { data, error, isLoading } = useSWR('persons', getPersons)

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return <div>No data</div>

  return (
    <div>
      <h1>Data from App component</h1>
      <ul>
        {data.data.map((person) => (
          <li key={person.id}>
            {person.firstname} {person.lastname}
          </li>
        ))}
      </ul>
      <h1>Data from PersonsList component</h1>
      <PersonsList />
    </div>
  )
}

export default App;
