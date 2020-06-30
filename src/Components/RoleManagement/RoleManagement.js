import React from 'react'
import {Button,List} from 'antd';
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

const RoleManagement=()=>{


    return(
<div>
    <Button type="primary"  shape="round" style={{float:'right'}}>Create Role</Button>
       <h2>Roles</h2><br/><hr/>
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
</div>
    )
}
export default RoleManagement