import React from 'react';
import {connect} from 'dva';
import PropTypes from 'prop-types';
import Artical from './../../../components/Artical/Artical'
import UEditor from './../../../components/UEditor/UEditor'
import {classifyArray} from './../../../contants/content'

import {Row, Col, Input, Select, Button, Upload, Icon, Modal} from 'antd'
import moment from 'moment'

import styles from './ArticalPublish.less';

const nameSpace = 'articalPublish'
const Option = Select.Option

class ArticalPublish extends React.Component {
	constructor () {
		super()
		this.state={
      previewVisible: false,
      previewImage: '',
      fileList: [],
      imgUrl:'',  //图片地址
      classify:['00001;JavaScript'], //类别
      title: '', //标题
		}
	}
  componentDidMount(){
    if(!_.isEmpty(this.props.params.id)){
      this.props.dispatch({
        type:`${nameSpace}/queryArtical`,
        payload:{
          id:this.props.params.id
        }
      })
    }
  }
  componentWillReceiveProps(nextProps) {
    if(!_.isEmpty(nextProps.params.id) && this.props.articalPublish.list!=nextProps.articalPublish.list){
      let artical = nextProps.articalPublish.list
      this.setState({
        title: artical.title,
        classify:artical.type,
        fileList: [{
          uid: -1,
          name: 'xxx.png',
          status: 'done',
          url: artical.imgUrl,
        }],
      })
        UE.getEditor('content').ready(()=> {
          UE.getEditor('content').setContent(artical.contentText);
        })
      }
  }

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ( fileList ) =>{
    if(fileList.file.status=='done'){
      this.setState({
        imgUrl:fileList.file.response.imgUrl
      })
    }
    this.setState(
      fileList
    )
  }

  publish=()=> {
    let content =UE.getEditor('content').getContent();
    let contentText = UE.getEditor('content').getContentTxt();
    let title = this.state.title;
    let imgUrl = this.state.imgUrl;
    let startDate = moment().format('YYYY-MM-DD HH:mm');
    let type =  this.state.classify
    this.props.dispatch({
      type:`${nameSpace}/publish`,
      payload:{
        content:content,
        contentText:contentText,
        title:title,
        imgUrl:imgUrl,
        startDate:startDate,
        type:type,
      }
    })
  }
  update=()=> {
    let content =UE.getEditor('content').getContent();
    let contentText = UE.getEditor('content').getContentTxt();
    let title = this.state.title;
    let imgUrl = this.state.imgUrl|| this.props.articalPublish.list.imgUrl;
    let startDate = moment().format('YYYY-MM-DD HH:mm');
    let type =  this.state.classify
    this.props.dispatch({
      type:`${nameSpace}/update`,
      payload:{
        _id: this.props.params.id,
        content:content,
        contentText:contentText,
        title:title,
        imgUrl:imgUrl,
        endDate:startDate,
        type:type,
      }
    })
  }
  // 类别
  getClassify=()=> {
    let options = classifyArray.map((val)=> {
      return <Option value={val.classifyId+';'+val.classifyName} key={val.classifyId.toString()}>{val.classifyName}</Option>
    })
    return(
      <Select
        value={this.state.classify}
        style={{minWidth:250}}
        onChange={this.classifyChange}
        mode='multiple'
      >
        {options}
      </Select>
    )
  }
  //获取分类
  classifyChange=(e)=> {
    this.setState({
      classify:e
    })
  }
  //获取标题
  titleChange=(e)=> {
    this.setState({
      title:e.target.value
    })
  }

	render() {
    const { previewVisible, previewImage, fileList } = this.state;
    let getClassify = this.getClassify()
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
		return (
			<div className={styles.publishWrap}>
        <Row>
          <Col span={4}><div className={styles.lable}>标题:</div></Col>
          <Col span={10}>
            <Input onChange={this.titleChange} value={this.state.title}/>
          </Col>
        </Row>
        <Row>
          <Col span={4}><div className={styles.lable}>分类:</div></Col>
          <Col span={10}>
            {getClassify}
          </Col>
        </Row>
        <Row>
          <Col span={4}><div className={styles.lable}>图片上传:</div></Col>
          <Col span={10}>
            <Upload
              action="/imageUpload"
              listType="picture-card"
              fileList={fileList}
              onPreview={this.handlePreview}
              onChange={this.handleChange}
            >
              {fileList.length >= 3 ? null : uploadButton}
            </Upload>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </Col>
        </Row>
        <Row>
          <Col span={4}><div className={styles.lable}>内容:</div></Col>
          <Col span={15}>
            <UEditor  id="content" height="300"/>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div style={{textAlign:'center'}}>
              {this.props.params.id? <Button type="primary" onClick={this.update}>更新</Button>: <Button type="primary" onClick={this.publish}>发布</Button>}

            </div>
          </Col>
        </Row>
      </div>
		)
	}



}

function mapStateToProps(state) {
	return{
    articalPublish: state.articalPublish,
		loading: state.loading
	}
}

export default connect(mapStateToProps)(ArticalPublish)
