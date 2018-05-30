import React, { Component } from 'react'
import {Layout} from 'antd'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as layoutActions from '../actions.js'
import LayoutHeader from '../components/layoutHeader/layoutHeader.js'
import LayoutFooter from "../components/layoutFooter/layoutFooter.js";
import style from './layout.less'

const { Header, Content, Footer } = Layout;

class MainLayout extends Component{
  componentDidMount() {
    console.log(this.props);
    this.props.layoutActions.getUserInfo("10")
  }
  render() {
    const {layoutInfo} = this.props;
    return (
      <Layout className={style.layout}>
        <Header className={style.header}>
          <LayoutHeader userinfo={layoutInfo.userinfo}/>
        </Header>
        <Content>
        </Content>
        <Footer className={style.footer}>
          <LayoutFooter/>
        </Footer>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        layoutInfo: state.layoutInfo
    }
};

const mapDispatchProps = (dispatch) => {
  return {
    layoutActions : bindActionCreators(layoutActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchProps)(MainLayout);
