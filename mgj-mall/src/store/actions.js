import { ADD_COUNTER, ADD_TO_CART } from './mutation-type'

export default {
  addCart(context, payload) {
    return new Promise((reaolve, reject) => {
      let oldProduct = context.state.cartList.find(
        (item) => item.iid === payload.iid,
      )

      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct)
        reaolve('新商品+1')
      } else {
        payload.count = 1
        context.commit(ADD_TO_CART, payload)
        reaolve('添加了新商品')
      }
    })
  },
}
