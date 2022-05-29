import React from "react"
import { Layout } from "antd"
import HeaderMenu from "./headerMenu"
import "./index.less"
import UserInfo from "./UserInfo/userInfo"
const App: React.FC = () => (
  <Layout.Header className="header-bar">
    <div className="header-bar-left">
      <div className="logo">管理后台</div>
      <HeaderMenu />
    </div>
    <div className="header-bar-right">
      <UserInfo />
    </div>
  </Layout.Header>
)

export default App
