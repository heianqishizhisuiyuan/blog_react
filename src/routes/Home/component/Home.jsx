import React from 'react';
import {connect} from 'dva';
import PropTypes from 'prop-types';
import Artical from './../../../components/Artical/Artical'
import {Button} from 'antd'
import _ from 'lodash'
import styles from './Home.less';

const nameSpace = 'home';

class Home extends React.Component {
	constructor () {
		super()
		this.state={
      limit: 5,
		}
	}
  componentWillMount(){
    this.props.dispatch({
      type:`${nameSpace}/getHomeData`,
      payload:{
        lastId_: this.state.lastId_,
        limit: this.state.limit
      }
    })
  }

	render() {
    const {location, dispatch, home} =this.props
    let getArtical= this.getArtical(home.homeData)

		return (
			<section className={styles.artical}>
        {getArtical}
        <Button type="primary" onClick={this.getMoreArticle}>获取更多文章</Button>
      </section>
		)
	}
  //获取文章
  getArtical= (list)=> {
    if(!_.isEmpty(list)){
      let article = list.map((val)=> {
       return <Artical dataSource={val} key={val._id.toString()} />
      })
      return article
    }
  }

  //获取更多文章
  getMoreArticle=()=> {
    this.props.dispatch({
      type:`${nameSpace}/getHomeData`,
      payload:{
        lastId_: this.props.home.lastId_,
        limit: this.state.limit
      }
    })
  }
}


function mapStateToProps(state) {
	return{
		home: state.home,
		loading: state.loading
	}
}

export default connect(mapStateToProps)(Home)
