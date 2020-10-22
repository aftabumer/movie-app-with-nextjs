import React, { useEffect, useState } from "react";
import SideMenu from "../components/SideMenu";
import Crousel from "../components/carousel";
import MovieList from "../components/movieList";
import { getMovies } from "../actions";

const Home = ({ movies }) => {
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

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <SideMenu />
        </div>
        <div className="col-lg-9">
          <Crousel />
          <div className="row">
            {/* {errorMessage && (
                  <div className="alert alert-danger">{errorMessage}</div>
                )} */}
            <MovieList movies={movies} />
          </div>
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = async () => {
  const movies = await getMovies();
  return { movies };
};

export default Home;
