import React, { useEffect, useState } from "react";
import SideMenu from "../components/SideMenu";
import Crousel from "../components/carousel";
import MovieList from "../components/movieList";
import { getCategories, getMovies } from "../actions";

const Home = ({ movies, images, categories }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <SideMenu categories={categories || []} />
        </div>
        <div className="col-lg-9">
          <Crousel images={images || []} />
          <div className="row">
            <MovieList movies={movies || []} />
          </div>
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = async () => {
  const movies = await getMovies();
  const categories = await getCategories();
  const images = movies.map((movie) => ({
    id: `image: ${movie.id}`,
    url: movie.cover,
    title: movie.name,
  }));
  return { movies, images, categories };
};

export default Home;

// const [movies, setMovies] = useState([]);
// const [errorMessage, setErrorMessage] = useState("");
// useEffect(() => {
//   // const fetchData = async () => {
//   //   const resMovies = await getMovies();
//   //   setMovies(resMovies);
//   // };
//   // fetchData();
//   getMovies()
//     .then((movies) => {
//       setMovies(movies);
//     })
//     .catch((error) => {
//       setErrorMessage(error);
//     });
// }, []);

// getMovies().then((movies) => {
//   setMovies(movies);
// });
