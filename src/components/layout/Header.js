import PropTypes from 'prop-types';

// sub components
import SearchBar from './SearchBar.js';

export default function Header({ searchFunction }) {
  return (
    <header>
      <h1>Spartbooks</h1>
      <SearchBar searchFunction={searchFunction} />
    </header>
  )
}

Header.propTypes = {
  searchFunction: PropTypes.func.isRequired
};