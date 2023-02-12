import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true); 
  const [coins, setCoins] = useState([]);
  // undefined로 두면 안 되는 이유? []는 undefined가 있어서는 안 돼
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res)=>res.json())
      .then((json)=> {
        setCoins(json);
        setLoading(false);
      });
  }, [])
  return (
   <div>
    <h1>The Coins ({coins.length})</h1>
    {loading ? <strong>Loading... </strong> :  <select>
      {coins.map((coin, id)=> 
        <option key={id}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</option>
      )}
    </select>}
   
   </div>
  );
}

export default App;
