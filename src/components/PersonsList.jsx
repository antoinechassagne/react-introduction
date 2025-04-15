import { useQuery } from '@tanstack/react-query';
import { getPersons } from '../services/api';

const PersonsList = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['persons'],
    queryFn: getPersons,
  });

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