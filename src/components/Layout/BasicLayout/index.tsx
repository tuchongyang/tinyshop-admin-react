import React from "react"
import { Layout } from "antd"
import { Outlet } from "react-router-dom"
import HeaderBar from "../HeaderBar"
import SiderBar from "../SiderBar"
import Breadcrumb from "../Breadcrumb"
import "./index.less"
const { Content, Sider } = Layout

const App: React.FC = () => (
  <Layout className="basic-layout">
    <HeaderBar />
    <Layout>
      <SiderBar />
      <Layout style={{ padding: "0 24px 24px" }}>
        <Breadcrumb />
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  </Layout>
)

export default App
