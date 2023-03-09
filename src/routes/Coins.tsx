import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from 'react';

const Container = styled.div`
  padding:0 10px;
  margin:0 auto;
  max-width:480px; 
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:30px 0;
`;
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;
const CoinList = styled.ul`
  
`;
const Coin = styled.li`
  background-color:white;
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 10px;
  border-radius: 15px;
  a {
    display: block;
    padding: 20px;
    transition: color 0.2s ease-in-out;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor}
    }
  }
`;
const Loader = styled.div`
  text-align:center;
`
interface CoinInterface {
  id: string,
  name: string,
  symbol: string,
  rank: number,
  is_new: boolean,
  is_active: boolean,
  type: string,
}

function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async() => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })(); // immediately execute
  }, []) // only first load component

  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      {loading ? ( 
        <Loader>Loading...</Loader>
         ) : (
          <CoinList>
            {coins.map((coin) => (
              <Coin key={coin.id}>
                <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
              </Coin>
            ))}
          </CoinList>
         )}
    </Container>
  );
}

export default Coins;