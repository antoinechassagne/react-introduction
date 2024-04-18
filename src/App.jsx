import { useState } from "react";

import SearchUsers from "./components/SearchUsers";
import UsersList from "./components/UsersList";
import UserDetail from "./components/UserDetail";

const App = () => {
  const [loading, setLoading] = useState({
    search: false,
    user: false,
  });
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const searchUsers = async (q) => {
    setLoading({ ...loading, search: true });
    const response = await fetch(`https://api.github.com/search/users?q=${q}`);
    const data = await response.json();
    setCount(data?.total_count || 0);
    setUsers(data?.items || []);
    setLoading({ ...loading, search: false });
  };

  const selectUser = async (id) => {
    if (id === selectedUser?.id) {
      setSelectedUser(null);
      return;
    }
    setLoading({ ...loading, user: true });
    const user = users.find((user) => user.id === id);
    const responses = await Promise.all([
      fetch(`https://api.github.com/users/${user.login}`),
      fetch(`https://api.github.com/users/${user.login}/repos`),
    ]);
    const [userData, reposData] = await Promise.all(
      responses.map((response) => response.json())
    );
    setSelectedUser({ ...userData, repos: reposData });
    setLoading({ ...loading, user: false });
  };

  return (
    <main className="p-10">
      <h1 className="text-4xl font-semibold mb-8">🐙 GitHub Inspector</h1>
      <SearchUsers onSearch={searchUsers} />
      <div className="flex items-start">
        <UsersList
          loading={loading.search}
          count={count}
          users={users}
          selectedUser={selectedUser}
          onSelectUser={selectUser}
        />
        <UserDetail loading={loading.user} user={selectedUser} />
      </div>
    </main>
  );
};

export default App;
