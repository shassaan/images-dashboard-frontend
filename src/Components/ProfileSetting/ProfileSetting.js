import React from 'react'
import { Form, Input, Button} from 'antd';
const ProfileSetting=()=>{
return(
    <div>
        <h2>Edit Profile</h2>
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
    <Form.Item label="Passward">
      <Input />
    </Form.Item>
    <Button type="primary">Update</Button>
  </Form>
  </div>
)
}
export default ProfileSetting