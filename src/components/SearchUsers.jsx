const SearchUsers = ({ onSearch }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(e.target.search.value);
  };

  return (
    <form onSubmit={onSubmit} className="flex gap-2">
      <input
        type="text"
        name="search"
        placeholder="Search username..."
        className="border rounded-sm px-2 py-1 w-96"
      />
      <button
        type="submit"
        className="border rounded-sm px-4 py-1 bg-indigo-500 text-white"
      >
        Search
      </button>
    </form>
  );
};

export default SearchUsers;
