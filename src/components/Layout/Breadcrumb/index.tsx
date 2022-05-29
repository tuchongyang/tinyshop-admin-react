import React, { useEffect, useState } from "react"
import { Breadcrumb } from "antd"
import { useLocation, Link } from "react-router-dom"
import store from "@/store"
import { MenuItem } from "@/api/system/types"

const App: React.FC = () => {
  const { menus } = store
  const location = useLocation()
  const [paths, setPaths] = useState<MenuItem[]>([])
  const getMenuList = (path = "", menuList: any[], parents: any = [], level = 0) => {
    for (let i = 0; i < menuList.length; i++) {
      const menuItem: any = menuList[i]
      if (!menuItem.parentId) {
        parents = [menuItem]
      } else {
        parents[level] = menuItem
      }

      if (path == menuItem.path) {
        setPaths(parents)
        return
      }
      if (menuItem.children && menuItem.children.length) {
        getMenuList(path, menuItem.children, parents, level + 1)
      }
    }
  }
  useEffect(() => {
    getMenuList(location.pathname, menus || [], [])
  }, [location.pathname, menus])
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      {paths.map((item) => {
        return (
          <Breadcrumb.Item key={item.id}>
            <Link to={item.path}>{item.name}</Link>
          </Breadcrumb.Item>
        )
      })}
    </Breadcrumb>
  )
}
export default App
