import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Menu } from "antd"
import type { MenuProps } from "antd"
import Api from "@/api"

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
      const key = String(i + 1)
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
  React.useEffect(() => {
    console.log(22)
    Api.system.menu.tree().then((res) => {
      const result = getMenus(res.result)
      setMenus(result)
    })
  }, [])
  const navigate = useNavigate()
  const onClick: MenuProps["onClick"] = (info) => {
    console.log(info)
    navigate(info.key.split("$$").pop())
  }
  return <Menu mode="inline" defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} style={{ height: "100%", borderRight: 0 }} items={menus} onClick={onClick} />
}
export default App
