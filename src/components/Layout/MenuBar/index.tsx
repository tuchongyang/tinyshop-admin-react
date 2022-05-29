import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Menu, Spin } from "antd"
import type { MenuProps } from "antd"
import Api from "@/api"
// import useFetch from "@/hooks/useFetch"
import { useRequest } from "ahooks"
import store from "@/store"

interface MenuItem {
  key: string
  label: string
  icon?: string
  children?: MenuItem[]
}
const App: React.FC = () => {
  const [menus, setMenus] = useState<MenuProps["items"]>([])
  const getMenus = (children: any[]) => {
    const result = []
    for (let i = 0; i < children.length; i++) {
      const childItem = children[i]
      const menu: MenuItem = {
        key: childItem.id + "$$" + childItem.path,
        // icon: React.createElement(icon),
        label: childItem.name,
      }
      if (childItem.children && childItem.children.length) {
        menu.children = getMenus(childItem.children)
      }
      result.push(menu)
    }
    return result
  }
  const { data, loading } = useRequest(Api.system.menu.tree)
  React.useEffect(() => {
    setMenus(getMenus(data || []))
    store.menus = data
  }, [data])
  const navigate = useNavigate()
  const onClick: MenuProps["onClick"] = (info) => {
    const path = info.key.split("$$").pop()
    path && navigate(path)
  }
  return (
    <Spin spinning={loading}>
      <Menu mode="inline" defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} style={{ height: "100%", borderRight: 0 }} items={menus} onClick={onClick} />
    </Spin>
  )
}
export default App
