export const ADD_GOODS = 'ADD_GOODS';
export const DEC_GOODS = 'DEC_GOODS';
export const STOCK_IN_GOODS = 'STOCK_IN_GOODS';
export const ADD_GOODS_TYPE = 'ADD_GOODS_TYPE';

export const addGoods = goods_id =>{
  return {
    type: 'ADD_GOODS',
    id : goods_id
  }
}
export const decGoods = goods_id =>{
  return {
    type: 'DEC_GOODS',
    id : goods_id
  }
}

export const stockInGoods = () =>{
  return {
    type: 'STOCK_IN_GOODS'
  }
}

export const addGoodsType = name =>{
  return {
    type: 'ADD_GOODS_TYPE',
    name : name
  }
}
