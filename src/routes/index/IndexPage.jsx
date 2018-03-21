import React from 'react';
import {connect} from 'dva';
import PropTypes from 'prop-types'

import {Icon} from 'antd'
import {Link} from 'dva/router'
import {Button, Input} from '../../components/Sunshine/index'


import styles from './IndexPage.less';

const nameSpace = 'indexPage'

class IndexPage extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.onOk = this.onOk.bind(this)
  }

  handleClick() {
    this.props.dispatch({
      type: `${nameSpace}/link`,
      payload: {
        action: '1'
      }
    })
  }
  onOk() {
    console.log(111111)
  }
  getRef = () => {
      console.log(this.textInput)
      this.textInput.focus()
    }
    /*<li> <Button type='primary' size='large' onClick={ this.handleClick } > 跳转到userlist  </Button>  </li>*/
  render() {
    console.log(this)
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
            <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
          <input type="text" ref={(input)=> {
            this.textInput = input
          }}
          />
          <button onClick={this.getRef}>获取ref</button>
          <Button ref={(button) =>{
            this.button = button
          }}> 测试Ref</Button>
          <Input
            inputRef = {el => {
            this.inputElement = el
            }}
          />
        <li>
          input框
          <Input />
          <Icon type="caret-right" />
        </li>
          <li> <Link to='/user'>link 跳转到userlist </Link></li>
          112333333333
          <div className={styles.form}>123</div>
          <Button onClick={this.onOk}> 按钮</Button>
          <Button onClick={this.onOk} disabled> 按钮</Button>
        </ul>
      </div>
    )
  }

}


IndexPage.propTypes = {
  dispatch: PropTypes.func,
};

function mapStateToProps({
  indexPage
}) {
  return {
    indexPage
  }
}

export default connect(mapStateToProps)(IndexPage);