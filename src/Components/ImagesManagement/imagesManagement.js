import React, { useState } from 'react'
import { Button, Upload, message, Form, Checkbox, Row, Col, Input, Card } from 'antd';
import CreateModal from '../Modal/Modal.js';
import { InboxOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Dragger } = Upload;

const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};


const ImagesManagement = () => {

    const [visiblty, setVisiblty] = useState(false);
    const showModal = () => {

        setVisiblty(true);


    }
    return (
        <div>
            <Button type="primary" shape="round" style={{ float: 'right' }} onClick={showModal}>Add Image</Button>
            <h2>Images</h2><br />

            <Row>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 1 }}>
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <img
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                        actions={[
                            <DeleteOutlined key="delete" />,
                            <EditOutlined key="edit" />,
                        ]}
                    >
                        <Meta
                            description="This is the description"
                        />
                    </Card>,
                </Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 1 }}>
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <img
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                        actions={[
                            <DeleteOutlined key="delete" />,
                            <EditOutlined key="edit" />,
                        ]}
                    >
                        <Meta
                            description="This is the description"
                        />
                    </Card>,
                </Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 1 }}>
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <img
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                        actions={[
                            <DeleteOutlined key="delete" />,
                            <EditOutlined key="edit" />,
                        ]}
                    >
                        <Meta
                            description="This is the description"
                        />
                    </Card>,
                </Col>
            </Row>,



            <CreateModal visible={visiblty} title={"Add Image"} setVisible={setVisiblty}>
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                        band files
    </p>
                </Dragger>,
  <Form
                    labelCol={{ span: 7 }}
                    wrapperCol={{ span: 25 }}
                    layout="vertical"

                >
                    <Form.Item label="Description">
                        <Input.TextArea />
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
            </CreateModal>

        </div>
    )
}
export default ImagesManagement