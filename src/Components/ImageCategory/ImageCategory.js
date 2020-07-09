import React from 'react'
import { Input, Button, List } from 'antd';

const data = [
    {
        title: 'Category 1',
    },
    {
        title: 'Category 2',
    },
    {
        title: 'Category 3',
    },

];

const ImageCategory = () => {
    return (
        <div>
            <h2>Categories</h2>
            <Input placeholder="Category" style={{ width: 980 }} />{" "}
            <Button type="primary"   >Add New</Button>

            <br />
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>

                        <List.Item.Meta
                            title={item.title}
                            description="This is description"
                        />

                        <Button type="primary">Edit</Button>
                        <Button type="danger">Delete</Button>

                    </List.Item>
                )}
            />,
        </div>
    )
}
export default ImageCategory