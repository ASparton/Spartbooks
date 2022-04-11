import PropTypes from 'prop-types';

export default function Footer({ previousPageFunction, nextPageFunction }) {
  return (
    <footer>
      <button onClick={previousPageFunction}>◀️</button>
      <button onClick={nextPageFunction}>▶️</button>
    </footer>
  )
}

Footer.propTypes = {
  previousPageFunction: PropTypes.func.isRequired,
  nextPageFunction: PropTypes.func.isRequired
};