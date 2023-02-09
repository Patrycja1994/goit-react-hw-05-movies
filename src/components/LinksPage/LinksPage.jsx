import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import css from './LinksPage.module.css';

import { fetchTrending } from 'Services/api';

function LinksPage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrending().then(setMovies);
  }, []);

  return (
    <>
      <h1> Trending today </h1>
      <ul>
        {movies &&
          movies.map(({ id, title }) => (
            <li className={css.movieList__Items} key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export default LinksPage;
