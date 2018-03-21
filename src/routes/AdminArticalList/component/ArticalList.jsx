import React from 'react';
import {connect} from 'dva';
import{Link} from 'dva/router'
import PropTypes from 'prop-types';
import {classifyArray} from './../../../contants/content'

import {Row, Col, Select, Button, Icon, DatePicker, Table, Modal} from 'antd'
import moment from 'moment'

import styles from './ArticalList.less';

const nameSpace = 'articalList'
const Option = Select.Option
const RangePicker =DatePicker.RangePicker

class ArticalList extends React.Component {
	constructor () {
		super()
		this.state={
      startD:'',
      endD: '',
      classify:['00001;JavaScript'], //类别
      selectedRowKeys: [],
      selectedRowId:[],

		}
	}

  componentDidMount(){
    this.props.dispatch({
      type:`${nameSpace}/queryTable`,
      payload:{

      }
    })
  }

  getDate=()=> {
    return <RangePicker  onChange={this.dateChange}/>
  }
  dateChange=(data,dateString)=> {
    this.setState({
      startD: dateString[0],
      endD: dateString[1],
    })
  }
  filter=(filter)=> {
    let filterArray = _.cloneDeep(filter);
    if(!_.isEmpty(filterArray)){
      filterArray.map((val,index)=> {
        val.index=index+1;
        val.key = "row"+val._id.toString()
        let typeArry=[]
        if(!_.isEmpty(val.type)){
          val.type.map((value)=> {
            typeArry.push(value.split(';')[1])
          })
        }
        val.type= typeArry.join(',')
      })
    }
    return filterArray
  }
  // 类别
  getClassify=()=> {
    let options = classifyArray.map((val)=> {
      return <Option value={val.classifyId+';'+val.classifyName} key={val.classifyId.toString()}>{val.classifyName}</Option>
    })
    return(
      <Select
        defaultValue={'00001;JavaScript'}
        style={{
          width:150,
          height:'28px',
          lineHeight:'28px'
        }}
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
  //删除文章
  deleteArtical=(e)=> {
    let selectedId=[]
    if(e=='more'){
      selectedId = this.state.selectedRowId
    }else{
      selectedId.push(e)
    }
    if(_.isEmpty(selectedId)){
      Modal.info({
        title:'提示框',
        content:'请至少选择一个选项'
      })
      return
    }
    this.props.dispatch({
      type: `${nameSpace}/deleteArtical`,
      payload:{
        _id:selectedId
      }
    })
  }
  //查询文章列表
  searchData=()=> {
    let {startD,endD}= this.state
    let  classify =_.clone(this.state.classify);
    this.props.dispatch({
      type:`${nameSpace}/searchData`,
      payload:{
        startD:startD,
        endD: endD,
        classify:classify,
      }
    })
  }

  getTable=(tableData)=> {
    let selectedRowKeys=this.state.selectedRowKeys
    const columns = [
      {title:'序号',dataIndex: 'index', key: 'index',width:50 },
      { title: 'ID',dataIndex: '_id', key: '_id' ,width:180  },
      { title: '标题', dataIndex: 'title', key: 'title',width:150  },
      { title: '类型', dataIndex: 'type', key: 'type',width:150  },
      { title: '发表时间', dataIndex: 'startDate', key: 'startDate',width:150 },
      {title:"操作", dataIndex: '', key:'x',width:180,render:(e)=>{
        return(<div><Button type="primary" onClick={this.deleteArtical.bind(this,e._id)}>删除</Button> &nbsp;&nbsp;
          <Button type="primary" ><Link
            to={`admin/artical-publish/${e._id}`}
          >编辑</Link></Button></div>)
      }}
    ];
    const rowSelection = {
      selectedRowKeys: selectedRowKeys,
      onChange: this.onSelectChange,
    };

    return <Table
      columns={columns}
      dataSource={this.filter(tableData)}
      rowSelection={rowSelection}
      size="middle"
      pagination={{
        pageSize: 9
      }}
    />
  }
  onSelectChange = (selectedRowKeys,selectedRowKeysM) => {
    let selectId=[]
    selectedRowKeysM.map((val)=> {
      selectId.push(val._id)
    })
    this.setState({
      selectedRowKeys:selectedRowKeys,
      selectedRowId:selectId
    });
  }

	render() {
    const tableData = this.props.articalList.tableData
    let date = this.getDate()
    let getClassify = this.getClassify()
    let getTable = this.getTable(tableData)
		return (
      <div className={styles.contentWrap}>
        <div className={styles.selectBox}>
          <Row>
            <Col span={9}>
              <span>期间：</span>
              {date}
            </Col>
            <Col  span={6}>
              <span className={styles.selectMore}>类型：</span>
              {getClassify}
            </Col>
            <Col  span={2}>
              <Button type='primary' onClick={this.searchData}>查询</Button>
            </Col>
            <Col  span={2}>
              <Button type='primary'  onClick={this.deleteArtical.bind(this,"more")}>删除</Button>
            </Col>
          </Row>
        </div>
        <hr className={styles.boundary}/>
        <div className={styles.tableContent}>
          {getTable}
        </div>
      </div>
		)
	}
}

function mapStateToProps(state) {
	return{
    articalList: state.articalList,
		loading: state.loading
	}
}

export default connect(mapStateToProps)(ArticalList)
