import React from 'react'
import { Input, Button, Checkbox, Row, Col} from 'antd';
import {Link} from 'react-router-dom'; 

const UserCreationForm =()=>{

    
    
    return(
        <div style={{width:400 ,height:100,marginTop:100, marginLeft:200}}>
<h1>User Creation Form</h1>
            <Input placeholder="Full Name"></Input>
            <Input placeholder="Email"></Input>
            <Input placeholder="Date-of-Birth"></Input>
            <label>Access Role</label>
            <Checkbox.Group style={{ width: '100%' }} >
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
            

        <Button type="primary" style={{float:'right'}}>Add</Button>   
        <Link to="/layout"><Button type="primary" >Back</Button></Link>

</div>
    )
}

export default UserCreationForm;