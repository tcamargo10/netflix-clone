import styled from "styled-components";

export default function CategoryList({ listMovies }) {
  const normalSize = "w300";
  const OriginalSize = "w500";

  return (
    <Container>
      <TitleCategory>{listMovies.title}</TitleCategory>

      <ContainerImage>
        {listMovies.items.results.map((movie, index) => (
          <BannerMovie
            size={listMovies.slug === "originals" ? "500px" : null}
            key={index}
            src={`https://image.tmdb.org/t/p/${
              listMovies.slug === "originals" ? OriginalSize : normalSize
            }${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </ContainerImage>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 3vw;
`;

const TitleCategory = styled.h2`
  font-size: 1.8rem;
  color: #e5e5e5;
  font-weight: 700;
  margin: 10px 30px;
  text-decoration: none;
  display: inline-block;
  min-width: 6em;

  @media (max-width: 900px) {
    font-size: 23px;
  }
`;

const ContainerImage = styled.div`
  display: flex;
  width: 94vw;
  padding: 0px 2px;
  margin-left: 30px;
  overflow-x: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  /* Chrome */
  ::-webkit-scrollbar {
    display: none;
  }
`;

const BannerMovie = styled.img`
  height: ${(props) => props.size || "300px"};
  width: ${(props) => props.size || "200px"};
  object-fit: cover;
  border-radius: 5px;
  transform: scale(0.9);
  transition: all ease 0.2s;
  cursor: pointer;

  :hover {
    transform: scale(1);
  }
`;
