
import React from 'react'
import {Icon} from 'antd'
/*require('../../assets/ueditor/ueditor.config.js');
require('../../assets/ueditor/ueditor.all.min.js');
require('../../assets/ueditor/lang/zh-cn/zh-cn.js');*/

import styles from './UEditor.less';

class UEditor extends React.Component {
  constructor (){
    super()
    this.state={

    }
  }

  componentDidMount(){
    this.initEditor()
  }
  componentWillUnmount() {
    // 组件卸载后，清除放入库的id
    UE.delEditor(this.props.id);
  }
  initEditor() {
    const id = this.props.id;
    const ueEditor = UE.getEditor(this.props.id, {});
    const self = this;
    ueEditor.ready((ueditor) => {
      if (!ueditor) {
        UE.delEditor(id);
        self.initEditor();
      }
    })
  }
  render(){

    return (
      <div id={this.props.id} name="content" style={{height: `${this.props.height}px`}} type="text/plain"></div>
    )
  }
}

export default UEditor
