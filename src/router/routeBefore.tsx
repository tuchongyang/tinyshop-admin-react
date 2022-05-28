/**
 * @param {string} pathname 当前路由路径
 * @param {object} meta 当前路由自定义meta字段
 * @return {string} 需要跳转到其他页时，就返回一个该页的path路径，或返回resolve该路径的promise对象
 */
import { OnRouteBeforeType } from "./RouterWaiter/types"
import Storage from "@/utils/Storage"
const onRouteBefore: OnRouteBeforeType = ({ pathname, meta }) => {
  // 示例：动态修改页面title
  if (meta.title !== undefined) {
    document.title = meta.title
  }
  const userInfo = Storage.get("userInfo")
  // // 示例：判断未登录跳转登录页
  if (!meta.notneedLogin) {
    if (!userInfo) {
      return "/login"
    }
  }
}

export default onRouteBefore
