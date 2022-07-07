import React, { useState } from "react";
import CoinItem from "../CoinItem/CoinItem";
import styles from "../CoinSearch/CoinSearch.module.css";

const CoinSearch = ({ coins }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className={styles.coin_search_container}>
      <div className={styles.coin_search}>
        <h1 className={styles.search_text}>Search Crypto</h1>
        <form>
          <input
            className={styles.coin_search_input}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search a coin"
          />
        </form>
      </div>

      <div className={styles.coin_table_container}>
        <table>
          <thead>
            <tr className={styles.coin_table_row}>
              <th></th>
              <th className={styles.coin_table_tag}>#</th>
              <th className={styles.coin_table_coin_tag}>Coin</th>
              <th></th>
              <th>Price</th>
              <th>24h</th>
              <th className={styles.coin_table_24h_volume}>24h Volume</th>
              <th className={styles.coin_table_24h_volume}>Mkt</th>
              <th>Last 7 Days</th>
            </tr>
          </thead>
          <tbody>
            {coins
              .filter((value) => {
                if (searchText === "") {
                  return value;
                } else if (
                  value.name
                    .toLowerCase()
                    .includes(searchText.toLocaleLowerCase())
                ) {
                  return value;
                }
              })
              .map((coin) => (
                <CoinItem key={coin.id} coin={coin} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoinSearch;
