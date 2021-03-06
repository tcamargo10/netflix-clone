import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getHomeList, getMovieInfo } from "./Tmdb";

import "./services/styles/global.css";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import CategoryList from "./components/CategoryList.js";
import FeaturedMovie from "./components/FeaturedMovie.js";
import Loading from "./components/Loading.js";

export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  useEffect(() => {
    setLoading(true);

    const GetAllMovies = async () => {
      //Get List Movies in TMDB API
      const ListMovies = await getHomeList();
      setMovieList(ListMovies);

      // Filter only Originals netflix
      const originals = ListMovies.filter((i) => i.slug === "originals");

      // Random movie in Originals netflix
      let randomMovie = Math.floor(
        Math.random() * originals[0].items.results.length - 1
      );

      // Get Details for selected Movie
      let selectedMovieFeature = originals[0].items.results[randomMovie];

      if (selectedMovieFeature.id) {
        const CompleteInfoMovie = await getMovieInfo(
          selectedMovieFeature.id,
          "tv"
        );
        setFeaturedMovie(CompleteInfoMovie);
      }

      setLoading(false);
    };

    GetAllMovies();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Header blackHeader={blackHeader} />

      <FeaturedMovie item={featuredMovie} />

      <CategoriesList>
        {movieList.map((category, index) => (
          <CategoryList key={index} listMovies={category} />
        ))}
      </CategoriesList>

      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CategoriesList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -160px;
`;
