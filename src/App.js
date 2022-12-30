import { useEffect, useState } from "react";
function App() {
  //coin tracker
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState();
  const [coinprice, setCoinprice] = useState();
  const [symbol, setSymbol] = useState();
  const onChange = (event) => {
    setMoney(event.target.value);
  };
  const handleCoin = (event) => {
    setCoinprice(event.target.value);
    setSymbol(event.target.title);
    console.log(event.target.title);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json); //api를 coins[]에 저장
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! ({loading ? "" : coins.length})</h1>
      {loading ? (
        "Loading..."
      ) : (
        <select onChange={handleCoin}>
          <option>Select Coin</option>
          {coins.map((coin) => (
            <option
              key={coin.id}
              value={coin.quotes.USD.price}
              title={coin.symbol}
            >
              {coin.name} ({coin.symbol}) : $ {coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
      <br />
      <br />
      <label htmlFor="money">your money </label>
      <input
        id="money"
        onChange={onChange}
        type="number"
        placeholder="Write money you have"
        value={money}
      />
      <h2>
        You can get {money / coinprice} {symbol}
      </h2>
      <p>{symbol}</p>
    </div>
  );
}

export default App;
