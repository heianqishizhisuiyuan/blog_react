import { Icon } from 'antd'
import styles from './Header.less'


function Header() {
  return(
    <div className={styles['headerWrap']}>
      <header className={styles.header}>
        <div className ={styles.logo}>
          <img src={require('../../../assets/sign.png')}/>
        </div>
        <div className={styles.logoWord}>
          <p>牧之</p>
        </div>
        <div className={styles.muneList}>
          <span><Icon type="home" /> 首页</span>
          <span><Icon type="appstore" /> 分类</span>
          <span><Icon type="camera" /> 归档</span>
          <span><Icon type="code" /> 展示</span>
          <span><Icon type="user" /> 关于</span>
          <span> <Icon type="search" /> 搜索</span>
        </div>
      </header>
    </div>
  )
}

export default Header
