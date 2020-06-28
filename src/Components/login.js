import React from 'react'
import { Form, Input, Button, Checkbox,Card } from 'antd';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

const login = () =>{


    const onFinish = values => {
        //console.log('Success:', values);
      };
    
      const onFinishFailed = errorInfo => {
        //console.log('Failed:', errorInfo);
      };

    return(
        
       <div >

<div className="site-card-border-less-wrapper">
    <Card title="Login" bordered={false} style={{ width: 400 , marginLeft :370, height:400}}>
    <Form
{...layout}
name="basic"
initialValues={{
  remember: true,
}}
onFinish={onFinish}
onFinishFailed={onFinishFailed}
>
<Form.Item
  label="Username"
  name="username"
  rules={[
    {
      required: true,
      message: 'Please input your username!',
    },
  ]}
>
  <Input />
</Form.Item>

<Form.Item
  label="Password"
  name="password"
  rules={[
    {
      required: true,
      message: 'Please input your password!',
    },
  ]}
>
  <Input.Password />
</Form.Item>

<Form.Item {...tailLayout} name="remember" valuePropName="checked">
  <Checkbox>Remember me</Checkbox>
</Form.Item>

<Form.Item {...tailLayout}>
  <Button type="primary" htmlType="submit">
    Submit
  </Button>
</Form.Item>
</Form>
    </Card>
  </div>
           

       </div>
       
       

        

    );
}
export default login;
