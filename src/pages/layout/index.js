import React from 'react'
import LayoutHeader from './components/layoutHeader/index.js'
import {Layout} from 'antd'
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
      <Footer className={style.footer}>Footer</Footer>
    </Layout>
  )
}