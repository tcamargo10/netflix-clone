import styled from "styled-components";

export default function Loading() {
  return (
    <Container>
      <Text>...Carregando</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h1`
  color: white;
  font-size: 22px;
  font-weight: 600;
`;
