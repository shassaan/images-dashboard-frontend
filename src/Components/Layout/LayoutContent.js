import React from 'react';
import { Layout} from 'antd';
import './Layout.css'
const { Content } = Layout;

const LayoutContent=(props)=>{
    return(
       <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 500 }}>
          {props.children}
        </div>
      </Content>
    )
}

export default  LayoutContent;