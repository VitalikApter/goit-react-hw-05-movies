import { useState, useEffect } from 'react';
import QueryPath from 'constants/QueryPath/QueryPath';
import { fetchData } from 'components/helpers';

import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchData(QueryPath.movieCredits(movieId)).then(({ data: { cast } }) => {
      setCast(cast);
    });
  }, [movieId]);
  return (
    <ul>
        {cast.map(({ profile_path, name, character, cast_id }) => (
          <li key={cast_id}>
            <img
              width="100"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                  : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
              }
              alt={name}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
  );
};

export default Cast;
