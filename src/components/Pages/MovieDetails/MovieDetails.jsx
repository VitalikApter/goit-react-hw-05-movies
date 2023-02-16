import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'components/Api';
import Loader from 'components/Loader/Loader';
import Notification from 'components/Notification/Notification';

import css from './MovieDetails.module.css';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getYear = () => new Date(movie.release_date).getFullYear;

  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  let activeClassName = {
    color: '#2196f3',
  };

  useEffect(() => {
    const MovieDetails = async () => {
      setLoading(true);
      try {
        const data = fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    MovieDetails();
  }, [movieId]);

  return (
    <div className={css.film}>
      <button onClick={handleClick} className={css.backButton}>
        {' '}
        Go Back
      </button>

      {movie && <p>{movie.title}</p>}
      {loading && <Loader />}
      {error && (
        <h2>
          <Notification message="Something Wrong..." />
        </h2>
      )}

      {movie && (
        <div>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
            }
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
          <p>({getYear()})</p>
          <p>User Score: {movie.popularity}</p>
          <div className="movie_overview">
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>
        </div>
      )}
      <hr />
      <div>
        <h2>Additional Information</h2>
        <NavLink
          to="reviews"
          style={({ isActive }) => (isActive ? activeClassName : undefined)}
          state={{ from: back }}
        >
          <p className={css.reviews}>Reviews</p>
        </NavLink>

        <NavLink
          to="cast"
          style={({ isActive }) => (isActive ? activeClassName : undefined)}
          state={{ from: back }}
        >
          <p className={css.cast}>Cast</p>
        </NavLink>
        <hr />
        <Outlet />
      </div>
    </div>
  );
}
