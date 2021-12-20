import React from 'react'
import PropTypes from 'prop-types'

const StockList = ({ stockGoods }) => (
  <ul>
    {stockGoods.map(stock => 
      <li key ={stock.id}>
        {stock.name} * {stock.number}
      </li>
      )}
  </ul>
)



StockList.propTypes = {
  stockGoods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
}

export default StockList