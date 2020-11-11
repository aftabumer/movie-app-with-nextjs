import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getMovieById, updateMovie } from "../../../actions";
import MovieCreateForm from "../../../components/movieCreateForm";

const EditMovie = ({ movie }) => {
  const router = useRouter();
  const handleUpdateMovie = (movie) => {
    updateMovie(movie).then((updatedMovie) => {
      router.push("/movies/[id]", `/movies/${movie.id}`);
    });
  };
  return (
    <div className="container">
      <h1>edit movie</h1>
      <MovieCreateForm
        initailData={movie}
        submitBtnText="Update"
        handleFormSubmit={handleUpdateMovie}
      />
    </div>
  );
};

EditMovie.getInitialProps = async ({ query }) => {
  const movie = await getMovieById(query.movie_id);
  return { movie };
};

export default EditMovie;
