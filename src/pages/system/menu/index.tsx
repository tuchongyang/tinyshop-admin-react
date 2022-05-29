import React from "react"
import { ProTable } from "@ant-design/pro-components"
import Api from "@/api"

const App: React.FC = () => {
  // 表格列配置项
  const columns = [
    {
      title: "企业名称",
      dataIndex: "corName",
    },
    {
      title: "申请日期",
      dataIndex: "applyDate",
      valueType: "date",
      align: "center",
    },
  ]

  /** 获取数据 */
  const getData = async (params) => {
    // 组装查询参数，比如这里用 pageIndex 代替了 current
    const query = {
      ...params,
      pageIndex: params.current,
    }
    delete query.current

    // 发起请求
    const { data, success } = await Api.system.menu.list(query)

    // 格式化返回数据
    return {
      data: data.rows,
      success,
      total: data.count,
    }
  }

  return <ProTable columns={columns} request={getData} rowKey="id" />
}
export default App
