import {
  ADD_GOODS,
  DEC_GOODS,
  STOCK_IN_GOODS,
  ADD_GOODS_TYPE
} from '../actions/index'


function stockInApp(state = [], action) {
  switch (action.type) {
    case ADD_GOODS:
      return Object.assign({}, state, {
        listGoods: state.listGoods.map(goods =>
          (goods.id === action.id) ? { ...goods, number: goods.number + 1 } : goods),
      })
    case DEC_GOODS:
      return Object.assign({}, state, {
        listGoods: state.listGoods.map(goods =>
          (goods.id === action.id) ? (goods.number === 0 ? { ...goods, number: 0 } : { ...goods, number: goods.number - 1 }) : goods),
      })
    case STOCK_IN_GOODS:
      return Object.assign({}, state,
        {
          stockGoods: state.stockGoods.map(goods =>
            ({ ...goods, number: goods.number + state.listGoods[goods.id - 1].number }))
        },
        {
          listGoods: state.listGoods.map(goods =>
            ({ ...goods, number: 0 }))
        })
    case ADD_GOODS_TYPE:
      return Object.assign({}, state,
        {
          stockGoods: [...state.stockGoods,
          {
            id: state.stockGoods.length + 1,
            name: action.name,
            number: 0
          }
          ]
        },
        {
          listGoods: [...state.listGoods,
          {
            id: state.listGoods.length + 1,
            name: action.name,
            number: 0
          }
          ]
        },
      )
    default:
      return state
  }
}


export default stockInApp