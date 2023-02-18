import PropTypes from 'prop-types';

import css from './MoviesList.module.css';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

const MoviesList = ({ moviesList }) => {
  const location = useLocation('');
  return (
    <div className={classNames(css.container, css.movies_list)}>
      <ul className={css.movies_list}>
        {moviesList.map(({ id, title, name }) => (
          <li key={id} className={css.movies_list__item}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title || name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      name: PropTypes.string,
    }).isRequired
  ).isRequired,
};
