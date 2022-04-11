import PropTypes from 'prop-types';

// subcomponents
import CategoriesList from './CategoriesList.js';

export default function BookCard({ book }) {

  /**
   * Take the given text and if the length > limit, crop it to the given characters limit.
   * @param {string} text the text to crop
   * @param {int} limit the length limit
   * @return {string} the croped text
   */
  function getCropText(text, limit) {
    if (text.length <= limit)
      return text;
    
    return text.substring(0, limit - 2) + "...";
  }

  return (
    <article>

      {/* Left part */}
      <div className="bookLeft">
        {/* Book title with buy link if there is one */}
        <h2>
          {book.buyLink ? <a href={book.buyLink} target="_blank" rel="noopener noreferrer">{book.title}</a>
                        : book.title
          }
        </h2>

        {/* Published date */}
        <p>{book.publishedDate}</p>
  
        {/* Book thumbail if there is one */}
        {book.thumbnailLink && <img src={book.thumbnailLink} alt={book.title + " thumbnail"} title={book.title + " thumbnail"} />}
  
        {/* Categories if there is at least one */}
        {book.categories.length > 0 && <CategoriesList categories={book.categories} />}
  
        {/* Price if there is one */}
        {book.price && <p><b>{book.price + " " + book.currencyCode}</b></p>}
      </div>

      {/* Right part */}
      <div className="bookRight">
        {/* Crop description if there is a book description */}
        {book.description  && <p>{getCropText(book.description, 290)}</p>}
      </div>

    </article>
  )
}

BookCard.propTypes = {
    book: PropTypes.object.isRequired
};
