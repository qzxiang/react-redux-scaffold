import React, {component} from 'react'
import AddTodo from '../components/addTodo/addTodo.js'
import TodoList from '../components/todoList/todoList.js'
import {Menu, Layout} from 'antd'
import style from '../style.less'

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default () => {
  return (
    <div>
    <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>
            <AddTodo></AddTodo>
            <TodoList></TodoList>
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  )
}