import styled from "styled-components";

export default function CategoryList({ listMovies }) {
  return (
    <Container>
      <TitleCategory>{listMovies.title}</TitleCategory>

      <ContainerImage>
        {listMovies.items.results.map((movie, index) => (
          <BannerMovie key={index} src={movie.poster_path} />
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
  width: 100%;
  padding: 0px 2px;
  border-radius: 5px;
  margin: 0 4% 0.5em 4%;
`;

const BannerMovie = styled.image`
  height: 140px;
  width: 250px;
  margin-right: 10px;
  border: 1px solid #ddd;
`;
