import React, { useState } from 'react'
import { Form, Input, Button, Checkbox, Row, Col, List } from 'antd';
import UseModal from '../Modal/Modal.js'
import './UserComponent.css'
const { Search } = Input

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];



const CreateUserComponent = () => {
  const [visiblty, setVisiblty] = useState(false);
  const showModal = () => {

    setVisiblty(true);


  }
  return (
    <div>
      <Button type="primary" shape="round" style={{ float: 'right' }} onClick={showModal}>Create User</Button>
      <h2>Users</h2><br />
      <Search placeholder="Search Users" enterButton />
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

      <UseModal visible={visiblty} title={"Create User"} setVisible={setVisiblty}>
        <Form
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 18 }}
          layout="vertical"

        >
          <Form.Item label="Full Name">
            <Input />
          </Form.Item>
          <Form.Item label="Email">
            <Input />
          </Form.Item>
          <Form.Item label="Date-Of-Birth">
            <Input />
          </Form.Item>
          <Form.Item label="Access Role">
            <Checkbox.Group >
              <Row>
                <Col span={8}>
                  <Checkbox value="A">A</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="B">B</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="C">C</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="D">D</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="E">E</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>,
        </Form.Item>
          <Button type="primary">Add</Button>
        </Form>
      </UseModal>


    </div>
  )
}

export default CreateUserComponent;
