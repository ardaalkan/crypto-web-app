import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../Trending/Trending.module.css";

const Trending = () => {
  const [trending, setTrending] = useState([]);

  const url = "https://api.coingecko.com/api/v3/search/trending";

  useEffect(() => {
    axios.get(url).then((response) => {
      setTrending(response.data.coins);
      //console.log(response.data);
    });
  }, []);

  return (
    <div className={styles.trending_main}>
      <h1 className={styles.trending_coins_text}>Trending Coins</h1>
      <div className={styles.trending_grid_style}>
        {trending.map((coin, idx) => (
          <div key={idx} className={styles.trending_container}>
            <div className={styles.trending_container_style}>
              <div className={styles.trending_image_container}>
                <img
                  className={styles.trending_item_small}
                  src={coin.item.small}
                  alt="/"
                />
                <div>
                  <p className={styles.trending_coin_item_name}>
                    {coin.item.name}
                  </p>
                  <p className={styles.trending_coin_item_symbol}>
                    {coin.item.symbol}
                  </p>
                </div>
              </div>
              <div className={styles.static_trending_btc_img_container}>
                <img
                  className={styles.static_trending_btc_img}
                  src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                  alt=""
                />
                <p>{coin.item.price_btc.toFixed(7)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
