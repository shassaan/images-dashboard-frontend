import React from 'react'
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import './UserComponent.css'
//import { Link } from 'react-router-dom';

const CreateUserComponent = () => {
  return (
    <div className="create-user-style">
      <h2>Create User</h2>
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








    </div>
  )
}

export default CreateUserComponent;
