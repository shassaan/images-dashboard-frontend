import React ,{ useState } from 'react'
import {Button,Modal} from 'antd';


const CreateModal=(props)=>{
const [visible, setVisible] = useState(true);
  
 const handleOk = e => {

   setVisible(false)
   
  };

  const handleCancel = e => {

    setVisible(false)
    
  };

return(
    <Modal
          visible={visible}
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
