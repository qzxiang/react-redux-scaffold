import React, { Component } from 'react';
import style from './style.less';
import { Row, Col, Menu, Dropdown, Icon } from 'antd'
import logo from '../../../../imgs/logo.png'

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">3rd menu item</a>
    </Menu.Item>
  </Menu>
);

class LayoutHeader extends Component {
  render() {
    return (
      <Row>
        <Col xxl={4} xl={6} lg={7} md={8} sm={18} xs={12}>
          <a href="/" className={style.logo}>
            <img src={logo} alt="logo"/>
          </a>
          <Col sm={16} xs={0}>
            <div className={style.title}>React Demo</div>
          </Col>
        </Col>
        <Col xxl={20} xl={18} lg={17} md={16} sm={6} xs={12}>
          <Row>
            <Col xl={20} lg={18} md={16} sm={0} xs={0}>
              <Menu
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Col>
            <Col xl={4} lg={6} md={8} sm={0} xs={0}>
              用户信息
            </Col>
            <Col lg={0} md={0} sm={24} xs={24} className={style.drop_down}>
              <Dropdown overlay={menu}>
                <Icon type="caret-down" className={style.icon}/>
              </Dropdown>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default LayoutHeader;
