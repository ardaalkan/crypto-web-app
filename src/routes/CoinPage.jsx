import React, { useState, useEffect } from "react";
import axios from "axios";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { FaTwitter, FaFacebook, FaReddit, FaGithub } from "react-icons/fa";
import DOMPurify from "dompurify";
import styles from "./CoinPage.module.css";
import { useParams } from "react-router-dom";

const CoinPage = () => {
  const [coin, setCoin] = useState({});
  const params = useParams()

  const url =
    `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data);
      console.log(response.data);
    });
  }, [url]);

  return (
    <div className={styles.coin_page_container}>
      <div className={styles.coin_page_main_stats}>
        <img
          className={styles.coin_page_main_stats_img}
          src={coin.image?.large}
          alt=""
        />
        <div>
          <p className={styles.coin_page_text_name}>{coin?.name} price</p>
          <p>({coin.symbol?.toUpperCase()} / USD)</p>
        </div>
      </div>

      <div className={styles.coin_page_stats}>
        <div>
          <div className={styles.coin_7d_stats}>
            {coin.market_data?.current_price ? (
              <p className={styles.market_data_current_price}>
                ${coin.market_data.current_price.usd.toLocaleString()}
              </p>
            ) : null}
            <p>7 Day</p>
          </div>
          <div>
            <Sparklines data={coin.market_data?.sparkline_7d.price}>
              <SparklinesLine color="var(--color-sparkline)" />
            </Sparklines>
          </div>
          <div className={styles.market_cap_container}>
            <div>
              <p>Market Cap</p>
              {coin.market_data?.market_cap ? (
                <p>{coin.market_data.market_cap.usd.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p>Volume (24h)</p>
              {coin.market_data?.market_cap ? (
                <p>{coin.market_data.total_volume.usd.toLocaleString()}</p>
              ) : null}
            </div>
          </div>
          <div className={styles.market_stats_container}>
            <div>
              <p>24h High</p>
              {coin.market_data?.high_24h ? (
                <p>{coin.market_data.high_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p>24h Low</p>
              {coin.market_data?.low_24h ? (
                <p>{coin.market_data.low_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div>
          <p className={styles.market_stats_text}>Market Stats</p>
          <div className={styles.market_stats_container}>
            <div>
              <p>Market Rank</p>
              {coin.market_cap_rank}
            </div>
            <div>
              <p>Hashing Algorithm</p>
              {coin.hashing_algorithm ? <p>{coin.hashing_algorithm}</p> : null}
            </div>
            <div>
              <p>Trust Score </p>
              {coin.tickers ? <p>{coin.liquidity_score.toFixed(2)}</p> : null}
            </div>
          </div>
          <div className={styles.market_stats_container}>
            <div>
              <p>Price Change (24h)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p>Price Change (7d)</p>
              {coin.market_data ? (
                <p>{coin.market_data.price_change_percentage_7d.toFixed(2)}%</p>
              ) : null}
            </div>
            <div>
              <p>Price Change (14d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_14d.toFixed(2)}%
                </p>
              ) : null}
            </div>
          </div>
          <div className={styles.market_stats_container}>
              <div>
                <p>Price Change (30d)</p>
                {coin.market_data ? (
                  <p>
                    {coin.market_data.price_change_percentage_30d.toFixed(2)}%
                  </p>
                ) : null}
              </div>
              <div>
                <p>Price Change (60d)</p>
                {coin.market_data ? (
                  <p>
                    {coin.market_data.price_change_percentage_60d.toFixed(2)}%
                  </p>
                ) : null}
              </div>
              <div>
                <p>Price Change (1y)</p>
                {coin.market_data ? (
                  <p>
                    {coin.market_data.price_change_percentage_1y.toFixed(2)}%
                  </p>
                ) : null}
              </div>
            </div>
          <div className={styles.coin_page_social_icons}>
            <FaTwitter />
            <FaFacebook />
            <FaReddit />
            <FaGithub />
          </div>
        </div>
        <div className={styles.coin_page_description}>
          <p className={styles.coin_page_description_coin_name}>About {coin.name}</p>
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                coin.description ? coin.description.en : ""
              ),
            }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default CoinPage;
