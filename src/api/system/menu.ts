import request from "@/api/request"
import { LoginOpt } from "./types"
export default {
  tree: () =>
    request<any>({
      url: "/system/menu/tree",
      method: "get",
    }),
  info: () =>
    request<any>({
      url: "/system/user/info",
      method: "get",
    }),
  list: () =>
    request<any>({
      url: "/system/menu/list",
      method: "get",
    }),
}
