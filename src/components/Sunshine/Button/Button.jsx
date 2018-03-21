import styles from './Button.less'

function Button (Button){
  let className =  Button.disabled ? styles.disabled :styles.btn;
  let disabled = Button.disabled ? true : false
  return(
    <button  disabled={disabled} className={className}  onClick={Button.onClick} style={Button.style}>
      <span>{Button.children}</span>
    </button>
  )
}

export default Button
