import { Icon } from 'antd'
import tools from '../../../utils/tools'
import styles from './Footer.less'


function Footer() {
  return(
    <div className={styles['footerWrap']}>
      <footer className={styles.footer}>
        <div style={{lineHeight: '80px',fontSize: 0}}>
          <p>
            Created by chao on 2017/10/10<br/>
            访问总次数：{tools.getCookie('vistorCount')}
          </p>
          <i style={{display: 'inline-block',verticalAlign: 'middle'}}>&nbsp;</i>
        </div>

      </footer>
    </div>
  )
}

export default Footer
