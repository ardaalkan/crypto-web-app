import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";
import styles from "../CoinItem/CoinItem.module.css";
import { Link } from "react-router-dom";

const CoinItem = ({ coin }) => {
  return (
    <tr className={styles.coin_tr_top_border}>
      <td>
        <AiOutlineStar />
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <Link to={`/coin/${coin.id}`}>
          <div className={styles.coin_image_container}>
            <img
              className={styles.coin_images}
              src={coin.image}
              alt={coin.id}
            />
            <p>{coin.name}</p>
          </div>
        </Link>
      </td>
      <td>{coin.symbol.toUpperCase()}</td>
      <td>${coin.current_price}</td>
      <td>
        {coin.price_change_percentage_24h > 0 ? (
          <p className={styles.price_change_color}>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className={styles.price_change_lower_color}>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}
      </td>
      <td>{coin.total_volume.toLocaleString()}</td>
      <td>{coin.market_cap.toLocaleString()}</td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="var(--color-sparkline)" />
        </Sparklines>
      </td>
    </tr>
  );
};

export default CoinItem;
