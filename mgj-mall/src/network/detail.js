import { request } from './request'

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid,
    },
  })
}

// 面向一个类开发
export class Goods {
  constructor(itemInfo, columns, service) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = service
    this.realPrice = itemInfo.lowNowPrice
  }
}

// 获取评论
export function getRecommend() {
  return request({
    url: '/recommend',
  })
}
