import React, { useEffect, useState } from "react";
import { getMovieById } from "../../../actions";
import MovieCreateForm from "../../../components/movieCreateForm";

const EditMovie = ({ movie }) => {
  return (
    <div className="container">
      <h1>edit movie</h1>
      <MovieCreateForm initailData={movie} />
    </div>
  );
};

EditMovie.getInitialProps = async ({ query }) => {
  const movie = await getMovieById(query.movie_id);
  return { movie };
};

export default EditMovie;
