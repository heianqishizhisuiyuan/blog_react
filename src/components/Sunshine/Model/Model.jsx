import React from 'react'
import { Icon } from 'antd'
import Button from './../Button/Button.jsx'
import styles from './Model.less'

class Model extends React.Component {
  constructor() {
    super()
    this.state = {
      visible: false,
      mousePosition:null
    }
  }
  componentWillReceiveProps(props) {
    this.setState({
      visible: props.visible
    })
  }
  onClose=()=> {
    if(this.props.onClose && typeof this.props.onClose == 'function' ){
      this.props.onClose()
    }
    this.setState({
      visible: false
    })
  }
  onOk=()=> {
    if(this.props.onOk && typeof this.props.onOk == 'function' ){
      this.props.onOk()
    }
  }

  render(){
    return(
      <div style={{display: this.state.visible ? '':'none'}}>
        <div className={styles.modelbg}></div>
        <div className = {styles.modelWrap} >
          <div className = {styles.content}>
            <header className={styles.header}>
              <span>
                {this.props.title ? this.props.title: '标题'}
              </span>
              <span style={{float:'right',cursor:'pointer'}} onClick={this.onClose} >
                <Icon type="close" />
              </span>
            </header>
            <article className={styles.article}>
              {this.props.children}
            </article>

            <footer className={styles.footer}>
                <div style={{float:'right'}}>
                  <span style={{marginRight:'15px'}}>
                    <Button onClick={this.onOk}>确定</Button>
                  </span>
                  <span>
                     <Button onClick={this.onClose}>返回</Button>
                  </span>
                </div>
            </footer>
          </div>
        </div>
      </div>

    )
  }
}

export default Model
