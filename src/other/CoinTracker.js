import { useState, useEffect } from "react";
import styles from "./CoinTracker.module.css";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChangeDollar = (event) => {
    setDollar(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (dollar === "") {
      return "";
    } else {
      setDollar(0);
      console.log(dollar);
    }
  };

  return (
    <div className={styles.body}>
      <h1 className={styles.h1}>The Coin Tracker!</h1>
      <span className={styles.span}>Total options : {coins.length}</span>
      {loading ? <strong>Loading ...</strong> : null}
      <form onSubmit={onSubmit}>
        <h2 className={styles.h2}>Dollar</h2>
        <input
          className={styles.input}
          value={dollar}
          onChange={onChangeDollar}
          type="number"
        />
        <button className={styles.button}>Go</button>
      </form>
      <hr className={styles.hr} />
      <h3 className={styles.h3}>₩ {dollar * 1305}</h3>

      <select className={styles.select}>
        {coins.map((coin) => (
          <option key={coin.id}>
            {dollar !== 0
              ? `${coin.name}(${coin.symbol}) : $${
                  coin.quotes.USD.price / (dollar * 1305)
                } USD`
              : `${coin.name}(${coin.symbol}) : $${coin.quotes.USD.price} USD`}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CoinTracker;
