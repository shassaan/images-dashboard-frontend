import React from 'react';
import { Layout} from 'antd';
import './Layout.css'
const { Content } = Layout;

const LayoutContent=()=>{
    return(
       < Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          content
        </div>
      </Content>
    )
}

export default  LayoutContent;