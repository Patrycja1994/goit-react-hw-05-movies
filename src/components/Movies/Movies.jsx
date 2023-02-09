import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { fetchByQuery } from 'services/api';
import css from './Movies.module.css';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  const handleSubmit = event => {
    event.preventDefault();
    const data = event.currentTarget;
    setSearchParams(query !== '' ? { query: data.elements.query.value } : {});
    data.reset();
  };

  useEffect(() => {
    if (query === '' || query === null) return;
    const searchMovies = async () => {
      const results = await fetchByQuery(query);
      setMovies(results);
    };
    searchMovies();
  }, [query]);

  return (
    <>
      <div className={css.search}>
        <form onSubmit={handleSubmit} className={css.form}>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            name="query"
          />
          <button type="submit" className={css.button}>
            Search
          </button>
        </form>
      </div>
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
};

export default MoviePage;
