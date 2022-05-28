import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "antd/dist/antd.css"
import "@ant-design/pro-components/dist/components.css"
import "./assets/css/main.scss"
import App from "./App"
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
