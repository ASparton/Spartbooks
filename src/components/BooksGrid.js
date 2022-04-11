import PropTypes from 'prop-types';

// subcomponents
import Bookcard from './BookCard.js';

export default function BooksGrid({ booksList }) {
  return (
    <ul className="booksGrid">
      {booksList.map(book => (
        <li key={book.id}>
          <Bookcard book={book} />
        </li>
      ))}
    </ul>
  )
}

BooksGrid.propTypes = {
    booksList: PropTypes.arrayOf(PropTypes.object).isRequired
};
