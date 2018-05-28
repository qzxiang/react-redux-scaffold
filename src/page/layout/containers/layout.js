import React from 'react'
import {Layout} from 'antd'
import LayoutHeader from '../components/layoutHeader/layoutHeader.js'
import LayoutFooter from "../components/layoutFooter/layoutFooter.js";
import style from './layout.less'

const { Header, Content, Footer } = Layout;

export default () => {
  return (
    <Layout className={style.layout}>
      <Header className={style.header}>
        <LayoutHeader/>
      </Header>
      <Content>
      </Content>
      <Footer className={style.footer}>
        <LayoutFooter/>
      </Footer>
    </Layout>
  )
}