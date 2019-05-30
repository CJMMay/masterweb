import React from 'react';
import 'antd/dist/antd.css';
import './home.css'
import { Redirect } from "react-router-dom";
import { Layout, Menu, Icon, Avatar } from 'antd';
import { Logo } from './img/logo.png'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Home extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Layout className='home-g'>
                <Header className="header">
                    <div className="logo" >
                        <img src={require("./img/logo.png")} alt="" />
                    </div>
                    <div>
                        <h1>考研管理平台</h1>
                    </div>
                    <div>
                        <div><Avatar shape="square" size={64} icon="user" /></div>
                        <div>退出</div>
                    </div>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>

                        {/* <div className="logo" >
                            <img src={require("./img/logo.png")} alt="" />
                        </div> */}

                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >


                            <SubMenu key="sub1" title={<span><Icon type="bar-chart" />统计</span>}>
                                <Menu.Item key="1">用户分析</Menu.Item>
                                <Menu.Item key="2">内容分析</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="form" />管理</span>}>
                                <Menu.Item key="3">用户管理</Menu.Item>
                                <Menu.Item key="4">帖子管理</Menu.Item>
                                <Menu.Item key="5">打卡管理</Menu.Item>
                                <Menu.Item key="6">文件管理</Menu.Item>
                                <Menu.Item key="7">信息推送</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="setting" />设置</span>}>
                                <Menu.Item key="8">平台信息</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content style={{
                            background: '#fff', padding: 24, margin: 0, minHeight: 280,
                        }}>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default Home;