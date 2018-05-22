import React, {component} from 'react'
import AddTodo from '../components/addTodo/addTodo.js'
import TodoList from '../components/todoList/todoList.js'
import {Layout} from 'antd'
import style from '../style.less'

const { Header, Content, Footer, Sider } = Layout;

export default () => {
  return (
    <Layout className={style.layout}>
        <Header className={style["layout-header"]}>Header</Header>
        <Layout>
          <Sider className={style["layout-slider"]}>Sider</Sider>
          <Content>
            <AddTodo/>
            <TodoList/>
          </Content>
        </Layout>
        <Footer className={style["layout-footer"]}>Footer</Footer>
      </Layout>
  )
}