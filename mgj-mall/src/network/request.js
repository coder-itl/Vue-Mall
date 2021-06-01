// TODO：不可用的 axios 封装
// import axios from 'axios'
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     // 1. 创建 axios 实例
//     const instance = axios.create({
//       baseURL: 'http://152.136.185.210:7878/api/m5',
//       timeout: 5000,
//     })
//     // 2. axios 拦截器的使用

//     // 请求拦截器
//     instance.interceptors.request.use(
//       (config) => {
//         console.log(config)
//         return config // 必须返回 config
//       },
//       (err) => {
//         console.log(err)
//       },
//     )

//     // 相应拦截器
//     instance.interceptors.response.use(
//       (res) => {
//         console.log(res)
//         return res.data
//       },
//       (err) => {
//         console.log(err)
//       },
//     )

//     // 3. 发送真正的网络请求 调用时使用 Promise().then().catch()
//     return instance(config)
//   })
// }

import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(
    (config) => {
      return config
    },
    (err) => {
      console.log(err)
    },
  )

  // 2.2.响应拦截
  instance.interceptors.response.use(
    (res) => {
      return res.data
    },
    (err) => {
      console.log(err)
    },
  )

  // 3.发送真正的网络请求
  return instance(config)
}
