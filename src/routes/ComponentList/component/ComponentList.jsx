import React from 'react'
import { connect} from 'dva'
import {Icon} from 'antd'
import{ Button, Input, Search, Model } from '../../../components/Sunshine/index'
import styles from './ComponentList.less';

const nameSpace = 'componentList'
class ComponentList extends React.Component {
  constructor () {
    super()
    this.state={
      visible: false
    }
  }
  componentWillMount() {
    this.props.dispatch({
      type: `${nameSpace}/getSelectData`,
      payload: {

      }
    })
  }
  onChange(e) {
    console.log(e)
  }
  getSelect =(value,index)=> {

  }
  showModel=()=>{
    this.setState({
      visible: true
    })
  }
  onOk = ()=> {
    alert('确定按钮回调')
  }

  render(){
    let options=[]
    if(this.props.componentList.selectData && this.props.componentList.selectData.length){
      options = this.props.componentList.selectData
    }
    let style={
      width: '200px'
    }
    return(
      <div>
        <section className={styles.part}>
          <label className={styles.partLabel}> 按钮</label>
          <div className={styles.item}>
            <Button> 按钮</Button>
          </div>
        </section>
        <section className={styles.part}>
          <label className={styles.partLabel}> 输入框</label>
          <div className={styles.item}>
            <Input
              onChange={this.onChange.bind(this)}
             preIcon = {<Icon type = 'user'/>}
            />
          </div>
          <div className={styles.item}>
            <Input />
          </div>
        </section>
        <section className={styles.part}>
          <label className={styles.partLabel}> 单选框</label>
          <div className={styles.item}>
           <Search
             options={ options }
             getSelect = {this.getSelect}
             style = {style}
           />
          </div>
        </section>
        <section className={styles.part}>
          <label className={styles.partLabel}> 按钮</label>
          <div className={styles.item}>
            <Button onClick={this.showModel}> 模态框</Button>
            <Model
              visible={this.state.visible}
              onOk={this.onOk}
              title='弹出框'
            >
            <div>这是内容</div>
            </Model>
          </div>
        </section>
      </div>
    )
  }
}

function mapStateToProps({loading, componentList}){
  return{
    loading: loading.global,
    componentList
  }
}

export default connect (mapStateToProps)(ComponentList)
