
function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by service name or location..."
        className="search-input"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <button
        className="search-btn"
        onClick={() => setSearchTerm(searchTerm.trim())}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
