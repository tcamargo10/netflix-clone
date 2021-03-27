import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <Text>Desenvolvido por Thiago Camargo</Text>
      <Text>Direitos de imagem para Netflix</Text>
      <Text>Dados e imagens utilizados: API - themoviedb.org </Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h3`
  color: white;
  font-size: 16px;
  line-height: 22px;

  @media (max-width: 900px) {
    font-size: 13px;
  }
`;
