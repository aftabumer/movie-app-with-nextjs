import { useRouter } from "next/router";
import { getMovieById } from "../../../actions";

const Movie = ({ movie }) => {
  const router = useRouter();
  const { movie_id } = router.query;
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{movie.name}</h1>
        <p className="lead">{movie.description}</p>
        <hr className="my-4" />
        <p>{movie.genre}</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </div>
      <p>{movie.longDescription}</p>
    </div>
  );
};

Movie.getInitialProps = async ({ query }) => {
  const movie = await getMovieById(query.movie_id);
  return { movie };
};

export default Movie;
