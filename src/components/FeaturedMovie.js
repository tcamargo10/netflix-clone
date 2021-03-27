import styled from "styled-components";
import Button from "../components/Button.js";

export default function FeaturedMovie({ item }) {
  const firstDate = new Date(item.first_air_date);

  return (
    <Container image={item.backdrop_path}>
      <BoxShadownVertical>
        <BoxShadownHorizontal>
          <TitleMovie>{item.original_name}</TitleMovie>

          <AreaInfo>
            <Points>{item.vote_average} pontos</Points>
            <Year>{firstDate.getFullYear()}</Year>
            <Seasons>
              {item.number_of_seasons} temporada
              {item.number_of_seasons > 1 ? "s" : ""}
            </Seasons>
          </AreaInfo>

          <Description>{item.overview}</Description>

          <AreaButtons>
            <Button primary link={`/watch/${item.id}`}>
              ► Assistir
            </Button>
            <Button link={`/list/add/${item.id}`}>+ Minha Lista</Button>
          </AreaButtons>

          <AreaGenres>
            <Genres>
              <strong>Gêneros: </strong>
              {item.genres.map((data, index) => `${data.name}, `)}
            </Genres>
          </AreaGenres>
        </BoxShadownHorizontal>
      </BoxShadownVertical>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  color: white;
  background-image: ${(props) =>
    `url(https://image.tmdb.org/t/p/original${props.image})`};
`;

const BoxShadownVertical = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
`;

const BoxShadownHorizontal = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 30%, transparent 70%);
  padding-left: 30px;
  padding-bottom: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleMovie = styled.div`
  font-size: 60px;
  font-weight: bold;
  max-width: 50%;

  @media (max-width: 900px) {
    font-size: 40px;
  }

  @media (max-width: 600px) {
    font-size: 25px;
    max-width: 100%;
  }
`;

const AreaInfo = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;

  @media (max-width: 900px) {
    font-size: 14px;
  }
`;

const Points = styled.div`
  display: inline-block;
  color: #46d369;
  margin-right: 15px;
`;

const Year = styled.div`
  display: inline-block;
  margin-right: 15px;
`;

const Seasons = styled.div`
  display: inline-block;
`;

const Description = styled.div`
  margin-top: 15px;
  font-size: 20px;
  color: #999;
  max-width: 40%;
  max-height: 20%;
  overflow-y: hidden;

  @media (max-width: 1000px) {
    max-width: 70%;
    font-size: 18px;
  }

  @media (max-width: 600px) {
    max-width: 100%;
    font-size: 17px;
  }
`;

const AreaButtons = styled.div`
  margin-top: 15px;
  display: flex;
`;

const AreaGenres = styled.div`
  display: flex;
  margin-top: 15px;
`;

const Genres = styled.p`
  font-size: 15px;
  color: #999;

  @media (max-width: 900px) {
    font-size: 14px;
  }
`;
