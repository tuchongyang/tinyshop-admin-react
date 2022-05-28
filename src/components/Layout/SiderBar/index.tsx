import React from "react"
import { Menu, Layout } from "antd"
import type { MenuProps } from "antd"
import MenuBar from "../MenuBar"

const App: React.FC = () => (
  <Layout.Sider width={200} className="site-layout-background">
    <MenuBar />
  </Layout.Sider>
)
export default App
