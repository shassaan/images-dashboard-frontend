import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const LayoutMenu = () => {
  return (
    <Menu theme="dark" mode="inline" >
      <Menu.Item key="1" icon={<UserOutlined />}><Link to="/create-user">
        Create User
          </Link></Menu.Item>
      <Menu.Item key="2" icon={<VideoCameraOutlined />}><Link to="/role-management">
        Role Management
          </Link> </Menu.Item>
      <Menu.Item key="3" icon={<UploadOutlined />}><Link to='/user-requests'>
        Requests
         </Link></Menu.Item>
      <Menu.Item key="4" icon={<UserOutlined />}>
        nav 4
        </Menu.Item>
    </Menu>
  )
}

export default LayoutMenu;
