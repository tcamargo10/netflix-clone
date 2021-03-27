import styled from "styled-components";

export default function Header({ blackHeader }) {
  const LinkLogo =
    "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png";
  const LinkUser =
    "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";

  return (
    <Container blackHeader={blackHeader}>
      <AreaLogo>
        <a href="/">
          <Image src={LinkLogo} alt="logo" />
        </a>
      </AreaLogo>
      <a href="/profile">
        <AreaUser>
          <Image src={LinkUser} alt="user logo" />
        </AreaUser>
      </a>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  height: 70px;
  width: 100%;
  display: flex;
  padding: 0px 30px;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => (props.blackHeader ? "#111" : "transparent")};
  transition: all ease 0.6s;
`;

const AreaLogo = styled.div`
  height: 75px;
  margin-left: -10px;
`;

const AreaUser = styled.div`
  height: 40px;
  border-radius: 100px;
  background-color: red;
`;

const Image = styled.img`
  height: 100%;
`;
