import React from 'react'
import {Layout} from 'antd'
import LayoutHeader from './components/layoutHeader/index.js'
import LayoutFooter from "./components/layoutFooter";
import style from './style.less'

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