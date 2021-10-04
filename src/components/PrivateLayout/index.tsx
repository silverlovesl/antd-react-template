import React, { useState, useEffect, ElementType } from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Layout, Menu, Button } from 'antd';
import { observer } from 'mobx-react-lite';
import logo from '../../assets/images/logo.svg';
import { RouteComponentProps } from 'react-router';
import { UIUtils } from '../../utils';
import './index.scss';

const { Header, Content, Sider } = Layout;

type Props = { component: ElementType } & RouteComponentProps;

const PrivateLayout: React.FC<Props> = observer((props) => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {});

  const menuToggle = () => {
    setCollapsed(!collapsed);
  };

  const onMenuClick = (e: any) => {};

  const Component = props.component;

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={256} trigger={null} collapsible collapsed={collapsed} theme="dark">
        <div className="dashboard__logo">
          <img src={logo} alt="logo" />
          <h1>Title</h1>
        </div>
        <Menu theme="dark" mode="inline" style={{ textAlign: 'left' }} onClick={(e) => onMenuClick(e)}>
          <Menu.Item key="profile">
            <HomeOutlined />
            <span>Home</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} className="dashboard__header">
          <div>
            {UIUtils.isMobile() ? null : collapsed ? (
              <MenuUnfoldOutlined className="trigger" onClick={() => menuToggle()} />
            ) : (
              <MenuFoldOutlined className="trigger" onClick={() => menuToggle()} />
            )}
            <div className="dashboard__header-menu"></div>
          </div>
        </Header>
        <Content className="g-ma-sm">
          <Component {...props}></Component>
        </Content>
      </Layout>
    </Layout>
  );
});

export default PrivateLayout;
