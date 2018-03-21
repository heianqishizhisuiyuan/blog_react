import React from 'react';
import {connect} from 'dva';
import PropTypes from 'prop-types';
import Artical from './../../../components/Artical/Artical'

import styles from './Home.less';

const nameSpace = 'home'

class Home extends React.Component {
	constructor () {
		super()
		this.state={

		}
	}

	render() {
		return (
			<section className={styles.artical}>
        欢迎首页
      </section>
		)
	}
}

function mapStateToProps(state) {
	return{
		home: state.blogIndex,
		loading: state.loading
	}
}

export default connect(mapStateToProps)(Home)
