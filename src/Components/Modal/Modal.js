import React from 'react'
import {Modal } from 'antd';


const CreateModal = (props) => {





  const handleOk = e => {

    props.setVisible(false)

  };

  const handleCancel = e => {

    props.setVisible(false)


  };

  return (
    <Modal
      visible={props.visible}
      title={props.title}
      onOk={handleOk}
      onCancel={handleCancel}
      
    >
      {props.children}


    </Modal>

  )
}
export default CreateModal
