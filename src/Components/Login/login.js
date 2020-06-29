import React from 'react'

import { Input, Button } from 'antd';
import './login.css'


const login = () => {

    const handleOnClick = () => {
        window.location.replace('/layout')
    }


    return (



       
            <div className="login">           
            
                <h2>Login - Images dashboard</h2>
                <label>
                    Username

                    <Input
                        placeholder="username"

                    />
                    </label>
                   <label>
                       Password
                   <Input.Password
                        placeholder="password"

                    />
                   </label>
                    <Button
                        type="primary"
                        block
                        onClick={handleOnClick}                >
                        login
            </Button>
                
           
            </div>
        








    );
}
export default login;
