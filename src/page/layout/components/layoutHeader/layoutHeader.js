import React from 'react'
import { Link } from 'react-router-dom'
import style from './layoutHeader.less'
import { Row, Col, Menu, Dropdown, Icon } from 'antd'
import logo from '../../../../image/logo.png'

const SubMenu = Menu.SubMenu;

const detail_menu = (
  <Menu>
    <Menu.Item>
      <Link to='/todo'>nav1</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to='/todo'>nav2</Link>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" href="">nav3</a>
    </Menu.Item>
    <SubMenu title="用户">
      <Menu.Item>
        <a target="_blank" href="">个人中心</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" href="">退出</a>
      </Menu.Item>
    </SubMenu >
  </Menu>
);

const user_menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" href="">个人中心</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" href="">退出</a>
    </Menu.Item>
  </Menu>
);

const LayoutHeader = ({userinfo}) => {
  return (
    <Row className={style.layout_header}>
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
          <Col xl={20} lg={18} md={16} sm={0} xs={0} className="menu">
            <Menu
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Col>
          <Col xl={4} lg={6} md={8} sm={0} xs={0}>
            <Dropdown overlay={user_menu} trigger={['click']}>
              <div className={style.user_info}>
                { userinfo &&
                  <span>{userinfo.user_name}</span>
                }
                <Icon type="caret-down" className={style.icon}/>
              </div>
            </Dropdown>
          </Col>
          <Col lg={0} md={0} sm={24} xs={24} className={style.show_detail}>
            <Dropdown overlay={detail_menu} trigger={['click']}>
              <Icon type="down-square" className={style.icon}/>
            </Dropdown>
          </Col>
        </Row>
      </Col>
    </Row>
  )
};

export default LayoutHeader;
