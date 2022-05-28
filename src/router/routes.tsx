import React from "react"
import PageLayout from "@/components/Layout/BasicLayout"
const routes = [
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "",
        meta: {
          title: "首页",
        },
        component: () => import("@/pages/home"),
      },
      {
        path: "/table",
        meta: {
          title: "表格",
        },
        component: () => import("@/pages/table"),
      },
      {
        path: "*",
        component: () => import("@/pages/public/404"),
      },
    ],
  },
  {
    path: "/login",
    meta: { title: "登录", notneedLogin: true },
    component: () => import("@/pages/public/login"),
  },
]

export default routes
