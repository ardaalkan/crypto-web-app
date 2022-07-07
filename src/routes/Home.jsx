import React from 'react'
import CoinSearch from '../components/CoinSearch/CoinSearch'

const Home = ({coins}) => {
  return (
    <div>
      <CoinSearch coins={coins}/>
    </div>
  )
}

export default Home