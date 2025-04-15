import useSWR from 'swr';
import { getPersons } from '../services/api';
import { wait } from '../utils';

const PersonsList = () => {
  console.log('Will start fetching data');

  const { data } = useSWR(
    '/persons-but-suspensed',
    async () => {
      await wait();
      return getPersons();
    },
    { suspense: true }
  );

  console.log('Data fetched !');

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