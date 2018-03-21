import React from 'react'
import { connect} from 'dva'
import PropTypes from 'prop-types'
import _isEmpty from 'lodash/isEmpty'
import {message, Icon} from 'antd'
import styles from './Login.less';

const nameSpace = 'userLogin'
class Login extends React.Component {
  constructor () {
    super()
    this.state={
      username: '',
      password:'',
      userIconState: false,
      pwordIconState: false
    }
    this.getHeight = this.getHeight.bind(this)
    this.getUserName = this.getUserName.bind(this)
    this.getPassword = this.getPassword.bind(this)
    this.btnLogin = this.btnLogin.bind(this)
    this.onKeysLogin = this.onKeysLogin.bind(this)
  }
  getHeight() {
   return (document.body.clientHeight-250)/2
  }
  getUserName(e) {
    this.setState({
      username:e.target.value
    })
    if(e.target.value.length>=5){
      this.setState({
        userIconState: true
      })
    }else{
      this.setState({
        userIconState: false
      })
    }
  }
  getPassword(e) {
    this.setState({
      password: e.target.value
    })
    if(e.target.value ){
      this.setState({
        pwordIconState: true
      })
    }else{
      this.setState({
        pwordIconState: false
      })
    }
  }
  btnLogin() {
    if(_isEmpty(this.state.username) || _isEmpty(this.state.password)){
      message.error('请输入账号或密码')
    }else{
      const param = {
        username: this.state.username,
        password: this.state.password
      }
      this.props.dispatch({
        type: `${nameSpace}/login`,
        payload: {
          param: param
        }
      })
    }
  }
  onKeysLogin(e){
   if(e.key == 'Enter') {
        this.btnLogin()
   }
  }
  render(){
    const height = this.getHeight()
    let iconStyle = {
      fontSize: '16px',
      color: '#fff',
      background: 'rgb(0, 168, 84)',
      borderRadius: '50%',
      marginLeft: '10px',
    }
    return(
      <div className={styles.bgm}>
        <div className={styles.loginWrap} style={{position:'relative',top:height+'px'}}>
          <div className={ styles.inputWrap}>
            <label className={styles.labelStyle}> 账号:</label>
            <input type="text" placeholder="用户" onChange={this.getUserName}/>
            <span style={{opacity: (this.state.userIconState) ?'1':'0'}}>
               <Icon type="check" style={iconStyle}  />
            </span>
          </div>
          <div className={ styles.inputWrap}>
            <label  className={styles.labelStyle}> 密码:</label>
            <input type="password" placeholder="密码" onChange={this.getPassword} onKeyDown={this.onKeysLogin} />
            <span  style={{opacity: (this.state.pwordIconState) ?'1':'0'  }}>
               <Icon type="check" style={iconStyle} />
            </span>
          </div>
          <div  className={ styles.inputWrap}>
            <button className={styles.btn} onClick={this.btnLogin} >登录</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{userLogin: state.userLogin,loading: state.loading.global}
}

export default connect (mapStateToProps)(Login)
