export const ADD_GOODS = 'ADD_GOODS';
export const STOCK_IN_GOODS = 'STOCK_IN_GOODS';

export const addGoods = goods_id =>{
  return {
    type: 'ADD_GOODS',
    id : goods_id
  }
}

export const stockInGoods = () =>{
  return {
    type: 'STOCK_IN_GOODS'
  }
}
