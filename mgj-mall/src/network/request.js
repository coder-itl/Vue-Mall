import axios from 'axios'
export function request(config) {
  return new Promise((resolve, reject) => {
    // 1. 创建 axios 实例
    const instance = axios.create({
      baseURL: 'http://152.136.185.210:7878/api/m5',
      timeout: 5000,
    })
    // 2. axios 拦截器的使用

    // 请求拦截器
    instance.interceptors.request.use(
      (config) => {
        console.log(config)
        return config // 必须返回 config
      },
      (err) => {
        console.log(err)
      },
    )

    // 相应拦截器
    instance.interceptors.response.use(
      (res) => {
        console.log(res)
        return res.data
      },
      (err) => {
        console.log(err)
      },
    )

    // 3. 发送真正的网络请求 调用时使用 Promise().then().catch()
    return instance(config)
  })
}
