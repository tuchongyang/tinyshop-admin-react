import React,{useState} from "react"
import { Form, Input, Button, Checkbox, Spin } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import "./login.less"
import Storage from "@/utils/Storage"
import { useNavigate } from "react-router-dom"
import Api from "@/api"
const App: React.FC = () => {
  const navigate = useNavigate()
  const [loading,setLoading] = useState(false)
  const getUserInfo = () => {
    Api.system.user.info().then((res) => {
      Storage.set("userInfo", res)
      navigate("/")
    }).finally(()=>{
      setLoading(false)
    })
  }
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values)
    setLoading(true)
    Api.system.user.login(values).then((res) => {
      Storage.set("token", res)
      getUserInfo()
    }).catch(()=>{
      setLoading(false)
    })
  }
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-logo">管理后台</div>
        <div className="login-title">登录</div>
        <Spin spinning={loading}>
        <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item name="name" rules={[{ required: true, message: "请输入用户名" }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" size="large" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="请输入密码" size="large" />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住用户名</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button block size="large" htmlType="submit" className="login-form-button">
              <span className="text">登 录</span>
              <div className="bg"></div>
            </Button>
          </Form.Item>
        </Form>
        </Spin>
      </div>
    </div>
  )
}
export default App
