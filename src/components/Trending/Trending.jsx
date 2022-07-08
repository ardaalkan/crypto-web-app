import React, { useState, useEffect } from "react";
import axios from "axios";

const Trending = () => {
  const [trending, setTrending] = useState([]);

  const url = "https://api.coingecko.com/api/v3/search/trending";

  useEffect(() => {
    axios.get(url).then((response) => {
      setTrending(response.data);
      console.log(response.data);
    });
  }, []);

  return <div>Trending</div>;
};

export default Trending;
