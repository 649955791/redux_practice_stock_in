import { connect } from 'react-redux'
import { stockInGoods } from '../actions'
import GoodsList from './../components/goodsList';


const mapStateToProps = state => {
  return {
    goodsList: state.listGoods
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(stockInGoods())
    }
  }
}

const GoodsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GoodsList)

export default GoodsListContainer