import React, { Component } from 'react';
import style from './layoutFooter.less';
import {Row, Col, Icon} from 'antd'

class LayoutFooter extends Component {
  render() {
    return (
      <Row className={style.layout_footer}>
        <Col sm={24} xs={0}>
          <p>Created by: <a href="https://github.com/qzxiang">https://github.com/qzxiang</a></p>
        </Col>
        <Col sm={0} xs={24}>
          <a href="https://github.com/qzxiang">
            <Icon type="cloud" />
          </a>
        </Col>
      </Row>
    );
  }
}

export default LayoutFooter;
