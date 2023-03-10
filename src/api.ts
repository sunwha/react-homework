const BASE_URL = `https://api.coinpaprika.com/v1`

export function fetchCoins() {
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) => 
    response.json()
  );
}
export function fetchCoinInfo() {
  return fetch(`/coins/${coinId}`).then((reponse) => 
    reponse.json()
  );
}