import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, RouterView } from '@/components';
const { Sider, Content } = Layout;

const menus = [
  {
    path: '/usercenter/info',
    name: '账号信息',
  },
  {
    path: '/usercenter/phone',
    name: '绑定手机',
  },
];
export default class Usercenter extends Component {
  render() {
    return (
      <Layout className="container">
        <Sider
          width={200}
          style={{ background: '#fff' }}
        >
          <Menu
            mode="inline"
            selectedKeys={[this.props.location.pathname]}
          >
            {menus.map(menu => (
              <Menu.Item key={menu.path}>
                <Link to={menu.path}>{menu.name}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Content>
          <RouterView routes={this.props.routes} />
        </Content>
      </Layout>
    );
  }
}
