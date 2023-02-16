import { useEffect, useState } from 'react';
import { getMovies } from 'components/Api';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
import Notification from 'components/Notification/Notification';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setLoading(true);
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        setError(`Something Wrong... `);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      {loading && <Loader />}
      {error && (
        <h2>
         
          <Notification message="Something Wrong..." />
        </h2>
      )}
      {movies && <MovieList movies={movies} />}
    </>
  );
}
