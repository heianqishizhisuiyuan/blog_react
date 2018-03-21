import React from 'react';
import {connect} from 'dva';
import PropTypes from 'prop-types';
import {Icon} from 'antd'
import Artical from './../../../components/Artical/Artical'

import styles from './HomeArticalMore.less';

const nameSpace = 'homeArticalMore'

class HomeArticalMore extends React.Component {
	constructor () {
		super()
		this.state={

		}
	}
  componentWillMount(){
    let id = this.props.routeParams;
    this.props.dispatch({
      type:`${nameSpace}/queryMoreArtical`,
      payload:id
    })
  }

  render(){
    if(!_.isEmpty(this.props.homeArticalMore.moreArtical)){
      let dataSource = this.props.homeArticalMore.moreArtical;
      let type = dataSource.type.map((val)=> {
        return <a>{val.split(';')[1]}</a>
      })
      return(
        <div className={styles.articalWrap}>
          <header className={styles.title}>{dataSource.title}</header>
          <div className={styles.ariticalInfo}>
            <span><Icon type="clock-circle-o" /> 发表于 {dataSource.startDate} </span>
            <span className={styles.type}><Icon type="tag-o" /> 分类于 {type} </span>
            <span><Icon type="eye-o" /> 热度 450 ℃ </span>
            <span><Icon type="edit" /> 字数统计 1000 字 </span>
          </div>
          <div className={styles.content}>
            <p className={styles.img}>
              <img src={dataSource.imgUrl} />
            </p>
            <p className={styles.intro} dangerouslySetInnerHTML={{__html:dataSource.content}}>
            </p>
          </div>
          <footer className={styles.articalFooter}>
              阅读全文 »
          </footer>
        </div>
      )
    }else{
      return null
    }


  }
}


function mapStateToProps(state) {
	return{
    homeArticalMore: state.homeArticalMore,
		loading: state.loading
	}
}

export default connect(mapStateToProps)(HomeArticalMore)
