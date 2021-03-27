import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Tmdb from "./Tmdb";

import "./services/styles/global.css";

import CategoryList from "./components/CategoryList.js";
import FeaturedMovie from "./components/FeaturedMovie.js";
import Loading from "./components/Loading.js";

export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const GetAllMovies = async () => {
      //Get List Movies in TMDB API
      const ListMovies = await Tmdb.getHomeList();
      setMovieList(ListMovies);

      // Filter only Originals netflix
      const originals = ListMovies.filter((i) => i.slug === "originals");

      // Random movie in Originals netflix
      let randomMovie = Math.floor(
        Math.random() * originals[0].items.results.length - 1
      );

      // Get Details for selected Movie
      let selectedMovieFeature = originals[0].items.results[randomMovie];
      const CompleteInfoMovie = await Tmdb.getMovieInfo(
        selectedMovieFeature.id,
        "tv"
      );
      setFeaturedMovie(CompleteInfoMovie);

      setLoading(false);
    };

    GetAllMovies();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <FeaturedMovie item={featuredMovie} />

      {movieList.map((category, index) => (
        <CategoryList key={index} listMovies={category} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
