import React from 'react';
import {connect} from 'react-redux';
import { addGoodsType } from '../actions';

let AddGoods = ({dispatch}) => {
  let input

  return (
    <div>
      <p>Add Goods:</p>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addGoodsType(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Goods
        </button>
      </form>
    </div>
  )
}
AddGoods = connect()(AddGoods)

export default AddGoods