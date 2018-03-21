import { Link } from 'dva/router'
import styles from './Aside.less'

function Aside(Aside) {
  let contentHtml
  if(Aside.dataSource){
    contentHtml =Aside.dataSource.map((item,index) => {
      return <li key = {index}><Link to={item.fMenuPath} >{item.fMenuName}</Link></li>
    })
  }else{
    contentHtml = null
  }

  return (
    <div>
      <ul className={styles.asideList}>
        {contentHtml}
      </ul>
    </div>
  )
}
export default Aside
