import styled from "styled-components";

export default function CategoryList({ listMovies }) {
  return (
    <Container>
      <TitleCategory>{listMovies.title}</TitleCategory>

      <ContainerImage>
        {listMovies.items.results.map((movie, index) => (
          <BannerMovie
            key={index}
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </ContainerImage>
    </Container>
  );
}

const Container = styled.div`
  margin: 3vw 0px;
`;

const TitleCategory = styled.h2`
  font-size: 1.4vw;
  color: #e5e5e5;
  font-weight: 700;
  margin: 0 4% 0.5em 4%;
  text-decoration: none;
  display: inline-block;
  min-width: 6em;
`;

const ContainerImage = styled.div`
  display: flex;
  width: 94vw;
  padding: 0px 2px;
  margin: 0 4% 0.5em 4%;
  overflow-x: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  /* Chrome */
  ::-webkit-scrollbar {
    display: none;
  }
`;

const BannerMovie = styled.img`
  height: 300px;
  width: 200px;
  margin-right: 10px;
  object-fit: cover;
  border-radius: 5px;
`;
