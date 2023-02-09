import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { allFetch } from 'Services/api';
import s from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const onActorsOfMovie = async () => {
      try {
        const actors = await allFetch.fetchActors(movieId);
        setActors(actors);
      } catch (error) {
        console.log(error);
      }
    };
    onActorsOfMovie();
  }, [movieId]);

  return (
    <div>
      <ul>
        {actors.map(actor => (
          <li className={s.castItem} key={actor.id}>
            <img
              width="200px"
              src={'https://image.tmdb.org/t/p/w500' + actor.profile_path}
              alt={actor.original_name}
            />
            <div className={s.itemDescr}>
              <p className={s.personName}>{actor.name}</p>
              <p className={s.character}>Character: {actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
