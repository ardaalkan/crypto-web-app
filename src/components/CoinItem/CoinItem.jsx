import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";
import styles from "../CoinItem/CoinItem.module.css";

const CoinItem = ({ coin }) => {
  return (
    <tr className={styles.coin_tr_top_border}>
      <td>
        <AiOutlineStar />
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <div className={styles.coin_image_container}>
          <img className={styles.coin_images} src={coin.image} alt={coin.id} />
          <p>{coin.name}</p>
        </div>
      </td>
      <td>{coin.symbol}</td>
      <td>{coin.current_price}</td>
      <td>{coin.price_change_percentage_24h}</td>
      <td>{coin.total_volume}</td>
      <td>{coin.market_cap}</td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="blue" />
        </Sparklines>
      </td>
    </tr>
  );
};

export default CoinItem;
