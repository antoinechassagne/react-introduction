import useSWR from 'swr';
import { getPersons } from '../services/api';

const PersonsList = () => {
  const { data, error, isLoading } = useSWR('persons', getPersons);

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return <div>No data</div>

  return (
    <ul>
      {data.data.map((person) => (
        <li key={person.id}>
          {person.firstname} {person.lastname}
        </li>
      ))}
    </ul>
  );
}

export default PersonsList;