const UserRepositoriesList = ({ count, repositories }) => {
  return (
    <div className="mt-2">
      <h3 className="text-xl font-semibold">
        Repositories {count > 0 ? `(${count})` : null}
      </h3>
      {repositories?.length ? (
        <ul className="mt-2 flex flex-col gap-2">
          {repositories.map((repo) => (
            <li key={repo.id}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer font-semibold"
              >
                {repo.name}
              </a>
              {repo.description && (
                <p className="italic text-slate-500">{repo.description}</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No public repositories.</p>
      )}
    </div>
  );
};

export default UserRepositoriesList;
