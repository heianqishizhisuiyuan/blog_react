
import React from 'react'
import {Link} from 'dva/router'
import {Icon} from 'antd'

import styles from './Artical.less';

class Artical extends React.Component {
  constructor (){
    super()
    this.state={

    }
  }

  render(){
    let dataSource = this.props.dataSource
    let type = this.props.dataSource.type.map((val)=> {
      return <a key={`${this.props._id+val.split(';')[0]}`}>{val.split(';')[1]}</a>
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
          <Link
            to={`/home-artical-more/${dataSource._id}`}
          >
            阅读全文 »
          </Link>
        </footer>
      </div>
    )
  }
}

export default Artical
