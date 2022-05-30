import React from "react"
import { Table } from "antd"
import { useRequest } from "ahooks"
import Api from "@/api"

const App: React.FC = () => { 
  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'path',
      dataIndex: 'path',
      key: 'path',
    },
    {
      title: '图标',
      dataIndex: 'icon',
      key: 'icon',
    },
    {
      title:'操作',
      dataIndex: 'operation',
    }
  ];
  const { data, loading } = useRequest(Api.system.menu.tree)

  return <Table dataSource={data || []} columns={columns} rowKey='id' />;
}
export default App
