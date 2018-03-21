import React from 'react'
import classnames from 'classnames'
import styles from './Search.less'

class Input extends React.Component {
  constructor (){
    super()
    this.state={
      drop: false,
      value: ''
    }
  }
  getOption = () => {
    let optionList =this.getOptionList(this.props.options)
    return (
      <div style={{width:this.props.style.width || '150px'}} className={classnames(styles.option,{[styles.optionDrop]:this.state.drop,[styles.optionUp]:!this.state.drop})}>
        <ul className={styles['option-wrap']}>
          {optionList}
        </ul>
      </div>
    )
  }
  getOptionList = (data)=> {
    let optionList
    if(data.length>0){
      optionList = data.map((val,index) => {
        return <li key={val.index} onClick={this.onClick.bind(this, val.index)}>{val.value} </li>
      })
    }
    return optionList
  }
  onClick = (index, e) => {
    this.setState({
      value:e.target.textContent
    })
    this.props.getSelect(e.target.textContent, index)
  }
  onFoucus  = () => {
    this.setState({
      drop: !this.state.drop
    })
  }
  onBlur = () => {
    this.setState({
      drop: false
    })
  }
  render(){
    let option = this.getOption()
    return(
      <div className={styles['select-wrap']}>
        <ul style={{width: this.props.style.width||'150px'}} className={styles['input-wrap']}>
          <li className={styles.selectItem}>
            <span>
              <input  value={this.state.value} type="text" className={styles.input} onFocus={this.onFoucus} onBlur={this.onBlur}/>
            </span>
          </li>
        </ul>
        { option }
      </div>
    )
  }

}

export default Input
