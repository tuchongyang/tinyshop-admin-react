import { useNavigate, useLocation } from "react-router-dom"
import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios"
import { Storage } from "@/utils/Storage"
// 定义接口
interface PendingType {
  url?: string
  method?: Method
  params: any
  data: any
  cancel: Function
}
export interface ResType<T> {
  status: number
  message?: string
  result: T
}
// 取消重复请求
const pending: Array<PendingType> = []
const CancelToken = axios.CancelToken
// axios 实例
const instance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 60000,
  responseType: "json",
})

// 移除重复请求
const removePending = (config: AxiosRequestConfig) => {
  for (const key in pending) {
    const item: number = +key
    const list: PendingType = pending[key]
    // 当前请求在数组中存在时执行函数体
    if (list.url === config.url && list.method === config.method && JSON.stringify(list.params) === JSON.stringify(config.params) && JSON.stringify(list.data) === JSON.stringify(config.data)) {
      // 执行取消操作
      list.cancel("操作太频繁，请稍后再试")
      // 从数组中移除记录
      pending.splice(item, 1)
    }
  }
}

// 添加请求拦截器
instance.interceptors.request.use(
  (request: AxiosRequestConfig) => {
    if (!/^\/api/.test(request.url || "")) {
      request.url = "/api" + request.url
    }
    const token = Storage.get("token")
    if (token) {
      request.headers!!.authorization = token
    }
    removePending(request)
    const method: Method = request.method as Method
    request.cancelToken = new CancelToken((c) => {
      pending.push({
        url: request.url,
        method,
        params: request.params,
        data: request.data,
        cancel: c,
      })
    })

    return request
  },
  (error: Error) => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    removePending(response.config)
    // const navigate = useNavigate()
    // const location = useLocation()
    const errorCode = response?.data?.status
    if (errorCode !== 200) {
      // if (errorCode === 401 && location.pathname != "/login") {
      //   navigate("/login")
      // }
      return Promise.reject({ ...response.data })
    }

    return response
  },
  (error) => {
    const response = error.response
    // eslint-disable-next-line
    return Promise.reject((response && response.data) || { message: error.message })
  }
)

export default instance
