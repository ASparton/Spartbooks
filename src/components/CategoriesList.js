import PropTypes from 'prop-types';

export default function CategoriesList({ categories }) {

  let catKey = 0;

  return (
    <ul className="categoriesList">
      {categories.map(category => (
          <li key={catKey++}>
            <p>{category}</p>
          </li>
      ))}
    </ul>
  )
}

CategoriesList.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string).isRequired
};