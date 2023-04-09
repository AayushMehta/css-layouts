import styles from './Button.module.css'

const Button = () => {
  const clickHandler = () => {
    alert('button clicked')
  }

  return (
    <div>
      <button onClick={clickHandler} className={styles.button}>
        Button
      </button>
    </div>
  )
}

export default Button
