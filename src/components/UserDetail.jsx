import UserRepositoriesList from "./UserRepositoriesList";

const UserDetail = ({ loading, user }) => {
  if (!user && !loading) {
    return null;
  }

  return (
    <div className="flex flex-col p-4 m-14 gap-4 w-4/5">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>
            <div>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-blue-500"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-40 h-40 rounded-full mb-4"
                />
              </a>
              <h2 className="text-2xl font-semibold">{user.login}</h2>
              {user.bio && <p>{user.bio}</p>}
              {user.location && <p>{user.location}</p>}
            </div>
          </div>
          <UserRepositoriesList
            count={user.public_repos}
            repositories={user.repos}
          />
        </>
      )}
    </div>
  );
};

export default UserDetail;
