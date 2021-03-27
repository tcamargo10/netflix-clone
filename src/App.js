import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Tmdb from "./Tmdb";

import "./services/styles/global.css";

import CategoryList from "./components/CategoryList.js";

export default function App() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const loadAll = async () => {
      setMovieList(await Tmdb.getHomeList());
    };

    loadAll();
  }, []);

  return (
    <Container>
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
