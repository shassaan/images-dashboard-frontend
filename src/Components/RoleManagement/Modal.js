import React  from 'react'
import {Button,Modal} from 'antd';


const CreateModal=(props)=>{





 const handleOk = e => {

   props.setVisible(false)
   
  };

  const handleCancel = e => {

    props.setVisible(false)
    
    
  };

return(
    <Modal
          visible={props.visible}
          title="Create Role"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Return
            </Button>,
            <Button key="submit" type="primary"  onClick={handleOk}>
              Submit
            </Button>,
          ]}
        >
         {props.children}


        </Modal>

)
}
export default CreateModal
