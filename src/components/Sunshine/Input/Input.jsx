import React from 'react'
import classNames from 'classnames'
import styles from './Input.less'

class Input extends React.Component {
  constructor (){
    super()
    this.state={
      value: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this)
  }
  handleOnChange(e) {
   this.setState({
     value: e.target.value
   })
    if(this.props.onChange){
      this.props.onChange(e)
    }
  }
  handleOnKeyDown(e){
    if(e.key == 'Enter'&&this.props.onKeyDown){
      this.props.onKeyDown(e)
   }
  }
  render(){
    let type = this.props.type ?this.props.type:'text';
    let style= this.props.style?this.props.style:null;
    let defaultValue = this.props.defaultValue?this.props.defaultValue:''
    let onChange = this.props.onChange?this.props.onChange:null;
    let onKeyDown = this.props.onKeyDown?this.props.onKeyDown:null;
    let preIcon = this.props.preIcon?<span className={styles['preIcon']}>{this.props.preIcon}</span>:null
    if(defaultValue){
      this.setState({
        value: defaultValue
      })
    }
    return(
      <div style = {{display:'inline-block', position:'relative'}}>
        {preIcon}
        <input
          ref = {this.props.inputRef}
          type={type}
          className={classNames(
            styles.input,
            {[styles.isPreIcon]: this.props.preIcon?true:false}
          )}
          style={style}
          value={this.state.value}
          onChange={this.handleOnChange}
          onKeyDown={this.handleOnKeyDown}
        />
      </div>

    )
  }

}

export default Input
