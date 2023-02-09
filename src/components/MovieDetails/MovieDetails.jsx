import { useEffect, useState } from 'react';
import { useLocation, Link, useParams, Outlet } from 'react-router-dom';
import s from './MovieDetails.module.css';
import { fetchById } from 'Services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onDetalisMovie = async () => {
      try {
        const detalyMovie = await fetchById(movieId);
        setMovieInfo(detalyMovie);
      } catch (error) {
        console.log(error);
      }
    };
    onDetalisMovie();
  }, [movieId]);

  return (
    <>
      <Link to={location?.state?.from ?? '/movies'}>
        <button className={s.buttonBack} type="button">
          Back to Home
        </button>
      </Link>
      {movieInfo && (
        <div className={s.movieDetalis}>
          <img
            width="300px"
            src={'https://image.tmdb.org/t/p/w500' + movieInfo.poster_path}
            alt={movieInfo.original_title}
          />
          <div className={s.genreList}>
            <h1>
              {movieInfo.title} ({movieInfo.release_date.slice(0, 4)})
            </h1>
            <p>User score: {movieInfo.popularity}</p>
            <h2>Overview</h2>
            <p>{movieInfo.overview}</p>
            <h2>Genres</h2>
            <ul className={s.genreList}>
              {movieInfo.genres.map(genre => (
                <li className={s.genreList} key={genre.id}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <hr />
      <div>
        <h3 className={s.additional}>Additional information</h3>
        <ul className={s.cast__reviews}>
          <li className={s.cast}>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <hr />
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
