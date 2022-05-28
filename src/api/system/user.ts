import request from "@/api/request"
import { LoginOpt } from "./types"
export default {
  login: (data: LoginOpt) =>
    request<any>({
      url: "/system/user/login",
      method: "post",
      data,
    }),
  info: () =>
    request<any>({
      url: "/system/user/info",
      method: "get",
    }),
}
