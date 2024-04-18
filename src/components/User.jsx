const User = ({ user }) => {
  return (
    <div className="flex items-center space-x-2">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-10 h-10 rounded-full"
      />
      <p>{user.login}</p>
    </div>
  );
};

export default User;
