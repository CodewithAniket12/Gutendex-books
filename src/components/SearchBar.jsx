function SearchBar({ placeholder = 'Search' }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder}
        className="search-input"
      />
    </div>
  )
}

export default SearchBar
