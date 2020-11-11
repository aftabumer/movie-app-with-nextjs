import { useRouter } from "next/router";
import { deleteMovie, getMovieById } from "../../../actions";
import Link from "next/link";

const Movie = ({ movie }) => {
  const router = useRouter();
  const { movie_id } = router.query;

  const handleDeleteMovie = (id) => {
    deleteMovie(id).then(() => {
      router.push("/");
    });
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{movie.name}</h1>
        <p className="lead">{movie.description}</p>
        <hr className="my-4" />
        <p>{movie.genre}</p>
        <button className="btn btn-primary btn-lg mr-1">Learn more</button>
        <button
          onClick={() => handleDeleteMovie(movie_id)}
          className="btn btn-danger btn-lg mr-1"
        >
          Delete
        </button>
        <Link href="/movies/[id]/edit" as={`/movies/${movie_id}/edit`}>
          <button className="btn btn-warning btn-lg">Edit</button>
        </Link>
      </div>
      <p>{movie.longDesc}</p>
    </div>
  );
};

Movie.getInitialProps = async ({ query }) => {
  const movie = await getMovieById(query.movie_id);
  return { movie };
};

export default Movie;
