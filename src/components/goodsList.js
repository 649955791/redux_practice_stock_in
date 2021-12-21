import React from 'react'
import GoodsContainer from './../containers/goods';
import PropTypes from 'prop-types'

const GoodsList = ({goodsList,onClick}) => (
  <div>
    <p>ORDERS:</p>
    <ul>
      {goodsList.map(goods => (
        <GoodsContainer key={goods.id} {...goods} />
      ))}
    </ul>
    <button
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      StockIn
    </button>
  </div>
)

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired
}

export default GoodsList