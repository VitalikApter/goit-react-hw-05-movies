import { useState, useEffect } from 'react';
import QueryPath from 'constants/QueryPath/QueryPath';
import { fetchData } from 'components/helpers/Api';
import css from './Reviews.module.css';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchData(QueryPath.movieReviews(movieId))
      .then(({ data: { results } }) => {
        setReviews(results);
      })
      .catch(err => {
        toast.error('Something wrong');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      <ul className={css.reviews_list}>
        {!!reviews.length
          ? reviews.map(({ author, content, id }) => (
              <li className={css.reviews_list__item} key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            ))
          : `We don't have any reviews for this movie.`}
      </ul>
    </>
  );
};

export default Reviews;
