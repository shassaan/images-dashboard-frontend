import React from 'react';
import { Layout} from 'antd';
import './Layout.css'
import  LayoutMenu  from './LayoutMenu'
const { Sider } = Layout;


const LayoutSider =() =>{
    return(
        <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      
    >
        <div className="logo" />
        <LayoutMenu/>
    </Sider>
    )
}

export default LayoutSider;