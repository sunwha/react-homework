import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width:100vw;
  height:100vh;
  background-color:${(props) => props.theme.backgroundColor}
`;
const rotation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0;
  }
`;
const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;
const Emoji = styled.span`
  font-size: 36px;
`;
const Box = styled.div`
  width:200px;
  height:200px;
  background-color:tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  /* animation: ${rotation} 3s linear infinite; */
  ${Emoji} {
    &:hover {
      font-size: 50px;
    }
  }
`;
function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
      <Box>
        <Emoji>😎</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
