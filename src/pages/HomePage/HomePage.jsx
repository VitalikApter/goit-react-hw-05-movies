import { useState, useEffect } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import Section from 'components/Section/Section';
import { fetchData, parseDataForMovieList } from 'components/helpers/Api';
import QueryPath from 'constants/QueryPath/QueryPath';
import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';

const HomePage = () => {
  const [treadingList, setTreadingList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchData(QueryPath.trending)
      .then(({ data: { results } }) => {
        const treadingData = parseDataForMovieList(results);
        setTreadingList(treadingData);
      })
      .catch(err => {
        toast.error('Something wrong');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {treadingList.length > 0 && (
        <Section title="Trending today">
          <MoviesList moviesList={treadingList} />
        </Section>
      )}
    </>
  );
};

export default HomePage;
