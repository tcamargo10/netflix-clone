import styled from "styled-components";

export default function Button({ children, link, primary }) {
  return (
    <ContainerButton primary={primary} href={link}>
      {children}
    </ContainerButton>
  );
}

const ContainerButton = styled.a`
  display: flex;
  padding: 12px 25px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  transition: all ease 0.2s;
  background-color: ${(props) => (props.primary ? "white" : "#333")};
  color: ${(props) => (props.primary ? "black" : "white")};

  :hover {
    opacity: 0.7;
  }

  @media (max-width: 600px) {
    font-size: 17px;
    padding: 11px 22px;
  }
`;
