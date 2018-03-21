import React from 'react'
import PropTypes from 'prop-types'
import {
  connect
} from 'dva'
import tools from '../utils/tools'
import _isEmprty from 'lodash/isEmpty'
import classNames from 'classnames'
import {Header,Footer} from '../components/Layout/index'
import {
  Helmet
} from 'react-helmet'

import styles from './app.less'
import NProgress from 'nprogress'

const App = ({
  children,
  location,
  dispatch,
  app,
  loading
  }) => {
  if (loading.global) {
    NProgress.start()
  } else {
    NProgress.done()
  }
  if (tools.getCookie('visited')) {
  } else {
    tools.setCookie('visited', true, 365);
    dispatch({
      type: 'app/setVistorCount'
    })
  }


  return (
    <div style={{height:'100%', paddingTop: '10px',padding:0,margin: '0'}}>
      <Header />
      <div className={classNames({[styles.main]:true,[styles.clearfix]:false})}>
        <div className={styles.content}>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )


}

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  app: PropTypes.object,
  loading: PropTypes.object,
}

export default connect(({
  app,
  loading
  }) => ({
  app,
  loading
}))(App)
