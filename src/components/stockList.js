import React from 'react'
import PropTypes from 'prop-types'

const StockList = ({ stockGoods }) => (
  <div>
    <p>STOCK:</p>
    <ul>
      {stockGoods.map(stock =>
        <li key={stock.id} style={{ position: 'relative', width: '380px' }}>
          {stock.name} <span style={{ position: 'absolute', right: '0px' }}>*&emsp; {stock.number} </span>
        </li>
      )}
    </ul>
  </div>
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