import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Dropdown, Row, Col } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import './Layout.css'
const { Header } = Layout;
const menu = (
    <Menu>
        <Menu.Item key="0">
            <Link to="/profile-setting"> Settings</Link>
          
      </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2">Logout</Menu.Item>
    </Menu>
);

const LayoutHeader = () => {
    return (

        <Header className="site-layout-sub-header-background"  >
            <Row>
                <Col span={10}></Col>
                <Col span={12}> <h1>Images Dashboard</h1></Col>
                <Col span={2}><Dropdown overlay={menu} trigger={['click']} >
                    <button className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        Edit Profle <DownOutlined />
                    </button>
                </Dropdown></Col>
            </Row>


        </Header>


    )
}

export default LayoutHeader;
