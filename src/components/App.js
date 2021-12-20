import React from 'react'
import GoodsListContainer from './../containers/goodsList';
import StockListContainer from './../containers/stockList';

const App = () => (
  <div>
    <GoodsListContainer />
    <hr/>
    <StockListContainer />
  </div>
)

export default App