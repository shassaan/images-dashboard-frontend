import React from 'react'
import { Input, Button, List } from 'antd';
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



const UserRequest = () => {

  return (
    <div>

      <h2>Requests</h2><br />
      <Search placeholder="Search " enterButton />
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>

            <List.Item.Meta
              title={item.title}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />

            <Button type="primary">Proceed</Button>
            <Button type="danger">Decline</Button>

          </List.Item>
        )}
      />,



    </div>
  )
}

export default UserRequest;
