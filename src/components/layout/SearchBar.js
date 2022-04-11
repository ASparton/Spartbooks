import PropTypes from 'prop-types';

export default function SearchBar({ searchFunction }) {

  function handleForm(event) {
    event.preventDefault();
    event.stopPropagation();
    searchFunction(event.target.searchAuthor.value);
  }

  return (
    <form id="authorSearch" onSubmit={handleForm}>
      {/* Search input */}
      <label htmlFor="search" form="authorSearch" hidden>Search</label>
      <input type="search" name="searchAuthor" id="searchAuthor" placeholder="Type an author's name" />

      {/* Submit button */}
      <label htmlFor="submitButton" form="authorSearch" hidden>Submit search</label>
      <input type="submit" name="submitButton" id="submitButton" value="Search" className="searchButton" />
    </form>
  );
}

SearchBar.propTypes = {
  searchFunction: PropTypes.func.isRequired
};