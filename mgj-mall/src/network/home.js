import {request} from './request'

export function getHomeMultidata() {
  return request({
    url: '/home/multidata',
  })
}

// ๅๅๅ่กจ
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page,
    },
  })
}
