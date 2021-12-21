import React from 'react'
import PropTypes from 'prop-types'

const ListGoods = ({ addGoods,decGoods, name, number }) => (
  <li style={{position:'relative', width:'400px'}}>
    {name}  <span style={{position:'absolute', right:'0px'}}>*&emsp;<button onClick={decGoods}>-</button>&nbsp;{number}&nbsp;<button onClick={addGoods}>+</button></span>
  </li>
)

ListGoods.propTypes = {
  addGoods: PropTypes.func.isRequired,
  decGoods: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
}

export default ListGoods