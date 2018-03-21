import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'dva'
import{ Link } from 'dva/router'
import { Layout, Menu, Icon, Spin } from 'antd'
import tools from '../utils/tools'
import _isEmprty from 'lodash/isEmpty'
import classNames from 'classnames'

import NProgress from 'nprogress'
import styles from './admin.less'


const { Header, Sider, Content } = Layout;
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu

class Admin extends React.Component {
  constructor(){
    super()
    this.state = {
      collapsed: false,
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    if(this.props.loading.global){
      NProgress.start()
    }else{
      NProgress.done()
    }
    return (
      <Layout
        style={{minHeight:'100%',minWidth:'900px'}}
      >
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className={styles.logo} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <MenuItem key="1">
              <Icon type="user" />
              <span>用户管理</span>
            </MenuItem>
            <SubMenu  key="sub1" title={<span><Icon type="book" /><span>文章编辑</span></span>}>
              <MenuItem key="2">
                <Link to='/admin/artical-publish'>
                <span>文章发表</span>
                </Link>
              </MenuItem>
              <MenuItem key="3">
                <Link to='/admin/artical-list'>
                  <span>文章列表</span>
                </Link>
              </MenuItem>
            </SubMenu>
            <MenuItem key="7">
              <Icon type="upload" />
              <span>nav 3</span>
            </MenuItem>
          </Menu>
        </Sider>
        <Spin spinning={this.props.loading.global} size="large" wrapperClassName="spinWrap">
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
              {this.props.children}
          </Content>
        </Layout>
        </Spin>
      </Layout>
    );
  }
}

Admin.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  app: PropTypes.object,
  loading: PropTypes.object,
}





export default connect(({
  admin,
  loading
  }) => ({
  admin,
  loading
}))(Admin)
