import { connect } from 'react-redux'
import StockList from './../components/stockList';


const mapStateToProps = state => {
  return {
    stockGoods: state.stockGoods
  }
}


const StockListContainer = connect(
  mapStateToProps
)(StockList)

export default StockListContainer