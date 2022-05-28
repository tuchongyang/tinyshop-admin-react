import { AxiosRequestConfig } from "axios"
import service from "./axios"
import { message } from "antd"

export interface BaseResponse<T> {
  status: number
  result: T
  message?: string
}
export interface ListPageType<T> {
  data: Array<T>
  total: number
}
export type ResponseType<T> = Promise<BaseResponse<T>>

const request = <T>(config: AxiosRequestConfig): Promise<BaseResponse<T>> => {
  return new Promise((resolve, reject) => {
    service.request<BaseResponse<T>>(config).then(
      (res) => {
        resolve(res.data)
      },
      (err) => {
        message.error(err.message || "请求失败，请稍后重试")
        reject(err)
      }
    )
  })
}

export default request
