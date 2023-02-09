import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { allFetch } from 'services/api';

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
          <li key={actor.id}>
            <img
              width="200px"
              src={
                actor.profile_path
                  ? `https://www.themoviedb.org/t/p/w500/${actor.profile_path}`
                  : `https://www.banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png`
              }
              alt={actor.original_name}
            />
            <div>
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
