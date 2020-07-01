import React from 'react';
import { Layout} from 'antd';
import './Layout.css'
const { Header } = Layout;

const LayoutHeader=()=>{
    return(

<Header  className="site-layout-sub-header-background" style={{ padding: 0  ,textAlign: 'center' }} ><h1>Images Dashboard</h1></Header>

    )
}

export default LayoutHeader;
