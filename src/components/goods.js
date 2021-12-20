import React from 'react'
import PropTypes from 'prop-types'

const ListGoods = ({ onClick, name, number }) => (
  <li
    onClick={onClick}
  >
    {name} * {number}
  </li>
)

ListGoods.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
}

export default ListGoods