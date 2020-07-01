import React, { useState } from 'react'
import { Button, List, Form, Input } from 'antd';
import UseModal from './Modal.js'
import './RoleManagement.css'
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const RoleManagement = () => {
  const [visiblty, setVisiblty] = useState(false);
  const showModal = () => {

    setVisiblty(true);


  }

  return (
    <div>
      <Button type="primary" shape="round" style={{ float: 'right' }} onClick={showModal}>Create Role</Button>
      <h2>Roles</h2><br /><hr />
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>

            <List.Item.Meta
              title={item.title}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />

            <Button type="primary">Edit</Button>
            <Button type="danger">Delete</Button>

          </List.Item>
        )}
      />,

      <UseModal visible={visiblty} setVisible={setVisiblty}>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          layout="vertical"

        >
          <Form.Item label="Title">
            <Input />
          </Form.Item>
          <Form.Item label="Description">
            <Input.TextArea />
          </Form.Item>
        </Form>
      </UseModal>
    </div>
  )
}
export default RoleManagement

