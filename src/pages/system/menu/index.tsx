import React, { useState } from "react"
import { Table, Button } from "antd"
import { useRequest } from "ahooks"
import Api from "@/api"
import EditDialog from "./editDialog"
import { ColumnType } from "antd/lib/table"

const App: React.FC = () => {
  const columns: ColumnType<any>[] = [
    {
      title: "名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "path",
      dataIndex: "path",
      key: "path",
    },
    {
      title: "图标",
      dataIndex: "icon",
      key: "icon",
    },
    {
      title: "操作",
      dataIndex: "operation",
      render: (value, reacord) => {
        return (
          <Button type="link" onClick={() => showEdit(reacord)}>
            Edit
          </Button>
        )
      },
    },
  ]
  const { data, loading } = useRequest(Api.system.menu.tree)
  const [visible, setVisible] = useState(false)
  const [fields, setFields] = useState({})
  const showEdit = (reacord) => {
    setFields(reacord)
    setVisible(true)
  }
  const setData = () => {}

  return (
    <>
      <Table dataSource={data || []} columns={columns} rowKey="id" />
      <EditDialog visible={visible} setData={() => setData()} onClose={() => setVisible(false)} />
    </>
  )
}
export default App
