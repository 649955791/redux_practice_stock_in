import { connect } from 'react-redux'
import { addGoods,decGoods } from '../actions'
import Goods from '../components/goods'

const mapStateToProps = (state, ownProps) => {
  return {
    name: ownProps.name,
    number: ownProps.number
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addGoods: () => {
      dispatch(addGoods(ownProps.id))
    },
    decGoods: () => {
      dispatch(decGoods(ownProps.id))
    },
  }
}

const GoodsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Goods)

export default GoodsContainer