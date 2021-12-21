import React from 'react'
import AddGoods from '../containers/addGoods';
import GoodsListContainer from './../containers/goodsList';
import StockListContainer from './../containers/stockList';

const App = () => (
  <div>
    <GoodsListContainer />
    <hr/>
    <StockListContainer />
    <hr/>
    <AddGoods/>
  </div>
)

export default App