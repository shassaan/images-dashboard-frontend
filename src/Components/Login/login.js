import React from 'react'
import './login.css'
import { Input, Button,Card } from 'antd';



const login = () =>{

 const handleOnClick=()=>{
  window.location.replace('/layout')
}
    

    return(
        
       

<div className="site-card-border-less-wrapper">
    <Card title="Login"  style={{ width: 400 , marginLeft :370, height:400}}>
    <div className="login">
            
            <Input
                placeholder="username"
                
            />
            <Input.Password
                placeholder="password"
               
            />
            <Button 
                type="primary" 
                block
               onClick={handleOnClick}                >
                login
            </Button>
        </div>
    </Card>
  </div>
           

       
       
       

        

    );
}
export default login;
