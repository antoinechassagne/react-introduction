import User from "./User";

const UsersList = ({ loading, count, users, selectedUser, onSelectUser }) => {
  const content = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (!users?.length) {
      return <p>No users found.</p>;
    }

    return (
      <ul className="mt-4 flex flex-col gap-2">
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => onSelectUser(user.id)}
            className={`cursor-pointer rounded-xl p-1 ${
              selectedUser?.id === user.id && "bg-gray-100"
            }`}
          >
            <User user={user} />
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className="mt-2 w-1/5">
      <h2 className="text-2lg font-semibold">Users</h2>
      {count > 0 && <p>Results : {count}</p>}
      {content()}
    </div>
  );
};

export default UsersList;
