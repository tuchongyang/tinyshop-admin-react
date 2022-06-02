import React, { useState } from "react"
import { Modal, Form, Input } from "antd"
import type { FormInstance } from "antd/es/form"
import { EditDialogProps } from "./editDialog.d"
interface FieldData {
  name: string | number | (string | number)[]
  value?: any
  touched?: boolean
  validating?: boolean
  errors?: string[]
}
interface EditFormProps {
  onChange: (fields: FieldData[]) => void
  fields: FieldData[]
}
const EditForm: React.FC<EditFormProps> = (props) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  }
  const formRef = React.createRef<FormInstance>()
  const onChange = (values: any) => {
    console.log(values)
  }
  return (
    <Form
      {...layout}
      ref={formRef}
      name="control-ref"
      onFieldsChange={(_, allFields) => {
        props.onChange(allFields)
      }}
    >
      <Form.Item name="name" label="名称" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="icon" label="图标" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="path" label="路径" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
    </Form>
  )
}
const App: React.FC<EditDialogProps> = (props) => {
  const onCancel = () => {
    props.onClose()
  }
  const [fields, setFields] = useState<FieldData[]>(Object.keys(props.fields).map((a) => ({ name: [a], value: props.fields[a] })))
  const onOk = () => {
    console.log(fields)
  }
  return (
    <Modal title="Basic Modal" visible={props.visible} onOk={onOk} onCancel={onCancel}>
      <EditForm
        fields={fields}
        onChange={(newFields) => {
          setFields(newFields)
        }}
      />
    </Modal>
  )
}
export default App
