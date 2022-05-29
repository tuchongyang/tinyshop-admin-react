import React from "react"
import { Menu } from "antd"
import type { MenuProps } from "antd"
import "./headerMenu.less"
const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}))
const App: React.FC = () => (
  <div className="header-menu">
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]} items={items1} />
  </div>
)
export default App
