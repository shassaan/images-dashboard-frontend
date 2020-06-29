import React from 'react';
import { Layout} from 'antd';
import  LayoutSider  from './LayoutSider';
import  LayoutFooter from './LayoutFooter';
import  LayoutHeader  from './LayoutHeader';
import LayoutContent from './LayoutContent';

const MainLayout=(props)=>{
    return(
        <Layout style={{height:620}}>
            <LayoutSider/>
            <Layout>
                <LayoutHeader/>
                <LayoutContent>
                    {props.children}
                </LayoutContent>
                <LayoutFooter/>
            </Layout>
        </Layout>
    )
}

export default MainLayout