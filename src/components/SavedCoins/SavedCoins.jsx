import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./SavedCoins.module.css";

const SavedCoins = () => {
  const [coins, setCoins] = useState([]);

  return (
    <div>
      {coins?.length === 0 ? (
        <p>
          You don't have any coins saved. Please save a coin to add it to your
          watch list. <Link to="/">Click here to search coins.</Link>
        </p>
      ) : (
        <table className={styles.table_container}>
          <thead>
            <tr className={styles.table_container_row}>
              <th>Rank #</th>
              <th>Coin</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {coins?.map((coin) => (
              <tr key={coin.id} className={styles.tbody_row}>
                <td>{coin?.rank}</td>
                <td>
                  <Link to={`/coin/${coin.id}`}>
                    <div className={styles.saved_coin_container}>
                      <img
                        src={coin?.image}
                        alt="/"
                        className={styles.saved_coin_container_image}
                      />
                      <div>
                        <p className={styles.saved_coin_name}>{coin?.name}</p>
                        <p className={styles.saved_coin_symbol}>
                          {coin?.symbol}
                        </p>
                      </div>
                    </div>
                  </Link>
                </td>
                <td>
                  <AiOutlineClose className={styles.ai_close_icon} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SavedCoins;
